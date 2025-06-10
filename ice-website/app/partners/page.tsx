"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PartnersPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Update current time every minute
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}${minutes}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === currentTime) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid access code. Please contact your partner representative.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Partners Access
              </h1>
              <p className="text-gray-600">
                Enter the access code to continue
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Access Code
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-center text-lg tracking-wider"
                  placeholder="****"
                  maxLength={4}
                  required
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm text-center">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-200 font-medium"
              >
                Access Partners Area
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Authorized partners only. Access codes are provided during onboarding.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Sample projections for visualization
  const sampleProjections = [
    { month: 0, revenue: 0, founding: 0, early: 0, growth: 0, standard: 0 },
    { month: 6, revenue: 150000, founding: 13500, early: 9375, growth: 6000, standard: 0 },
    { month: 12, revenue: 450000, founding: 40500, early: 28125, growth: 18000, standard: 11250 },
    { month: 18, revenue: 900000, founding: 81000, early: 56250, growth: 36000, standard: 22500 },
    { month: 24, revenue: 1500000, founding: 135000, early: 93750, growth: 60000, standard: 37500 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-4">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            Limited Founding Partner Positions Available
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Profit Revolution</span>
          </h1>
          <p className="text-2xl text-gray-700 max-w-4xl mx-auto mb-8">
            Capture your share of the $50M craft ice market with our proven partnership model
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-indigo-200">
              <div className="text-3xl font-bold text-indigo-600">$50M</div>
              <div className="text-sm text-gray-600">Total Addressable Market</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-green-200">
              <div className="text-3xl font-bold text-green-600">300%</div>
              <div className="text-sm text-gray-600">Higher Earnings as Founding Partner</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-purple-200">
              <div className="text-3xl font-bold text-purple-600">24mo</div>
              <div className="text-sm text-gray-600">To Full Market Penetration</div>
            </div>
          </div>
        </div>

        {/* The Opportunity Section */}
        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl shadow-2xl p-12 mb-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500 rounded-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500 rounded-full opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">The Snowball Effect: Your Path to Wealth</h2>
            <p className="text-xl mb-8 text-indigo-200">
              As a founding partner, you don't just earn from your own sales. You earn additional profit share from EVERY partner who joins after you.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">How It Works</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>You earn your base profit share on all revenue</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Each new partner adds to your snowball percentage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Your earnings grow exponentially as we scale</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Founding partners earn the highest snowball rates</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Real Numbers</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-yellow-400">$135,000</div>
                    <div className="text-sm">Founding Partner earnings at 24 months</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-300">$37,500</div>
                    <div className="text-sm">Standard Partner earnings at 24 months</div>
                  </div>
                  <div className="text-lg font-semibold text-green-400">
                    = 3.6x MORE as a Founding Partner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Tiers */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Partner Profit Sharing Tiers</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-red-500 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">BEST VALUE</span>
                <span className="text-xs text-gray-500">Partners 1-5</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Founding Partners</h3>
              <div className="mb-4">
                <div className="text-4xl font-bold text-red-600">30%</div>
                <div className="text-sm text-gray-600">Base Profit Share</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>2.0% Snowball Rate</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Territory Priority</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Advisory Board Access</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-teal-500 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-gray-500">Partners 6-15</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Early Partners</h3>
              <div className="mb-4">
                <div className="text-4xl font-bold text-teal-600">25%</div>
                <div className="text-sm text-gray-600">Base Profit Share</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>1.5% Snowball Rate</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Priority Support</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Quarterly Strategy Calls</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-gray-500">Partners 16-50</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Growth Partners</h3>
              <div className="mb-4">
                <div className="text-4xl font-bold text-blue-600">20%</div>
                <div className="text-sm text-gray-600">Base Profit Share</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>1.0% Snowball Rate</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Standard Support</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Training Resources</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-gray-500 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-gray-500">Partners 51+</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Standard Partners</h3>
              <div className="mb-4">
                <div className="text-4xl font-bold text-gray-600">15%</div>
                <div className="text-sm text-gray-600">Base Profit Share</div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>0.5% Snowball Rate</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Basic Support</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Partner Network Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost of Waiting Visualization */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">The Cost of Waiting</h2>
          <div className="mb-8">
            <p className="text-center text-gray-600 mb-6">
              Every month you wait, you're leaving money on the table. See how partner earnings compare over 24 months:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="space-y-6">
                {/* Founding Partner Bar */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-red-600">Founding Partner</span>
                    <span className="font-bold text-red-600">$135,000</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-8">
                      <div className="bg-gradient-to-r from-red-500 to-red-600 h-8 rounded-full flex items-center justify-end pr-4" style={{width: '100%'}}>
                        <span className="text-white text-sm font-semibold">100%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Early Partner Bar */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-teal-600">Early Partner</span>
                    <span className="font-bold text-teal-600">$93,750</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-8">
                      <div className="bg-gradient-to-r from-teal-500 to-teal-600 h-8 rounded-full flex items-center justify-end pr-4" style={{width: '69%'}}>
                        <span className="text-white text-sm font-semibold">69%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Growth Partner Bar */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-blue-600">Growth Partner</span>
                    <span className="font-bold text-blue-600">$60,000</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-8">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-8 rounded-full flex items-center justify-end pr-4" style={{width: '44%'}}>
                        <span className="text-white text-sm font-semibold">44%</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Standard Partner Bar */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-gray-600">Standard Partner</span>
                    <span className="font-bold text-gray-600">$37,500</span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-8">
                      <div className="bg-gradient-to-r from-gray-500 to-gray-600 h-8 rounded-full flex items-center justify-end pr-4" style={{width: '28%'}}>
                        <span className="text-white text-sm font-semibold">28%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 text-center">
            <p className="text-lg font-semibold text-yellow-800">
              <span className="text-2xl">⚠️</span> Every day you wait costs you approximately <span className="text-2xl font-bold">$390</span> in lost earnings
            </p>
          </div>
        </div>

        {/* Business Tools Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-indigo-600">
            <div className="flex items-center mb-6">
              <svg className="h-8 w-8 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-800">Business Planning Tools</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Plan your ice production business with our comprehensive ROI calculator and see your exact profit projections.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Partner Profit Share Calculator
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                24-Month Financial Projections
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Snowball Effect Visualizer
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Market Share Growth Tracker
              </div>
            </div>
            <Link 
              href="/business/calculator" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              Launch Profit Calculator
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-green-600">
            <div className="flex items-center mb-6">
              <svg className="h-8 w-8 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="text-2xl font-bold text-gray-800">What's Included</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Everything you need to succeed as an American Ice Lines partner:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Exclusive Territory Rights
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Proven Business Model & Systems
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Marketing & Sales Support
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Equipment Financing Assistance
              </div>
            </div>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
            >
              Learn More About Partnership
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Partner With American Ice Lines</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="font-semibold text-lg mb-3">Proven Business Model</h4>
                <p className="text-gray-700">
                  Our comprehensive financial calculator shows exactly how the business works, with transparent projections and realistic growth scenarios.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h4 className="font-semibold text-lg mb-3">Fair Profit Sharing</h4>
                <p className="text-gray-700">
                  Early partners are rewarded for their trust and commitment through our snowball effect, creating long-term value for all stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-4">Only 2 Founding Partner Positions Remain</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Once these positions are filled, the next best opportunity is Early Partner at 25% base profit share.
            Don't let this chance pass you by.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-lg bg-white text-red-600 hover:bg-gray-100 transition-colors duration-200 shadow-xl"
            >
              Secure Your Founding Position
              <svg className="ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="/business/calculator" 
              className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-lg border-2 border-white text-white hover:bg-white hover:text-red-600 transition-colors duration-200"
            >
              Calculate Your Earnings
            </Link>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}