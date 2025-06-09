'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  annotationPlugin
);

interface IceShape {
  value: string;
  label: string;
  capacity: number;
}

interface CalculatorState {
  calcMode: 'machines' | 'demand';
  numMachines: number;
  targetMonthlyDemand: number;
  avgCustomerDemand: number;
  iceShape: string;
  sellingPrice: number;
  daysOperating: number;
  laborHoursPerDay: number;
  laborCostPerHour: number;
  equipmentCostPerMachine: number;
  cycleTime: number;
  waterPerCycle: number;
  waterRate: number;
  iceMakingPower: number;
  iceDetachingPower: number;  
  detachingDuration: number;
  electricityRate: number;
  packagingCostUnit: number;
  distributionCostUnit: number;
  monthlyRent: number;
  monthlyInsurance: number;
  maintenanceCostPerMachine: number;
  downPaymentPercent: number;
  interestRate: number;
  loanTermYears: number;
}

interface PartnerState {
  totalAddressableMarket: number;
  targetMarketSharePercent: number;
  averageCustomerValue: number;
  partnersPerMonth: number;
  marketPenetrationPerPartner: number;
  timelineMonths: number;
  companyProfitPercent: number;
  foundingPartnerPercent: number;
  earlyPartnerPercent: number;
  growthPartnerPercent: number;
  standardPartnerPercent: number;
  snowballMultiplier: number;
}

interface PartnerTier {
  name: string;
  range: string;
  baseProfit: number;
  snowballRate: number;
  color: string;
}

interface PartnerProjection {
  month: number;
  partnersAdded: number;
  totalPartners: number;
  marketShare: number;
  totalRevenue: number;
  companyProfit: number;
  partnerPayouts: { [key: string]: number };
  cumulativePartnerProfit: { [key: string]: number };
}

const iceShapes: IceShape[] = [
  { value: 'cube', label: 'Cube 55mm (120/cycle)', capacity: 120 },
  { value: 'sphere_small', label: 'Sphere 60mm (100/cycle)', capacity: 100 },
  { value: 'sphere_large', label: 'Sphere 75mm (64/cycle)', capacity: 64 },
  { value: 'bar', label: 'Collins Bar (96/cycle)', capacity: 96 },
  { value: 'diamond', label: 'Diamond (120/cycle)', capacity: 120 },
];

const partnerTiers: PartnerTier[] = [
  { name: 'Founding', range: '1-5', baseProfit: 40, snowballRate: 2.0, color: '#FF6B6B' },
  { name: 'Early', range: '6-15', baseProfit: 35, snowballRate: 1.5, color: '#4ECDC4' },
  { name: 'Growth', range: '16-50', baseProfit: 30, snowballRate: 1.0, color: '#45B7D1' },
  { name: 'Standard', range: '51+', baseProfit: 25, snowballRate: 0.5, color: '#96CEB4' },
];

const initialPartnerState: PartnerState = {
  totalAddressableMarket: 50000000, // $50M market
  targetMarketSharePercent: 20, // 20% target
  averageCustomerValue: 2500, // $2,500 per customer annually
  partnersPerMonth: 3, // 3 new partners per month
  marketPenetrationPerPartner: 2, // 2% market penetration per partner
  timelineMonths: 24, // 2 year timeline
  companyProfitPercent: 30, // Company keeps 30%
  foundingPartnerPercent: 40, // Founding partners get 40% base
  earlyPartnerPercent: 35, // Early partners get 35% base
  growthPartnerPercent: 30, // Growth partners get 30% base
  standardPartnerPercent: 25, // Standard partners get 25% base
  snowballMultiplier: 0.5, // 0.5% additional for each new partner
};

const initialState: CalculatorState = {
  calcMode: 'demand',
  numMachines: 1,
  targetMonthlyDemand: 1000000,
  avgCustomerDemand: 3200,
  iceShape: 'cube',
  sellingPrice: 0.99,
  daysOperating: 30,
  laborHoursPerDay: 24,
  laborCostPerHour: 18.00,
  equipmentCostPerMachine: 5000,
  cycleTime: 24,
  waterPerCycle: 7.9,
  waterRate: 0.012,
  iceMakingPower: 600,
  iceDetachingPower: 1200,
  detachingDuration: 1,
  electricityRate: 0.16,
  packagingCostUnit: 0.05,
  distributionCostUnit: 0.10,
  monthlyRent: 5000,
  monthlyInsurance: 500,
  maintenanceCostPerMachine: 50,
  downPaymentPercent: 10,
  interestRate: 8.0,
  loanTermYears: 4,
};

