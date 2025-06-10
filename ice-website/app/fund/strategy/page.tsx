"use client";

import Link from 'next/link';
import FundNavigation from '../../../components/FundNavigation';
import FundFooter from '../../../components/FundFooter';

export default function StrategyPage() {
  return (
    <div className="fund-site">
      <FundNavigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-200 rounded-full text-sm font-medium border border-blue-500/30 mb-8">
              Investment Framework
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Our Investment
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Strategy
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Synergizing targeted markets through strategic partnerships and operational excellence
            </p>
          </div>
        </div>
      </section>

      {/* Investment Thesis */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Investment Thesis</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We believe the greatest value creation opportunities exist in markets where proven small businesses can combine forces through strategic partnerships, shared best practices, and operational synergies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Proven Small Businesses</h3>
              <p className="text-gray-600">
                We invest in established companies with track records of profitability, strong customer relationships, and experienced management teams who understand their markets intimately.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Market Capture</h3>
              <p className="text-gray-600">
                We focus on fragmented industries where multiple players operate in similar markets, creating opportunities to scale market share with a combined distribution network.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Operational Synergies</h3>
              <p className="text-gray-600">
                By connecting portfolio companies, we create revenue synergies through cross-selling distribution channels, cost savings through operational efficiencies, and growth acceleration through best practice sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Criteria */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Investment Criteria</h2>
            <p className="text-xl text-gray-600">
              We seek specific types of businesses that fit our portfolio strategy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Revenue Range</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">&gt;$500k</p>
              <p className="text-gray-600">Annual revenue with demonstrated growth potential and market expansion opportunities</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Market Position</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">Established</p>
              <p className="text-gray-600">Strong local or regional presence in fragmented markets with consolidation potential</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Profitability</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">Positive</p>
              <p className="text-gray-600">Consistent profitability or clear path to profitability through scale and optimization</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Management</h3>
              <p className="text-3xl font-bold text-blue-600 mb-2">Quality</p>
              <p className="text-gray-600">Experienced founders and management teams interested in growth partnerships</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              From identification to exit, our systematic approach maximizes value for all stakeholders
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">1</div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Identification & Sourcing</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      We systematically identify proven businesses in fragmented markets through our network of industry contacts, business brokers, and direct outreach to successful entrepreneurs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">3</div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Operational Excellence</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      We implement best practices across portfolio companies, create synergies between businesses, and support expansion into new territories and markets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">2</div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Partnership Structuring</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      We design partnership structures that benefit existing founders, allowing them to maintain operational control while participating in the upside of consolidated growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">4</div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Strategic Exit</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      After 5-7 years of building scale and market position, we aim for an investment exit that realizes a return for the fund and founders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Creation */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Value Creation Approach</h2>
            <p className="text-xl text-gray-300">
              Multiple levers for driving sustainable growth and profitability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Revenue Synergies</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▶</span>
                  <span>Cross-selling opportunities between portfolio companies across sales network</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▶</span>
                  <span>Expanded service offerings through complementary capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▶</span>
                  <span>Geographic expansion using proven business models</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▶</span>
                  <span>Enhanced customer relationships through connected technology solutions</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Operational Efficiencies</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▶</span>
                  <span>Shared administrative and support functions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▶</span>
                  <span>Best practice implementation across portfolio</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▶</span>
                  <span>Consolidated purchasing power and vendor negotiations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▶</span>
                  <span>Technology and systems standardization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      <FundFooter />
    </div>
  );
}