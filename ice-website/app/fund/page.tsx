"use client";

import Image from 'next/image';
import Link from 'next/link';
import FundNavigation from '../../components/FundNavigation';
import FundFooter from '../../components/FundFooter';

export default function FundHomepage() {
  return (
    <div className="fund-site">
      <FundNavigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-blue-600/20 text-blue-200 rounded-full text-sm font-medium border border-blue-500/30">
                Building Value Through Strategic Partnerships
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Synergizing
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Fragmented Markets
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
              We invest in proven small businesses, partnering with founders to realize growth through consolidation synergies and operational excellence. Together, we turn competitors into collaborators.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/fund/entrepreneurs" 
                className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center">
                  Partner With Us
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link 
                href="/fund/strategy" 
                className="group border-2 border-white/30 hover:border-white hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm"
              >
                Learn Our Strategy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 lg:p-8 group-hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-center">
                <div className="text-3xl lg:text-5xl font-bold text-blue-600 mb-3">5</div>
                <div className="text-gray-700 font-medium text-sm lg:text-base leading-tight">Experienced Operating Partners</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 lg:p-8 group-hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-center">
                <div className="text-3xl lg:text-5xl font-bold text-green-600 mb-3">50+</div>
                <div className="text-gray-700 font-medium text-sm lg:text-base leading-tight">Years Combined Experience</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 lg:p-8 group-hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-center">
                <div className="text-3xl lg:text-5xl font-bold text-purple-600 mb-3">&gt;$500k</div>
                <div className="text-gray-700 font-medium text-sm lg:text-base leading-tight">Portfolio Co. Revenue Min.</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 lg:p-8 group-hover:shadow-lg transition-shadow duration-300 h-full flex flex-col justify-center">
                <div className="text-3xl lg:text-5xl font-bold text-orange-600 mb-3">5-7</div>
                <div className="text-gray-700 font-medium text-sm lg:text-base leading-tight">Year Exit Timeline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Our Advantage
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Partner With American Apex Search Fund?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're an investor group of like-minded self-starters with experience in revenue growth, operations, and deal transactions. We look for the right opportunities that together fuel growth and optimize operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">Proven Small Business Focus</h3>
              <p className="text-gray-600 leading-relaxed">We invest in established companies with track records of success and clear growth potential in fragmented markets.</p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">Founder Partnership Model</h3>
              <p className="text-gray-600 leading-relaxed">Portfolio company founders continue to do what they do best while sharing in the upside as we grow together.</p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">Market Capture Expertise</h3>
              <p className="text-gray-600 leading-relaxed">Connecting players in fragmented industries to capture market share and create sustainable competitive advantages.</p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">Shared Upside Structure</h3>
              <p className="text-gray-600 leading-relaxed">Founders participate in value creation through our unique partnership structure that aligns incentives for long-term success.</p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">Territory Expansion Strategy</h3>
              <p className="text-gray-600 leading-relaxed">Leveraging portfolio companies' best practices to expand across territories and maximize market opportunities.</p>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">Value Realization</h3>
              <p className="text-gray-600 leading-relaxed">Clear 5-7 year investment horizon to maximize value and assess exit opportunities, sharing proceeds with portfolio founders.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6">
                Our Methodology
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Our Investment Approach</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We focus on synergizing targeted markets by partnering with founders of proven small businesses. Our approach emphasizes revenue and operating synergies while sharing upside with founders.
              </p>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Target businesses with &gt;$500k revenue</h3>
                    <p className="text-gray-600">Established companies with proven market demand and growth potential</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Focus on fragmented markets with consolidation potential</h3>
                    <p className="text-gray-600">Industries where strategic partnerships can create significant competitive advantages</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Partner with existing management teams</h3>
                    <p className="text-gray-600">Empower successful entrepreneurs to continue leading while providing growth resources</p>
                  </div>
                </div>
                <div className="flex items-start group">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">5-7 year timeline to build and exit</h3>
                    <p className="text-gray-600">Long-term value creation with clear path to strategic exit and shared proceeds</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <Link 
                  href="/fund/strategy" 
                  className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
                >
                  Learn Our Strategy
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">&gt;$500k</div>
                    <div className="text-sm text-gray-600">Revenue Range</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">5-7</div>
                    <div className="text-sm text-gray-600">Year Timeline</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">10x+</div>
                    <div className="text-sm text-gray-600">Value Creation</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Partnership Focus</div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Investment Focus Areas</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Service Businesses</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Distribution</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Manufacturing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 bg-white/10 text-blue-200 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              Leadership Team
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experienced operators and strategists committed to building lasting value through partnership and market capture.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden shadow-2xl border-4 border-blue-400/30">
                  <Image
                    src="/images/matt.jpeg"
                    alt="Matt Allgeier - CEO"
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-blue-400 rounded-full mx-auto w-28 h-28 opacity-20 group-hover:opacity-40 transition-opacity blur-xl"></div>
              </div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-blue-300 transition-colors">Matt Allgeier</h3>
              <p className="text-gray-400 text-sm">Chief Executive Officer</p>
              <p className="text-xs text-gray-500 mt-2">EY-Parthenon Senior Director</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden shadow-2xl border-4 border-green-400/30">
                  <Image
                    src="/images/james.jpeg"
                    alt="James Quaglia - CTO"
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-green-400 rounded-full mx-auto w-28 h-28 opacity-20 group-hover:opacity-40 transition-opacity blur-xl"></div>
              </div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-green-300 transition-colors">James Quaglia</h3>
              <p className="text-gray-400 text-sm">Chief Technology Officer</p>
              <p className="text-xs text-gray-500 mt-2">10+ Years AI Experience</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden shadow-2xl border-4 border-purple-400/30">
                  <Image
                    src="/images/jon.jpeg"
                    alt="Jonathon Bauman - COO"
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-purple-400 rounded-full mx-auto w-28 h-28 opacity-20 group-hover:opacity-40 transition-opacity blur-xl"></div>
              </div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-purple-300 transition-colors">Jonathon Bauman</h3>
              <p className="text-gray-400 text-sm">Chief Operating Officer</p>
              <p className="text-xs text-gray-500 mt-2">8+ Years Account Management</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden shadow-2xl border-4 border-orange-400/30">
                  <Image
                    src="/images/pat.jpeg"
                    alt="Patrick Ritschel - CSO"
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-orange-400 rounded-full mx-auto w-28 h-28 opacity-20 group-hover:opacity-40 transition-opacity blur-xl"></div>
              </div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-orange-300 transition-colors">Patrick Ritschel</h3>
              <p className="text-gray-400 text-sm">Chief Sales Officer</p>
              <p className="text-xs text-gray-500 mt-2">30+ Years Automotive</p>
            </div>
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden shadow-2xl border-4 border-teal-400/30">
                  <Image
                    src="/images/bradley.jpeg"
                    alt="Cole Borland - CPO"
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-teal-400 rounded-full mx-auto w-28 h-28 opacity-20 group-hover:opacity-40 transition-opacity blur-xl"></div>
              </div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-teal-300 transition-colors">Cole Borland</h3>
              <p className="text-gray-400 text-sm">Chief Product Officer</p>
              <p className="text-xs text-gray-500 mt-2">National Account Manager</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/fund/team" 
              className="group bg-white/10 hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm border border-white/20 inline-flex items-center"
            >
              Meet the Full Team
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      <FundFooter />
    </div>
  );
}