export default function BusinessCalculator() {
  const [activeTab, setActiveTab] = useState<'financial' | 'report' | 'partners'>('financial');
  const [state, setState] = useState<CalculatorState>(initialState);
  const [partnerState, setPartnerState] = useState<PartnerState>(initialPartnerState);
  const [partnerProjections, setPartnerProjections] = useState<PartnerProjection[]>([]);
  const [results, setResults] = useState<any>({});
  const [lockYAxis, setLockYAxis] = useState(false);
  const [chartControls, setChartControls] = useState({
    showRevenue: true,
    showCosts: true,
    showProfit: true,
    showBreakEven: true,
    showMargin: true
  });
  const [iframeLoading, setIframeLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);
  
  const cashFlowChartRef = useRef<any>(null);
  const costBreakdownChartRef = useRef<any>(null);
  const productionChartRef = useRef<any>(null);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  };

  const formatPercent = (value: number) => {
    return new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 1 }).format(value);
  };

  const calculatePMT = (rate: number, nper: number, pv: number) => {
    if (rate === 0) return pv / nper;
    return (pv * rate * Math.pow(1 + rate, nper)) / (Math.pow(1 + rate, nper) - 1);
  };

  const calculatePartnerProjections = useCallback(() => {
    const projections: PartnerProjection[] = [];
    const targetRevenue = (partnerState.totalAddressableMarket * partnerState.targetMarketSharePercent) / 100;
    const targetCustomers = targetRevenue / partnerState.averageCustomerValue;
    
    let currentPartners = 0;
    let currentMarketShare = 0;
    let partnerJoinDates: { [partnerId: string]: number } = {};
    
    for (let month = 1; month <= partnerState.timelineMonths; month++) {
      // Add new partners this month
      const partnersAdded = Math.min(partnerState.partnersPerMonth, 
        Math.max(0, Math.ceil(targetCustomers / partnerState.marketPenetrationPerPartner) - currentPartners));
      
      for (let i = 0; i < partnersAdded; i++) {
        currentPartners++;
        partnerJoinDates[`partner_${currentPartners}`] = month;
      }
      
      // Calculate market share based on partners
      currentMarketShare = Math.min(
        partnerState.targetMarketSharePercent,
        (currentPartners * partnerState.marketPenetrationPerPartner) / targetCustomers * partnerState.targetMarketSharePercent
      );
      
      // Calculate revenue and profits
      const monthlyRevenue = (partnerState.totalAddressableMarket * currentMarketShare) / (100 * 12);
      const grossProfit = monthlyRevenue * 0.7; // Assume 70% gross margin
      const companyProfit = grossProfit * (partnerState.companyProfitPercent / 100);
      const availableForPartners = grossProfit - companyProfit;
      
      // Calculate partner payouts with snowball effect
      const partnerPayouts: { [key: string]: number } = {};
      const cumulativePartnerProfit: { [key: string]: number } = {};
      
      for (let partnerId = 1; partnerId <= currentPartners; partnerId++) {
        const partnerIdStr = `partner_${partnerId}`;
        const joinMonth = partnerJoinDates[partnerIdStr];
        
        // Determine partner tier
        let tier: PartnerTier;
        if (partnerId <= 5) tier = partnerTiers[0]; // Founding
        else if (partnerId <= 15) tier = partnerTiers[1]; // Early
        else if (partnerId <= 50) tier = partnerTiers[2]; // Growth
        else tier = partnerTiers[3]; // Standard
        
        // Base profit percentage
        let effectiveRate = tier.baseProfit;
        
        // Add snowball bonus for each partner that joined after this one
        const partnersJoinedAfter = currentPartners - partnerId;
        const snowballBonus = partnersJoinedAfter * tier.snowballRate;
        effectiveRate += snowballBonus;
        
        // Calculate payout
        const monthlyPayout = (availableForPartners * effectiveRate) / 100;
        partnerPayouts[partnerIdStr] = monthlyPayout;
        
        // Calculate cumulative profit since joining
        const monthsActive = month - joinMonth + 1;
        const previousMonth = projections[month - 2];
        const previousCumulative = previousMonth?.cumulativePartnerProfit[partnerIdStr] || 0;
        cumulativePartnerProfit[partnerIdStr] = previousCumulative + monthlyPayout;
      }
      
      projections.push({
        month,
        partnersAdded,
        totalPartners: currentPartners,
        marketShare: currentMarketShare,
        totalRevenue: monthlyRevenue,
        companyProfit,
        partnerPayouts,
        cumulativePartnerProfit
      });
    }
    
    return projections;
  }, [partnerState]);

  const calculateModel = useCallback(() => {
    const selectedShape = iceShapes.find(shape => shape.value === state.iceShape);
    const unitsPerCycle = selectedShape ? selectedShape.capacity : 120;
    
    const cyclesPerDay = state.cycleTime > 0 ? 24 / state.cycleTime : 0;
    const maxUnitsPerMachineDay = unitsPerCycle * cyclesPerDay;
    
    let actualNumMachines: number;
    let totalMonthlyUnitProduction: number;
    let targetMonthlyDemand = state.targetMonthlyDemand;

    if (state.calcMode === 'machines') {
      actualNumMachines = state.numMachines;
      totalMonthlyUnitProduction = maxUnitsPerMachineDay * actualNumMachines * state.daysOperating;
      targetMonthlyDemand = totalMonthlyUnitProduction;
    } else {
      targetMonthlyDemand = state.targetMonthlyDemand;
      const unitsPerMachineMonth = maxUnitsPerMachineDay * state.daysOperating;
      if (unitsPerMachineMonth > 0) {
        actualNumMachines = Math.ceil(targetMonthlyDemand / unitsPerMachineMonth);
      } else {
        actualNumMachines = 0;
      }
      const maxCapacity = unitsPerMachineMonth * actualNumMachines;
      totalMonthlyUnitProduction = Math.min(targetMonthlyDemand, maxCapacity);
    }

    // Energy cost calculations
    const makingDuration = Math.max(0, state.cycleTime - state.detachingDuration);
    const energyPerCycle = ((state.iceMakingPower / 1000) * makingDuration) + ((state.iceDetachingPower / 1000) * state.detachingDuration);
    const dailyEnergyPerMachine = energyPerCycle * cyclesPerDay;
    const dailyWaterPerMachine = state.waterPerCycle * cyclesPerDay;
    
    const energyCostPerUnit = maxUnitsPerMachineDay > 0 ? (dailyEnergyPerMachine * state.electricityRate) / maxUnitsPerMachineDay : 0;
    const waterCostPerUnit = maxUnitsPerMachineDay > 0 ? (dailyWaterPerMachine * state.waterRate) / maxUnitsPerMachineDay : 0;
    const variableCostPerUnit = energyCostPerUnit + waterCostPerUnit + state.packagingCostUnit + state.distributionCostUnit;

    const totalMonthlyRevenue = totalMonthlyUnitProduction * state.sellingPrice;
    const totalMonthlyVariableCosts = variableCostPerUnit * totalMonthlyUnitProduction;
    const totalMonthlyLaborCost = state.laborHoursPerDay * state.laborCostPerHour * state.daysOperating;
    const totalMonthlyMaintenance = state.maintenanceCostPerMachine * actualNumMachines;
    const totalMonthlyFixedCosts = state.monthlyRent + state.monthlyInsurance + totalMonthlyMaintenance;
    const totalMonthlyOperatingCosts = totalMonthlyVariableCosts + totalMonthlyLaborCost + totalMonthlyFixedCosts;
    const monthlyGrossProfit = totalMonthlyRevenue - totalMonthlyVariableCosts;

    const totalEquipmentCost = state.equipmentCostPerMachine * actualNumMachines;
    const initialDownPayment = totalEquipmentCost * (state.downPaymentPercent / 100);
    const totalLoanAmount = totalEquipmentCost - initialDownPayment;
    const monthlyInterestRate = (state.interestRate / 100) / 12;
    const loanTermMonths = state.loanTermYears * 12;
    const monthlyLoanPayment = (loanTermMonths > 0 && totalLoanAmount > 0) ? 
      calculatePMT(monthlyInterestRate, loanTermMonths, totalLoanAmount) : 0;

    const totalMonthlyCosts = totalMonthlyOperatingCosts + monthlyLoanPayment;
    const monthlyNetProfit = totalMonthlyRevenue - totalMonthlyCosts;
    const annualNetProfit = monthlyNetProfit * 12;
    const annualRevenue = totalMonthlyRevenue * 12;

    const totalCostPerUnit = totalMonthlyUnitProduction > 0 ? totalMonthlyCosts / totalMonthlyUnitProduction : 0;
    const netProfitMargin = totalMonthlyRevenue > 0 ? monthlyNetProfit / totalMonthlyRevenue : 0;
    const grossMargin = totalMonthlyRevenue > 0 ? monthlyGrossProfit / totalMonthlyRevenue : 0;

    const profitPerUnitMargin = state.sellingPrice - variableCostPerUnit;
    const totalMonthlyFixedForBreakEven = totalMonthlyLaborCost + totalMonthlyFixedCosts + monthlyLoanPayment;
    const breakEvenUnits = profitPerUnitMargin > 0 ? totalMonthlyFixedForBreakEven / profitPerUnitMargin : Infinity;
    const breakEvenRevenue = breakEvenUnits === Infinity ? Infinity : breakEvenUnits * state.sellingPrice;

    const requiredCustomers = state.avgCustomerDemand > 0 ? Math.ceil(targetMonthlyDemand / state.avgCustomerDemand) : 0;
    const maxMonthlyCapacity = maxUnitsPerMachineDay * actualNumMachines * state.daysOperating;
    const capacityUtilization = maxMonthlyCapacity > 0 ? (totalMonthlyUnitProduction / maxMonthlyCapacity) : 0;

    const paybackPeriod = (annualNetProfit > 0 && totalEquipmentCost > 0) ? totalEquipmentCost / annualNetProfit : Infinity;
    const annualROI = (totalEquipmentCost > 0) ? annualNetProfit / totalEquipmentCost : 0;

    // Calculate individual variable costs for display
    const monthlyEnergyCost = totalMonthlyUnitProduction * energyCostPerUnit;
    const monthlyWaterCost = totalMonthlyUnitProduction * waterCostPerUnit;
    const monthlyPackagingCost = totalMonthlyUnitProduction * state.packagingCostUnit;
    const monthlyDistributionCost = totalMonthlyUnitProduction * state.distributionCostUnit;

    setResults({
      actualNumMachines,
      unitsPerMachinePerDay: maxUnitsPerMachineDay,
      totalMonthlyUnitProduction,
      totalMonthlyRevenue,
      annualRevenue,
      totalMonthlyVariableCosts,
      monthlyGrossProfit,
      grossMargin,
      totalMonthlyFixedCosts,
      totalMonthlyOperatingCosts,
      totalEquipmentCost,
      initialDownPayment,
      totalLoanAmount,
      monthlyLoanPayment,
      totalMonthlyCosts,
      monthlyNetProfit,
      annualNetProfit,
      variableCostPerUnit,
      totalCostPerUnit,
      netProfitMargin,
      breakEvenUnits,
      breakEvenRevenue,
      requiredCustomers,
      capacityUtilization,
      maxMonthlyCapacity,
      paybackPeriod,
      annualROI,
      monthlyEnergyCost,
      monthlyWaterCost,
      monthlyPackagingCost,
      monthlyDistributionCost,
      totalMonthlyLaborCost,
      loanTermYears: state.loanTermYears,
      targetMonthlyDemand,
      cyclesPerDay,
      unitsPerCycle,
    });
  }, [state]);

  useEffect(() => {
    calculateModel();
  }, [calculateModel]);

  useEffect(() => {
    const projections = calculatePartnerProjections();
    setPartnerProjections(projections);
  }, [calculatePartnerProjections]);

  // Auto-update partner parameters from financial calculator
  useEffect(() => {
    if (results.totalMonthlyRevenue && results.netProfitMargin) {
      // Calculate Total Addressable Market (scale current market by 20x for potential)
      const scaledMarket = state.targetMonthlyDemand * state.sellingPrice * 12 * 20;
      
      // Calculate Average Customer Value (annual revenue per customer)
      const annualCustomerValue = state.avgCustomerDemand * state.sellingPrice * 12;
      
      // Use net profit margin from financial calculator 
      const companyProfitPercent = Math.max(20, Math.min(50, results.netProfitMargin * 100));

      setPartnerState(prev => ({
        ...prev,
        totalAddressableMarket: scaledMarket,
        averageCustomerValue: annualCustomerValue,
        companyProfitPercent: companyProfitPercent
      }));
    }
  }, [results, state.targetMonthlyDemand, state.sellingPrice, state.avgCustomerDemand]);

  const updateState = (field: keyof CalculatorState, value: any) => {
    setState(prev => ({ ...prev, [field]: value }));
  };

  const updatePartnerState = (field: keyof PartnerState, value: any) => {
    setPartnerState(prev => ({ ...prev, [field]: value }));
  };

  // Chart data preparation with loan completion logic
  const prepareChartData = useCallback(() => {
    const chartDurationMonths = Math.max((results.loanTermYears || 4) * 12, 60);
    const labels = Array.from({length: chartDurationMonths}, (_, i) => `Month ${i+1}`);
    
    const monthlyRevenueData = [];
    const monthlyTotalCostsData = [];
    const monthlyNetProfitData = [];
    const monthlyNetProfitMarginData = [];
    const breakEvenData = Array(chartDurationMonths).fill(results.breakEvenRevenue || 0);
    
    const loanTermMonths = (results.loanTermYears || 4) * 12;
    
    for (let month = 1; month <= chartDurationMonths; month++) {
      const revenue = (results.totalMonthlyRevenue || 0);
      const variableCosts = (results.variableCostPerUnit || 0) * (results.totalMonthlyUnitProduction || 0);
      const fixedOpCosts = (results.totalMonthlyLaborCost || 0) + (results.totalMonthlyFixedCosts || 0);
      const currentLoanPayment = (month <= loanTermMonths) ? (results.monthlyLoanPayment || 0) : 0;
      const totalCosts = variableCosts + fixedOpCosts + currentLoanPayment;
      const netProfit = revenue - totalCosts;
      const profitMargin = revenue > 0 ? (netProfit / revenue) * 100 : 0;
      
      monthlyRevenueData.push(revenue);
      monthlyTotalCostsData.push(totalCosts);
      monthlyNetProfitData.push(netProfit);
      monthlyNetProfitMarginData.push(profitMargin);
    }
    
    return {
      labels,
      monthlyRevenueData,
      monthlyTotalCostsData,
      monthlyNetProfitData,
      monthlyNetProfitMarginData,
      breakEvenData,
      loanTermMonths
    };
  }, [results]);

  const chartData = prepareChartData();

  // Cash Flow Chart Configuration
  const cashFlowChartData = {
    labels: chartData.labels,
    datasets: [
      {
        label: 'Monthly Revenue',
        data: chartData.monthlyRevenueData,
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.1)',
        borderWidth: 3,
        tension: 0.2,
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointRadius: 4,
        pointHoverRadius: 6,
        hidden: !chartControls.showRevenue
      },
      {
        label: 'Total Monthly Costs',
        data: chartData.monthlyTotalCostsData,
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 3,
        tension: 0.2,
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointRadius: 4,
        pointHoverRadius: 6,
        hidden: !chartControls.showCosts
      },
      {
        label: 'Monthly Net Profit',
        data: chartData.monthlyNetProfitData,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 3,
        tension: 0.2,
        fill: true,
        pointBackgroundColor: 'rgb(75, 192, 192)',
        pointRadius: 4,
        pointHoverRadius: 6,
        hidden: !chartControls.showProfit
      },
      {
        label: 'Break-Even Point',
        data: chartData.breakEvenData,
        borderColor: 'rgba(255, 159, 64, 0.8)',
        borderWidth: 2,
        borderDash: [6, 6],
        pointRadius: 0,
        hidden: !chartControls.showBreakEven
      },
      {
        label: 'Net Profit Margin (%)',
        data: chartData.monthlyNetProfitMarginData,
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 3,
        tension: 0.2,
        pointBackgroundColor: 'rgba(153, 102, 255, 1)',
        pointRadius: 3,
        pointHoverRadius: 5,
        yAxisID: 'y1',
        hidden: !chartControls.showMargin
      }
    ]
  };

  const cashFlowChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: { display: true, text: 'Month' }
      },
      y: {
        position: 'left' as const,
        title: { display: true, text: 'Amount ($)' },
        ticks: {
          callback: (value: any) => formatCurrency(value)
        }
      },
      y1: {
        type: 'linear' as const,
        position: 'right' as const,
        title: { display: true, text: 'Profit Margin (%)' },
        min: -50,
        max: 100,
        grid: {
          drawOnChartArea: false
        },
        ticks: {
          callback: (value: any) => `${value}%`
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            if (context.dataset.yAxisID === 'y1') {
              return `${context.dataset.label}: ${context.parsed.y}%`;
            }
            return `${context.dataset.label}: ${formatCurrency(context.parsed.y)}`;
          }
        }
      },
      annotation: {
        annotations: {
          loanCompletionLine: {
            type: 'line' as const,
            xMin: chartData.loanTermMonths - 1,
            xMax: chartData.loanTermMonths - 1,
            borderColor: 'green',
            borderWidth: 2,
            label: {
              content: 'Loan Paid Off',
              enabled: true
            }
          }
        }
      }
    }
  };

  // Cost Breakdown Chart Configuration
  const costBreakdownChartData = {
    labels: ['Variable Costs', 'Labor', 'Fixed Costs', 'Financing'],
    datasets: [{
      data: [
        results.totalMonthlyVariableCosts || 0,
        results.totalMonthlyLaborCost || 0,
        results.totalMonthlyFixedCosts || 0,
        results.monthlyLoanPayment || 0
      ],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
    }]
  };

  const costBreakdownChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.label || '';
            const value = formatCurrency(context.raw || 0);
            const total = context.chart.data.datasets[0].data.reduce((a: number, b: number) => a + b, 0);
            const percentage = total > 0 ? ((context.raw / total) * 100).toFixed(1) + '%' : '0%';
            return `${label}: ${value} (${percentage})`;
          }
        }
      }
    }
  };

  // Production Chart Configuration
  const productionChartData = {
    labels: chartData.labels.slice(0, 12), // First year only
    datasets: [{
      label: 'Production Volume',
      data: Array(12).fill(results.totalMonthlyUnitProduction || 0),
      backgroundColor: 'rgba(75, 192, 192, 0.5)'
    }]
  };

  const productionChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        bottom: 15
      }
    },
    scales: {
      x: {
        ticks: {
          padding: 8
        }
      },
      y: {
        title: { display: true, text: 'Units Produced' },
        beginAtZero: true
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg border-t-4 border-indigo-600">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        IMT300 Premium Craft Ice <span className="text-indigo-600">Business ROI Model</span>
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Optimize your ice business investment with our interactive financial analysis tool. Customize parameters to see real-time projections and ROI calculations.
      </p>

      {/* Tab Navigation */}
      <div className="mb-6 bg-gradient-to-r from-indigo-100 via-white to-indigo-100 p-4 rounded-lg border border-indigo-300 shadow-md">
        <ul className="flex flex-wrap -mb-px text-md font-medium text-center justify-center" role="tablist">
          <li className="mr-4" role="presentation">
            <button 
              className={`inline-flex items-center p-4 border-b-2 rounded-t-lg transition-all duration-200 transform hover:scale-105 ${
                activeTab === 'financial' 
                  ? 'border-indigo-600 text-indigo-600' 
                  : 'border-transparent hover:text-indigo-800 hover:border-indigo-300'
              }`}
              onClick={() => setActiveTab('financial')}
              type="button" 
              role="tab"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Financial Analysis
            </button>
          </li>
          <li className="mx-2" role="presentation">
            <button 
              className={`inline-flex items-center p-4 border-b-2 rounded-t-lg transition-all duration-200 transform hover:scale-105 ${
                activeTab === 'report' 
                  ? 'border-indigo-600 text-indigo-600' 
                  : 'border-transparent hover:text-indigo-800 hover:border-indigo-300'
              }`}
              onClick={() => setActiveTab('report')}
              type="button" 
              role="tab"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m-6-8h6m-6 8h6m-6-8h6M9 20h6M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              </svg>
              Market Research Report
            </button>
          </li>
          <li className="ml-2" role="presentation">
            <button 
              className={`inline-flex items-center p-4 border-b-2 rounded-t-lg transition-all duration-200 transform hover:scale-105 ${
                activeTab === 'partners' 
                  ? 'border-indigo-600 text-indigo-600' 
                  : 'border-transparent hover:text-indigo-800 hover:border-indigo-300'
              }`}
              onClick={() => setActiveTab('partners')}
              type="button" 
              role="tab"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Partner Profit Model
            </button>
          </li>
        </ul>
      </div>

      {/* Market Research Report Tab Content */}
      {activeTab === 'report' && (
        <div className="space-y-8">
          {/* Report Header */}
          <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 rounded-xl shadow-lg border border-blue-200">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Premium Craft Ice Market Research Report
              </h2>
              <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
                Comprehensive market analysis and industry insights for premium craft ice business opportunities
              </p>
              
              {/* Report Metadata */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Last Updated: {new Date().toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Est. Reading Time: 15-20 minutes
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Research Report
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => window.open('https://docs.google.com/document/d/e/2PACX-1vQ8E-v0JTAnBlwnk9THZVSZYyO4U1027N3nZNshZqZ6gI3D6JSdkMWrEA_WIYchVF-YzxfrsSoHpdTS/pub', '_blank')}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in New Tab
                </button>
                <button 
                  onClick={() => window.print()}
                  className="inline-flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-md hover:bg-gray-700 transition-colors shadow-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print Report
                </button>
              </div>
            </div>
          </div>

          {/* Key Insights Preview */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-green-800">Market Growth</h3>
              </div>
              <p className="text-green-700 text-sm">Premium ice market showing strong growth potential with increasing demand from craft cocktail establishments and luxury venues.</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-blue-800">Target Markets</h3>
              </div>
              <p className="text-blue-700 text-sm">Key opportunities in hospitality, events, and high-end retail sectors with specific focus on craft beverage industry.</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-purple-800">Innovation</h3>
              </div>
              <p className="text-purple-700 text-sm">Advanced ice-making technology and custom shapes present competitive advantages in premium market segments.</p>
            </div>
          </div>

          {/* Report Content */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">Full Report Content</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  {iframeLoading && (
                    <>
                      <div className="animate-spin h-4 w-4 border-2 border-blue-600 border-t-transparent rounded-full"></div>
                      <span>Loading report...</span>
                    </>
                  )}
                  {iframeError && (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                      <span className="text-red-600">Failed to load report</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            
            <div className="relative">
              {iframeError ? (
                <div className="flex flex-col items-center justify-center h-96 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-lg font-medium mb-2">Report Unavailable</p>
                  <p className="text-sm text-center max-w-md">The market research report could not be loaded. Please try refreshing the page or contact support.</p>
                  <button 
                    onClick={() => {
                      setIframeError(false);
                      setIframeLoading(true);
                    }}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Retry Loading
                  </button>
                </div>
              ) : (
                <iframe 
                  className="w-full h-[800px] border-0" 
                  src="https://docs.google.com/document/d/e/2PACX-1vQ8E-v0JTAnBlwnk9THZVSZYyO4U1027N3nZNshZqZ6gI3D6JSdkMWrEA_WIYchVF-YzxfrsSoHpdTS/pub?embedded=true"
                  title="Premium Craft Ice Market Research Report"
                  onLoad={() => setIframeLoading(false)}
                  onError={() => {
                    setIframeLoading(false);
                    setIframeError(true);
                  }}
                />
              )}
            </div>
          </div>
          
          {/* Additional Resources */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border border-indigo-200">
            <h3 className="text-lg font-semibold text-indigo-800 mb-4">Additional Resources</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Related Tools</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Financial Analysis Calculator (this tool)
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Market sizing and customer analysis
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Next Steps</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Use the insights from this report with the Financial Analysis tab to model your specific business scenario and validate market opportunities.
                </p>
                <button 
                  onClick={() => setActiveTab('financial')}
                  className="inline-flex items-center px-3 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Start Financial Analysis
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Financial Analysis Tab Content */}
      {activeTab === 'financial' && (
        <div className="space-y-8">
          {/* Business Planning Mode Selection */}
          <div className="p-5 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 rounded-lg border border-indigo-200 shadow-sm">
            <h2 className="text-lg font-semibold text-indigo-800 mb-3 text-center">Business Planning Mode</h2>
            <div className="flex justify-center space-x-6">
              <div className="flex items-center bg-white p-2 rounded-lg shadow-sm border border-indigo-100">
                <input 
                  id="modeDemand" 
                  name="calcMode" 
                  type="radio" 
                  value="demand" 
                  checked={state.calcMode === 'demand'}
                  onChange={(e) => updateState('calcMode', e.target.value)}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label htmlFor="modeDemand" className="ml-2 text-sm font-medium">
                  Market Demand <span className="text-xs text-gray-500">(Scale by Monthly Units)</span>
                </label>
              </div>
              <div className="flex items-center bg-white p-2 rounded-lg shadow-sm border border-indigo-100">
                <input 
                  id="modeMachines" 
                  name="calcMode" 
                  type="radio" 
                  value="machines" 
                  checked={state.calcMode === 'machines'}
                  onChange={(e) => updateState('calcMode', e.target.value)}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label htmlFor="modeMachines" className="ml-2 text-sm font-medium">
                  Capital Investment <span className="text-xs text-gray-500">(Scale by Machine Count)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Key Metrics Display */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="text-lg font-semibold text-green-800 mb-2">Monthly Revenue</h4>
              <p className="text-2xl font-bold text-green-900">{formatCurrency(results.totalMonthlyRevenue || 0)}</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="text-lg font-semibold text-blue-800 mb-2">Monthly Costs</h4>
              <p className="text-2xl font-bold text-blue-900">{formatCurrency(results.totalMonthlyCosts || 0)}</p>
            </div>
            <div className={`p-4 rounded-lg border ${
              (results.monthlyNetProfit || 0) >= 0 
                ? 'bg-green-50 border-green-200' 
                : 'bg-red-50 border-red-200'
            }`}>
              <h4 className={`text-lg font-semibold mb-2 ${
                (results.monthlyNetProfit || 0) >= 0 ? 'text-green-800' : 'text-red-800'
              }`}>
                Monthly Net Profit
              </h4>
              <p className={`text-2xl font-bold ${
                (results.monthlyNetProfit || 0) >= 0 ? 'text-green-900' : 'text-red-900'
              }`}>
                {formatCurrency(results.monthlyNetProfit || 0)}
              </p>
            </div>
          </div>

          {/* Comprehensive Input Forms */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4 p-4 bg-gradient-to-b from-blue-50 to-white rounded-lg border border-blue-200 shadow-sm">
              <h2 className="text-lg font-semibold text-blue-800 border-b border-blue-100 pb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Core Business Parameters
              </h2>
              
              <div className={state.calcMode === 'machines' ? '' : 'hidden'}>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Ice Machines</label>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  value={state.numMachines}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    updateState('numMachines', value);
                  }}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className={`text-sm font-medium ${
                  state.numMachines >= 20 ? 'text-green-600 font-bold' :
                  state.numMachines >= 10 ? 'text-green-500' :
                  state.numMachines >= 5 ? 'text-blue-600' : 'text-indigo-600'
                }`}>
                  {state.numMachines}
                </span>
              </div>
              
              <div className={state.calcMode === 'demand' ? '' : 'hidden'}>
                <label className="block text-sm font-medium text-gray-700 mb-1">Target Monthly Demand (Units)</label>
                <input 
                  type="number" 
                  value={state.targetMonthlyDemand} 
                  step="1000"
                  min="0"
                  onChange={(e) => updateState('targetMonthlyDemand', parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">Model will calculate required machines.</p>
                {results.actualNumMachines && (
                  <p className="text-sm text-indigo-600 font-medium mt-1">
                    Requires: {results.actualNumMachines} machines
                  </p>
                )}
              </div>
              
              <hr />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ice Shape (IMT300 Capacity)</label>
                <select 
                  value={state.iceShape}
                  onChange={(e) => updateState('iceShape', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white py-2 px-3"
                >
                  {iceShapes.map(shape => (
                    <option key={shape.value} value={shape.value}>
                      {shape.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Selling Price per Ice Unit ($)</label>
                <input 
                  type="number" 
                  value={state.sellingPrice} 
                  step="0.01"
                  min="0"
                  onChange={(e) => updateState('sellingPrice', parseFloat(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Days Operating per Month</label>
                <input 
                  type="number" 
                  value={state.daysOperating} 
                  step="1"
                  min="1"
                  max="31"
                  onChange={(e) => updateState('daysOperating', parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Total Daily Labor Hours Needed</label>
                <input 
                  type="number" 
                  value={state.laborHoursPerDay} 
                  step="0.5"
                  min="0"
                  onChange={(e) => updateState('laborHoursPerDay', parseFloat(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span className="text-xs text-gray-500">Incl. harvesting, bagging, cleaning per cycle, sales etc.</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Labor Cost per Hour ($)</label>
                <input 
                  type="number" 
                  value={state.laborCostPerHour} 
                  step="0.50"
                  min="0"
                  onChange={(e) => updateState('laborCostPerHour', parseFloat(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="space-y-4 p-4 bg-gradient-to-b from-green-50 to-white rounded-lg border border-green-200 shadow-sm">
              <h2 className="text-lg font-semibold text-green-800 border-b border-green-100 pb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Operating & Variable Expenses
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cost per IMT300 Machine ($)</label>
                <input 
                  type="number" 
                  value={state.equipmentCostPerMachine} 
                  step="100"
                  min="0"
                  onChange={(e) => updateState('equipmentCostPerMachine', parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span className="text-xs font-semibold text-red-600">Verify actual IMT300 price! Estimate used.</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ice Making Cycle Time (hours)</label>
                <input 
                  type="number" 
                  value={state.cycleTime} 
                  step="0.5"
                  min="1"
                  onChange={(e) => updateState('cycleTime', parseFloat(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span className="text-xs text-gray-500">IMT300: 24-28h (&lt;25°C), 32-36h (&gt;25°C)</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Water Use per Cycle (Gallons)</label>
                <input 
                  type="number" 
                  value={state.waterPerCycle} 
                  step="0.1"
                  min="0"
                  onChange={(e) => updateState('waterPerCycle', parseFloat(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span className="text-xs text-gray-500">IMT300 Manual: 30 Liters ≈ 7.9 Gal</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Water Rate ($/Gallon)</label>
                <input 
                  type="number" 
                  value={state.waterRate} 
                  step="0.001"
                  min="0"
                  onChange={(e) => updateState('waterRate', parseFloat(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span className="text-xs text-gray-500">Est. Livonia, MI rate (incl. sewer) - verify locally.</span>
              </div>
              
              <hr />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ice Making Power (Watts)</label>
                <input 
                  type="number" 
                  value={state.iceMakingPower} 
                  step="10"
                  min="0"
                  onChange={(e) => updateState('iceMakingPower', parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span className="text-xs text-gray-500">Avg. power during making phase. (IMT300 Manual: 600W @ 110-120V).</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ice Detaching Power (Watts)</label>
                <input 
                  type="number" 
                  value={state.iceDetachingPower} 
                  step="10"
                  min="0"
                  onChange={(e) => updateState('iceDetachingPower', parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span className="text-xs text-gray-500">Avg. power during detaching phase. (IMT300 Manual: 1200W @ 110-120V).</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Detaching Phase Duration (hours per cycle)</label>
                <input 
                  type="number" 
                  value={state.detachingDuration} 
                  step="0.1"
                  min="0.1"
                  onChange={(e) => updateState('detachingDuration', parseFloat(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span className="text-xs text-gray-500">Estimate - adjust as needed.</span>
              </div>
              
              <p className="text-xs text-gray-500 mt-1">Note: Specs list 2800W total power, likely peak. This model uses making/detaching phases for average energy calculation.</p>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Electricity Rate ($/kWh)</label>
                <input 
                  type="number" 
                  value={state.electricityRate} 
                  step="0.01"
                  min="0"
                  onChange={(e) => updateState('electricityRate', parseFloat(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span className="text-xs text-gray-500">Est. Livonia, MI commercial rate - verify locally.</span>
              </div>
              
              <hr />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Packaging Cost per Ice Unit ($)</label>
                <input 
                  type="number" 
                  value={state.packagingCostUnit} 
                  step="0.01"
                  min="0"
                  onChange={(e) => updateState('packagingCostUnit', parseFloat(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Distribution Cost per Ice Unit ($)</label>
                <input 
                  type="number" 
                  value={state.distributionCostUnit} 
                  step="0.01"
                  min="0"
                  onChange={(e) => updateState('distributionCostUnit', parseFloat(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="space-y-4 p-4 bg-gradient-to-b from-purple-50 to-white rounded-lg border border-purple-200 shadow-sm">
              <h2 className="text-lg font-semibold text-purple-800 border-b border-purple-100 pb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Fixed Costs & Financing
              </h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Maintenance per Machine ($)</label>
                <input 
                  type="number" 
                  value={state.maintenanceCostPerMachine} 
                  step="5"
                  min="0"
                  onChange={(e) => updateState('maintenanceCostPerMachine', parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
                <span className="text-xs text-gray-500">Estimate - may be higher for IMT300.</span>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Rent / Overhead ($)</label>
                <input 
                  type="number" 
                  value={state.monthlyRent} 
                  step="500"
                  min="0"
                  onChange={(e) => updateState('monthlyRent', parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Insurance ($)</label>
                <input 
                  type="number" 
                  value={state.monthlyInsurance} 
                  step="10"
                  min="0"
                  onChange={(e) => updateState('monthlyInsurance', parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <hr className="my-4" />
              
              <h3 className="text-md font-semibold text-gray-600">Device Financing</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Down Payment (%)</label>
                <input 
                  type="number" 
                  value={state.downPaymentPercent} 
                  step="1"
                  min="0"
                  max="100"
                  onChange={(e) => updateState('downPaymentPercent', parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Loan Term (Years)</label>
                <input 
                  type="number" 
                  value={state.loanTermYears} 
                  step="1"
                  min="1"
                  onChange={(e) => updateState('loanTermYears', parseInt(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Annual Interest Rate (APR %)</label>
                <input 
                  type="number" 
                  value={state.interestRate} 
                  step="0.1"
                  min="0"
                  onChange={(e) => updateState('interestRate', parseFloat(e.target.value))}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Comprehensive Financial Performance & ROI Analysis */}
          <div className="mt-10 bg-gradient-to-r from-indigo-100 via-white to-indigo-100 p-6 rounded-lg shadow-md border border-indigo-300">
            <h2 className="text-2xl font-bold text-indigo-800 mb-6 text-center flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Financial Performance & ROI Analysis
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Key Performance Indicators (KPIs)</h3>
                <div className="mb-1 text-sm text-indigo-700 font-medium">
                  Machines Used: {results.actualNumMachines || 0}
                </div>
                <div className="mb-4 text-sm text-gray-600">
                  Production Rate: {(results.unitsPerMachinePerDay || 0)} units/machine/day
                </div>

                {/* Revenue Metrics */}
                <div className="mb-4">
                  <h4 className="text-md font-semibold text-indigo-600 mb-2">Revenue Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Monthly Revenue</span>
                      <p className="mt-1 text-lg font-semibold text-gray-900">{formatCurrency(results.totalMonthlyRevenue || 0)}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Annual Revenue</span>
                      <p className="mt-1 text-lg font-semibold text-gray-900">{formatCurrency(results.annualRevenue || 0)}</p>
                    </div>
                  </div>
                </div>

                {/* Profit Metrics */}
                <div className="mb-4">
                  <h4 className="text-md font-semibold text-indigo-600 mb-2">Profitability</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Gross Profit</span>
                      <p className="mt-1 text-lg font-semibold text-gray-900">{formatCurrency(results.monthlyGrossProfit || 0)}</p>
                      <span className="text-xs text-gray-500">(before financing)</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Net Profit</span>
                      <p className={`mt-1 text-lg font-semibold ${(results.monthlyNetProfit || 0) >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                        {formatCurrency(results.monthlyNetProfit || 0)}
                      </p>
                      <span className="text-xs text-gray-500">(monthly)</span>
                    </div>
                  </div>
                </div>

                {/* Margin Analysis */}
                <div>
                  <h4 className="text-md font-semibold text-indigo-600 mb-2">Margin Analysis</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Gross Margin</span>
                      <p className="mt-1 text-lg font-semibold text-gray-900">{formatPercent(results.grossMargin || 0)}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Net Margin</span>
                      <p className="mt-1 text-lg font-semibold text-gray-900">{formatPercent(results.netProfitMargin || 0)}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Cost Structure Analysis</h3>

                {/* Variable Costs */}
                <div className="mb-4">
                  <h4 className="text-md font-semibold text-indigo-600 mb-2">Variable Costs</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Total Variable Costs</span>
                      <p className="mt-1 text-lg font-semibold text-gray-900">{formatCurrency(results.totalMonthlyVariableCosts || 0)}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Per Unit</span>
                      <p className="mt-1 text-lg font-semibold text-gray-900">{formatCurrency(results.variableCostPerUnit || 0)}</p>
                    </div>
                  </div>
                </div>

                {/* Fixed Costs */}
                <div className="mb-4">
                  <h4 className="text-md font-semibold text-indigo-600 mb-2">Fixed Costs</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Monthly Fixed Costs</span>
                      <p className="mt-1 text-lg font-semibold text-gray-900">{formatCurrency(results.totalMonthlyFixedCosts || 0)}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Including Financing</span>
                      <p className="mt-1 text-lg font-semibold text-gray-900">{formatCurrency((results.totalMonthlyFixedCosts || 0) + (results.monthlyLoanPayment || 0))}</p>
                    </div>
                  </div>
                </div>

                {/* Break-Even Analysis */}
                <div>
                  <h4 className="text-md font-semibold text-indigo-600 mb-2">Break-Even Analysis</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Break-Even Units</span>
                      <p className="mt-1 text-lg font-semibold text-gray-900">
                        {results.breakEvenUnits === Infinity ? 'N/A' : (results.breakEvenUnits || 0).toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Break-Even Revenue</span>
                      <p className="mt-1 text-lg font-semibold text-gray-900">
                        {results.breakEvenRevenue === Infinity ? 'N/A' : formatCurrency(results.breakEvenRevenue || 0)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Monthly Cost Structure */}
            <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Monthly Cost Structure
              </h3>

              {/* Direct Costs Section */}
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <h4 className="text-sm font-semibold text-blue-800 mb-2 border-b border-blue-100 pb-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                  </svg>
                  Production & Materials
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-600">Energy</span>
                      <p className="text-sm font-semibold text-gray-900">{formatCurrency(results.monthlyEnergyCost || 0)}</p>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-600">Water</span>
                      <p className="text-sm font-semibold text-gray-900">{formatCurrency(results.monthlyWaterCost || 0)}</p>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-600">Packaging</span>
                      <p className="text-sm font-semibold text-gray-900">{formatCurrency(results.monthlyPackagingCost || 0)}</p>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-600">Distribution</span>
                      <p className="text-sm font-semibold text-gray-900">{formatCurrency(results.monthlyDistributionCost || 0)}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fixed Costs Section */}
              <div className="bg-purple-50 p-3 rounded-lg mb-4">
                <h4 className="text-sm font-semibold text-purple-800 mb-2 border-b border-purple-100 pb-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Business Operations
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-600">Labor</span>
                      <p className="text-sm font-semibold text-gray-900">{formatCurrency(results.totalMonthlyLaborCost || 0)}</p>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-600">Facility Rent</span>
                      <p className="text-sm font-semibold text-gray-900">{formatCurrency(state.monthlyRent)}</p>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-600">Insurance</span>
                      <p className="text-sm font-semibold text-gray-900">{formatCurrency(state.monthlyInsurance)}</p>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-600">Maintenance</span>
                      <p className="text-sm font-semibold text-gray-900">{formatCurrency((results.actualNumMachines || 0) * state.maintenanceCostPerMachine)}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Financing Section */}
              <div className="bg-green-50 p-3 rounded-lg mb-4">
                <h4 className="text-sm font-semibold text-green-800 mb-2 border-b border-green-100 pb-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Financing
                </h4>
                <div className="bg-white p-2 rounded shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-gray-600">Monthly Loan Payment</span>
                    <p className="text-sm font-semibold text-gray-900">{formatCurrency(results.monthlyLoanPayment || 0)}</p>
                  </div>
                </div>
              </div>

              {/* Total Costs */}
              <div className="bg-indigo-100 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <h4 className="text-sm font-bold text-indigo-900">TOTAL MONTHLY COSTS</h4>
                  <p className="text-lg font-bold text-indigo-900">{formatCurrency(results.totalMonthlyCosts || 0)}</p>
                </div>
              </div>
            </div>

            {/* Investment Analysis & ROI */}
            <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200 mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Investment Analysis & ROI
              </h3>

              {/* Capital Investment */}
              <div className="bg-indigo-50 p-3 rounded-lg mb-4">
                <h4 className="text-sm font-semibold text-indigo-800 mb-2 border-b border-indigo-100 pb-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Capital Requirements
                </h4>
                <div className="grid grid-cols-2 gap-3 mb-2">
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-600">Total Equipment Cost</span>
                      <p className="text-sm font-semibold text-gray-900">{formatCurrency(results.totalEquipmentCost || 0)}</p>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium text-gray-600">Initial Down Payment</span>
                      <p className="text-sm font-semibold text-gray-900">{formatCurrency(results.initialDownPayment || 0)}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-2 rounded shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-gray-600">Total Amount Financed</span>
                    <p className="text-sm font-semibold text-gray-900">{formatCurrency(results.totalLoanAmount || 0)}</p>
                  </div>
                </div>
              </div>

              {/* ROI Metrics */}
              <div className="bg-amber-50 p-3 rounded-lg">
                <h4 className="text-sm font-semibold text-amber-800 mb-2 border-b border-amber-100 pb-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  Return on Investment
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div>
                      <span className="text-xs font-medium text-gray-600">Simple Payback Period</span>
                      <p className="text-sm font-semibold text-indigo-900">
                        {results.paybackPeriod === Infinity ? 'N/A' : `${(results.paybackPeriod || 0).toFixed(1)} years`}
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <div>
                      <span className="text-xs font-medium text-gray-600">Annual ROI</span>
                      <p className="text-sm font-semibold text-green-700">{formatPercent(results.annualROI || 0)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Analysis */}
          <div className="mt-10 bg-gradient-to-r from-amber-100 via-white to-amber-100 p-6 rounded-lg shadow-md border border-amber-300">
            <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Market Opportunity & Customer Analysis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                <h3 className="text-md font-semibold text-gray-700 mb-3 border-b pb-1">Customer Inputs</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Average Customer Monthly Demand (Units)</label>
                  <input 
                    type="number" 
                    value={state.avgCustomerDemand} 
                    step="100"
                    min="0"
                    onChange={(e) => updateState('avgCustomerDemand', parseInt(e.target.value))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <span className="text-xs text-gray-500">Expected units per customer per month</span>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
                <h3 className="text-md font-semibold text-gray-700 mb-3 border-b pb-1">Required Customers</h3>
                <div>
                  <span className="text-sm font-medium text-gray-500">Customers Needed for Target</span>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{results.requiredCustomers || 0}</p>
                  <span className="text-xs text-gray-500">Number of customers needed to reach production target</span>
                </div>
                <div className="mt-2">
                  <span className="text-sm font-medium text-gray-500">Current Capacity Utilization</span>
                  <p className="mt-1 text-lg font-semibold text-gray-900">{formatPercent(results.capacityUtilization || 0)}</p>
                  <span className="text-xs text-gray-500">How much of max capacity is utilized</span>
                </div>
              </div>
            </div>
          </div>

          {/* Business Performance Data Visualization */}
          <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Business Performance Data Visualization
            </h2>
            
            <div className="mb-2">
              <div className="flex items-center justify-center mt-2">
                <input 
                  id="lockYAxis" 
                  type="checkbox" 
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                  onChange={(e) => setLockYAxis(e.target.checked)}
                />
                <label htmlFor="lockYAxis" className="ml-2 text-sm text-gray-700">Lock Y-Axis Scale</label>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-3">Chart Controls</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center bg-blue-50 px-3 py-2 rounded-md shadow-sm">
                  <input 
                    id="showRevenue" 
                    type="checkbox" 
                    checked={chartControls.showRevenue}
                    onChange={(e) => setChartControls(prev => ({...prev, showRevenue: e.target.checked}))}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" 
                  />
                  <label htmlFor="showRevenue" className="ml-2 text-sm font-medium text-blue-700">Revenue</label>
                </div>
                <div className="flex items-center bg-red-50 px-3 py-2 rounded-md shadow-sm">
                  <input 
                    id="showCosts" 
                    type="checkbox" 
                    checked={chartControls.showCosts}
                    onChange={(e) => setChartControls(prev => ({...prev, showCosts: e.target.checked}))}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" 
                  />
                  <label htmlFor="showCosts" className="ml-2 text-sm font-medium text-red-700">Total Costs</label>
                </div>
                <div className="flex items-center bg-green-50 px-3 py-2 rounded-md shadow-sm">
                  <input 
                    id="showProfit" 
                    type="checkbox" 
                    checked={chartControls.showProfit}
                    onChange={(e) => setChartControls(prev => ({...prev, showProfit: e.target.checked}))}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" 
                  />
                  <label htmlFor="showProfit" className="ml-2 text-sm font-medium text-green-700">Net Profit</label>
                </div>
                <div className="flex items-center bg-orange-50 px-3 py-2 rounded-md shadow-sm">
                  <input 
                    id="showBreakEven" 
                    type="checkbox" 
                    checked={chartControls.showBreakEven}
                    onChange={(e) => setChartControls(prev => ({...prev, showBreakEven: e.target.checked}))}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" 
                  />
                  <label htmlFor="showBreakEven" className="ml-2 text-sm font-medium text-orange-700">Break-Even Point</label>
                </div>
                <div className="flex items-center bg-purple-50 px-3 py-2 rounded-md shadow-sm">
                  <input 
                    id="showMargin" 
                    type="checkbox" 
                    checked={chartControls.showMargin}
                    onChange={(e) => setChartControls(prev => ({...prev, showMargin: e.target.checked}))}
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" 
                  />
                  <label htmlFor="showMargin" className="ml-2 text-sm font-medium text-purple-700">Profit Margin (%)</label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-4 pb-8 rounded-lg shadow border border-gray-100 mt-6 relative" style={{minHeight: '300px', height: '45vh', maxHeight: '550px'}}>
                <h3 className="text-md font-semibold text-gray-700 mb-3 text-center">Monthly Revenue, Costs & Net Profit</h3>
                <Line ref={cashFlowChartRef} data={cashFlowChartData} options={cashFlowChartOptions} />
              </div>
              <div className="bg-white p-4 pb-8 rounded-lg shadow border border-gray-100 mt-6 relative" style={{minHeight: '300px', height: '45vh', maxHeight: '550px'}}>
                <h3 className="text-md font-semibold text-gray-700 mb-3 text-center">Monthly Cost Breakdown</h3>
                <Doughnut ref={costBreakdownChartRef} data={costBreakdownChartData} options={costBreakdownChartOptions} />
              </div>
            </div>

            <div className="mt-6">
              <div className="bg-white p-4 pb-8 rounded-lg shadow border border-gray-100 mt-6 relative" style={{minHeight: '300px', height: '45vh', maxHeight: '550px'}}>
                <h3 className="text-md font-semibold text-gray-700 mb-3 text-center">Monthly Production Volume</h3>
                <Bar ref={productionChartRef} data={productionChartData} options={productionChartOptions} />
              </div>
            </div>
          </div>

          {/* Cost Note */}
          <div className="text-center text-sm text-gray-600 mt-6">
            <p>
              <strong className="font-semibold text-indigo-700">Cash Flow Note:</strong> To stay cash flow positive early, ensure your revenue significantly exceeds the sum of Variable Costs, Labor, Fixed Costs (Rent, Insurance, Maintenance), and the Monthly Loan Payment. See chart above for trends.
            </p>
          </div>
        </div>
      )}

      {/* Partner Profit Model Tab Content */}
      {activeTab === 'partners' && (
        <div className="space-y-8">
          {/* Financial Calculator Connection Notice */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-blue-800">
                  <span className="font-medium">Smart Integration:</span> Market size, customer value, and profit margins are automatically calculated from your Financial Analysis tab data.
                </p>
              </div>
            </div>
          </div>

          {/* Partner Model Header */}
          <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-8 rounded-xl shadow-lg border border-purple-200">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Partner Profit Snowball Model
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Visualize how early partners benefit from the snowball effect as new partners join and market share grows. 
                The earlier you join, the greater your long-term returns from network expansion.
              </p>
            </div>
          </div>

          {/* Partner Tier Overview */}
          <div className="grid md:grid-cols-4 gap-6">
            {partnerTiers.map((tier, index) => (
              <div key={tier.name} className="bg-white rounded-lg shadow-lg p-6 border-t-4" style={{borderTopColor: tier.color}}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-3" style={{backgroundColor: tier.color + '20'}}>
                    <span className="text-lg font-bold" style={{color: tier.color}}>#{tier.range}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{tier.name} Partners</h3>
                  <p className="text-sm text-gray-600 mb-3">Partners {tier.range}</p>
                  <div className="space-y-2">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-700">Base Profit</p>
                      <p className="text-lg font-bold" style={{color: tier.color}}>{tier.baseProfit}%</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-700">Snowball Rate</p>
                      <p className="text-lg font-bold" style={{color: tier.color}}>+{tier.snowballRate}%</p>
                      <p className="text-xs text-gray-500">per new partner</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Market Parameters */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Market & Growth Parameters</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-700">Market Size</h4>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Total Addressable Market
                    <span className="ml-2 text-xs text-purple-600 font-medium">Auto-calculated</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={partnerState.totalAddressableMarket}
                      readOnly
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 cursor-not-allowed"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Monthly demand × price × 12 months × 20x scale</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Target Market Share (%)</label>
                  <input
                    type="number"
                    value={partnerState.targetMarketSharePercent}
                    onChange={(e) => updatePartnerState('targetMarketSharePercent', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Average Customer Value (Annual)
                    <span className="ml-2 text-xs text-purple-600 font-medium">Auto-calculated</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={partnerState.averageCustomerValue}
                      readOnly
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 cursor-not-allowed"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Avg customer demand × price × 12 months</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-700">Growth Timeline</h4>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">New Partners Per Month</label>
                  <input
                    type="number"
                    value={partnerState.partnersPerMonth}
                    onChange={(e) => updatePartnerState('partnersPerMonth', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Market Penetration Per Partner (%)</label>
                  <input
                    type="number"
                    value={partnerState.marketPenetrationPerPartner}
                    onChange={(e) => updatePartnerState('marketPenetrationPerPartner', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">Timeline (Months)</label>
                  <input
                    type="number"
                    value={partnerState.timelineMonths}
                    onChange={(e) => updatePartnerState('timelineMonths', parseFloat(e.target.value) || 0)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-700">Profit Distribution</h4>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">
                    Company Profit (%)
                    <span className="ml-2 text-xs text-purple-600 font-medium">Auto-calculated</span>
                  </label>
                  <input
                    type="number"
                    value={partnerState.companyProfitPercent}
                    readOnly
                    className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-700 cursor-not-allowed"
                  />
                  <p className="text-xs text-gray-500 mt-1">Based on financial calculator profit margin</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h5 className="text-sm font-semibold text-gray-700 mb-3">Projected Results</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Target Revenue:</span>
                      <span className="font-semibold">{formatCurrency((partnerState.totalAddressableMarket * partnerState.targetMarketSharePercent) / 100)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Partners Needed:</span>
                      <span className="font-semibold">{Math.ceil(((partnerState.totalAddressableMarket * partnerState.targetMarketSharePercent) / 100) / partnerState.averageCustomerValue / partnerState.marketPenetrationPerPartner)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Timeline to Goal:</span>
                      <span className="font-semibold">{Math.ceil(Math.ceil(((partnerState.totalAddressableMarket * partnerState.targetMarketSharePercent) / 100) / partnerState.averageCustomerValue / partnerState.marketPenetrationPerPartner) / partnerState.partnersPerMonth)} months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Snowball Effect Visualization */}
          {partnerProjections.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 text-center">Snowball Effect Visualization</h3>
              
              {/* Partner Growth Chart */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Partner Acquisition & Market Share Growth</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Line 
                      data={{
                        labels: partnerProjections.map(p => `Month ${p.month}`),
                        datasets: [
                          {
                            label: 'Total Partners',
                            data: partnerProjections.map(p => p.totalPartners),
                            borderColor: '#8B5CF6',
                            backgroundColor: '#8B5CF6',
                            tension: 0.1,
                            yAxisID: 'y'
                          },
                          {
                            label: 'Market Share (%)',
                            data: partnerProjections.map(p => p.marketShare),
                            borderColor: '#10B981',
                            backgroundColor: '#10B981',
                            tension: 0.1,
                            yAxisID: 'y1'
                          }
                        ]
                      }}
                      options={{
                        responsive: true,
                        interaction: { mode: 'index', intersect: false },
                        scales: {
                          x: { display: true, title: { display: true, text: 'Timeline' } },
                          y: { type: 'linear', display: true, position: 'left', title: { display: true, text: 'Partners' } },
                          y1: { type: 'linear', display: true, position: 'right', title: { display: true, text: 'Market Share (%)' }, grid: { drawOnChartArea: false } }
                        }
                      }}
                    />
                  </div>
                  <div>
                    <Line 
                      data={{
                        labels: partnerProjections.map(p => `Month ${p.month}`),
                        datasets: [
                          {
                            label: 'Monthly Revenue',
                            data: partnerProjections.map(p => p.totalRevenue),
                            borderColor: '#3B82F6',
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            fill: true,
                            tension: 0.1
                          },
                          {
                            label: 'Company Profit',
                            data: partnerProjections.map(p => p.companyProfit),
                            borderColor: '#EF4444',
                            backgroundColor: 'rgba(239, 68, 68, 0.1)',
                            fill: true,
                            tension: 0.1
                          }
                        ]
                      }}
                      options={{
                        responsive: true,
                        interaction: { mode: 'index', intersect: false },
                        scales: {
                          x: { display: true, title: { display: true, text: 'Timeline' } },
                          y: { display: true, title: { display: true, text: 'Revenue ($)' } }
                        }
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Partner Profit Comparison */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-lg font-semibold text-gray-700 mb-4">Early vs Late Partner Profit Comparison</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-md font-semibold text-gray-600 mb-3">Cumulative Profit by Partner Tier</h5>
                    <Line 
                      data={{
                        labels: partnerProjections.map(p => `Month ${p.month}`),
                        datasets: [
                          {
                            label: 'Partner #1 (Founding)',
                            data: partnerProjections.map(p => p.cumulativePartnerProfit['partner_1'] || 0),
                            borderColor: partnerTiers[0].color,
                            backgroundColor: partnerTiers[0].color,
                            tension: 0.1
                          },
                          {
                            label: 'Partner #6 (Early)',
                            data: partnerProjections.map(p => p.cumulativePartnerProfit['partner_6'] || 0),
                            borderColor: partnerTiers[1].color,
                            backgroundColor: partnerTiers[1].color,
                            tension: 0.1
                          },
                          {
                            label: 'Partner #16 (Growth)',
                            data: partnerProjections.map(p => p.cumulativePartnerProfit['partner_16'] || 0),
                            borderColor: partnerTiers[2].color,
                            backgroundColor: partnerTiers[2].color,
                            tension: 0.1
                          },
                          {
                            label: 'Partner #51 (Standard)',
                            data: partnerProjections.map(p => p.cumulativePartnerProfit['partner_51'] || 0),
                            borderColor: partnerTiers[3].color,
                            backgroundColor: partnerTiers[3].color,
                            tension: 0.1
                          }
                        ]
                      }}
                      options={{
                        responsive: true,
                        interaction: { mode: 'index', intersect: false },
                        scales: {
                          x: { display: true, title: { display: true, text: 'Timeline' } },
                          y: { display: true, title: { display: true, text: 'Cumulative Profit ($)' } }
                        }
                      }}
                    />
                  </div>
                  <div className="space-y-4">
                    <h5 className="text-md font-semibold text-gray-600">The Cost of Waiting</h5>
                    {partnerProjections.length > 0 && (
                      <div className="space-y-3">
                        {[1, 6, 16, 51].map((partnerNum, index) => {
                          const finalProfit = partnerProjections[partnerProjections.length - 1]?.cumulativePartnerProfit[`partner_${partnerNum}`] || 0;
                          const tier = partnerTiers[index];
                          return (
                            <div key={partnerNum} className="bg-gray-50 rounded-lg p-4 border-l-4" style={{borderColor: tier.color}}>
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="font-semibold text-gray-800">Partner #{partnerNum}</p>
                                  <p className="text-sm text-gray-600">{tier.name} Tier</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-lg font-bold" style={{color: tier.color}}>{formatCurrency(finalProfit)}</p>
                                  <p className="text-xs text-gray-500">{partnerState.timelineMonths} months</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <h6 className="font-semibold text-yellow-800 mb-2">Key Insight</h6>
                      <p className="text-sm text-yellow-700">
                        Founding partners can earn {partnerProjections.length > 0 ? 
                          `${Math.round(((partnerProjections[partnerProjections.length - 1]?.cumulativePartnerProfit['partner_1'] || 1) / 
                          (partnerProjections[partnerProjections.length - 1]?.cumulativePartnerProfit['partner_51'] || 1)) * 100)}%` : '300%'} 
                        more than standard partners over the same period due to the snowball effect.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Export & Share */}
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-6 text-center">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Share This Model</h4>
            <p className="text-gray-600 mb-4">
              Use this powerful visualization to demonstrate the exponential value of early partnership participation.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-md transition-colors duration-200">
              Export Partner Presentation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}