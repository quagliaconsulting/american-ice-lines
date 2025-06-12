"use client";

import Link from 'next/link';
import Image from 'next/image';
import FundNavigation from '../../../components/FundNavigation';
import FundFooter from '../../../components/FundFooter';

export default function TeamPage() {
  const founders = [
    {
      name: "Matt Allgeier",
      role: "Operating Partner - Portfolio Strategy & Execution",
      image: "/images/matt.jpeg",
      bio: "Transactions strategy & execution expertise with 6+ years at globally leading consulting firm and entrepreneurial know-how having grown and successfully exited two previous start-ups. Matt brings proven expertise in business planning, P&L management, and deal structuring that delivers value across our portfolios.",
      education: "MBA from Georgetown University McDonough School of Business, Universidad Austral Buenos Aires, BBA from Northwood University"
    },
    {
      name: "James Quaglia",
      role: "Operating Partner - Technology Solutions",
      image: "/images/james.jpeg",
      bio: "Technology executive with over 10 years of experience building and scaling technology companies. James brings deep expertise in AI, machine learning, and digital transformation to drive innovation across our portfolio companies.",
      education: "Bachelor of Science in Electrical and Electronics Engineering from Michigan State University"
    },
    {
      name: "Jonathon Bauman", 
      role: "Operating Partner - Human Capital",
      image: "/images/jon.jpeg",
      bio: "Extensive human capital experience, recruiting and managing talent across the organization with 8+ years at Tier-1 recruiting firm. Jon specializes in IT and Operations talent sourcing and brings operational excellence to people management.",
      education: "Bachelor's Degree from Michigan State University"
    },
    {
      name: "Patrick Ritschel",
      role: "Operating Partner - Sales Operations",
      image: "/images/pat.jpeg",
      bio: "Sales operations consultant and trainer with over 30 years of go-to-market experience. Patrick maximizes sales force pull-through and brings insights into optimizing the connected sales and customer experience end-to-end.",
      education: "Over 30 years of hands-on wholesale, retail and account management sales experience"
    },
    {
      name: "Cole Borland",
      role: "Operating Partner - Distribution, P&L Operations",
      image: "/images/bradley.jpeg",
      bio: "Distribution & logistics expert with 10+ years at leading US CPG product manufacturers. Cole has managed and scaled accounts of all sizes with P&L ownership overseeing the product category and route-to-market life cycles.",
      education: "Bachelor's degree from Michigan State University and Westminster College"
    }
  ];

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
              Leadership Team
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Meet Our
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Experienced operators and strategists committed to building lasting value through partnership and market capture
            </p>
          </div>
        </div>
      </section>

      {/* Founding Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Founding Operating Partners</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Five experienced leaders with complementary expertise in Deal Strategy & Execution, Technology, Human Capital, Sales Ops, and Distribution
            </p>
          </div>

          <div className="space-y-16">
            {founders.map((founder, index) => (
              <div key={founder.name} className={`flex flex-col lg:flex-row gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/3">
                  <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={founder.image}
                      alt={`${founder.name} - ${founder.role}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <div className="lg:w-2/3">
                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">{founder.name}</h3>
                    <p className="text-xl text-blue-600 font-semibold">{founder.role}</p>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {founder.bio}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Education</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {founder.education}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Collective Expertise</h2>
            <p className="text-lg text-gray-600">
              Our team's combined experience spans multiple industries and functional areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-gray-600">Complementary Skill Sets</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Industries Represented</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
              <div className="text-gray-600">Previous Exits</div>
            </div>
          </div>
        </div>
      </section>


      <FundFooter />
    </div>
  );
}