"use client";

import Link from 'next/link';
import Image from 'next/image';
import FundNavigation from '../../../components/FundNavigation';
import FundFooter from '../../../components/FundFooter';

export default function EntrepreneursPage() {
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
              Partnership Opportunities
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Partner
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                With Us
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              We believe the best deals are partnerships, not acquisitions. Keep doing what you do best while we help you grow, scale, and create lasting value together.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Partnership Philosophy</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're not traditional buyers looking to take over your business. We're partners who believe in empowering the entrepreneurs who built successful companies to continue leading while benefiting from shared growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">You remain the leader of your business</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">We provide capital, resources, and strategic support</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center mr-3 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Together we build something larger and more valuable</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/images/partner_viz.png" 
                alt="Partnership Visualization"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How Our Partnerships Work</h2>
            <p className="text-xl text-gray-600">
              Flexible structures designed to benefit everyone involved
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Stay in Control</h3>
              <p className="text-gray-600 mb-4">
                Continue leading your business and making day-to-day operational decisions. We're here to support, not replace your leadership.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Maintain operational control</li>
                <li>• Keep your team and culture</li>
                <li>• Lead strategic direction</li>
                <li>• Preserve your brand identity</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Share the Upside</h3>
              <p className="text-gray-600 mb-4">
                Participate in value creation as we grow together. Our success is tied to your success through aligned incentive structures.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Equity participation in growth</li>
                <li>• Performance-based rewards</li>
                <li>• Exit proceeds sharing</li>
                <li>• Long-term wealth creation</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Access Network Effects</h3>
              <p className="text-gray-600 mb-4">
                Benefit from synergies across our portfolio companies, shared best practices, and collective purchasing power.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Cross-selling opportunities</li>
                <li>• Shared resources and systems</li>
                <li>• Best practice implementation</li>
                <li>• Collective buying power</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Partner With American Apex Search Fund?</h2>
            <p className="text-xl text-gray-600">
              More than capital - we bring expertise, network, and shared vision for growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Strategic Advantages</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Proven Track Record</h4>
                  <p className="text-gray-600">Our team brings 50+ years of combined experience in revenue growth, operations, and strategic transactions across multiple industries.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Long-term Thinking</h4>
                  <p className="text-gray-600">5-7 year timeline to build sustainable value, not quick flips. We're committed to building lasting businesses together.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Collaborative Approach</h4>
                  <p className="text-gray-600">Turn competitors into collaborators through market consolidation and shared resources across our portfolio.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Operational Support</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Best Practices Sharing</h4>
                  <p className="text-gray-600">Access to proven systems, processes, and strategies that have worked across our portfolio companies.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Technology & Systems</h4>
                  <p className="text-gray-600">Leverage shared technology platforms, CRM systems, and operational tools to improve efficiency and scale.</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Strategic Advisory</h4>
                  <p className="text-gray-600">Regular strategic guidance on expansion, market opportunities, and value creation initiatives.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Partners */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ideal Partners</h2>
            <p className="text-xl text-gray-300">
              We're looking for established business owners who share our vision for growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Business Characteristics</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▶</span>
                  <span>&gt;$500k in annual revenue</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▶</span>
                  <span>With growth opportunity to generate positive cash flow</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▶</span>
                  <span>Current player in targeted industry</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▶</span>
                  <span>Consistent customer base and reputation</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">▶</span>
                  <span>Established presence in a geographic market territory</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Founder Qualities</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">▶</span>
                  <span>Interested in growth and expansion opportunities</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">▶</span>
                  <span>Value collaboration over pure competition</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">▶</span>
                  <span>Want to participate in creating something larger</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">▶</span>
                  <span>Excited about sharing and learning best practices</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">▶</span>
                  <span>Committed to long-term value creation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Partnership Process</h2>
            <p className="text-xl text-gray-600">
              Transparent, straightforward approach to exploring partnership opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Initial Conversation</h3>
              <p className="text-gray-600">
                No-pressure discussion about your goals, our approach, and potential fit for partnership.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Mutual Evaluation</h3>
              <p className="text-gray-600">
                Due diligence process to ensure strategic and cultural alignment between our organizations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Partnership Structure</h3>
              <p className="text-gray-600">
                Design a deal structure that works for everyone and aligns incentives for long-term success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Growth Together</h3>
              <p className="text-gray-600">
                Implement strategies for sustainable expansion and value creation across our portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>


      <FundFooter />
    </div>
  );
}