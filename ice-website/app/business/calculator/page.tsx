import React from 'react';
import BusinessCalculator from '../../../components/BusinessCalculator';

export const metadata = {
  title: 'IMT300 Ice Business ROI Calculator | American Ice Lines',
  description: 'Plan your ice production business with our comprehensive ROI calculator and financial modeling tools. Analyze break-even points, profit margins, and market opportunities.',
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
      <BusinessCalculator />
    </div>
  );
}