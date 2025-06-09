"use client";

import Link from 'next/link';
import Image from 'next/image';
import FundNavigation from '../../../components/FundNavigation';
import FundFooter from '../../../components/FundFooter';

export default function TeamPage() {
  const founders = [
    {
      name: "Matt Allgeier",
      role: "Chief Executive Officer",
      image: "/images/matt.jpeg",
      bio: "Senior Director at EY-Parthenon with extensive consulting and business leadership experience. Matt brings proven expertise in business planning, P&L management, and public speaking to American Apex Search Fund.",
      experience: "EY-Parthenon (5+ years), InSITE Fellowship, Tesla MBA Intern, World Bank Group Consulting, Founded and scaled Southern Racing and GM Landscape Design with 50+ employees",
      education: "MBA from Georgetown University McDonough School of Business, Universidad Austral Buenos Aires, BBA from Northwood University",
      linkedin: "https://www.linkedin.com/in/mattallgeier/",
      skills: ["Public Speaking", "Business Planning", "P&L Management", "Strategic Consulting", "Entrepreneurship"],
      achievements: ["5+ years at EY-Parthenon", "Founded multiple successful businesses", "FAA Private Pilot Certificate"]
    },
    {
      name: "James Quaglia",
      role: "Chief Technology Officer",
      image: "/images/james.jpeg",
      bio: "CTO with over 10 years of AI project experience, including 5+ years in traditional ML and deep learning. James combines technical leadership with business development expertise in AI-driven solutions.",
      experience: "USS Vision Inc. CTO (4+ years), Next Door Loan LLC CTO (3+ years), POWER Engineers, Consumers Energy Engineering roles",
      education: "Bachelor of Science in Electrical and Electronics Engineering from Michigan State University",
      linkedin: "https://www.linkedin.com/in/james-quaglia-06143bb5/",
      skills: ["Generative AI", "Technical Leadership", "Business Development", "Machine Learning", "Deep Learning"],
      achievements: ["Developed AI-driven stamping defect detection for major automakers", "CVP-Advanced Certification", "Published research in nuclear astrophysics"]
    },
    {
      name: "Jonathon Bauman", 
      role: "Chief Operating Officer",
      image: "/images/jon.jpeg",
      bio: "Account Manager at EPITEC with extensive experience in IT staffing and recruitment. Jon brings proven leadership, customer service, and management expertise to operational excellence.",
      experience: "EPITEC Associate Account Manager and Technical Recruiter (8+ years), serving clients like Blue Cross Blue Shield, GM, Caterpillar, Ford",
      education: "Bachelor's Degree in Psychology from Michigan State University",
      linkedin: "https://www.linkedin.com/in/jonathon-bauman/",
      skills: ["Leadership", "Customer Service", "Management", "IT Staffing", "Recruitment"],
      achievements: ["Multiple President's Club awards", "8+ years in technical recruiting", "Full cycle recruiting expertise"]
    },
    {
      name: "Patrick Ritschel",
      role: "Chief Sales Officer",
      image: "/images/pat.jpeg",
      bio: "Automotive CX consultant and trainer with over 30 years of retail experience. Patrick is an 'Instigator of Change' who believes data-driven consulting is the path to continuous improvement.",
      experience: "2°Degrees Management LLC Owner, Ritschel & Associates Owner (25+ years), Sandy Corporation/General Physics Ford CPO Consultant (15+ years)",
      education: "Over 30 years of hands-on automotive retail and consulting experience",
      linkedin: "https://www.linkedin.com/in/patrick-ritschel/",
      skills: ["Customer Satisfaction", "Training", "Automotive Expertise", "Digital Retailing", "Process Improvement"],
      achievements: ["30+ years automotive retail experience", "Sought-after industry speaker", "Ford & Lincoln dealer improvement specialist"]
    },
    {
      name: "Cole Borland",
      role: "Chief Product Officer",
      image: "/images/bradley.jpeg",
      bio: "National Account Manager with extensive experience in consumer goods and retail category management. Cole has a proven track record of driving significant revenue growth and market share expansion.",
      experience: "Woodland Gourmet, Ball Corporation (managed Target, Ahold-Delhaize, Publix), Kraft Heinz Customer Sales Manager, Essentia Water (120% sales increase)",
      education: "Bachelor of Arts in Psychology from Michigan State University and Westminster College",
      linkedin: "https://www.linkedin.com/in/cole-borland/",
      skills: ["National Sales Management", "Category Management", "Retail Category Management", "Revenue Growth", "Market Expansion"],
      achievements: ["120% sales increase at Essentia Water", "Top revenue generator at MyTime (105 new accounts)", "Achieved majority market share in Salt Lake City enhanced water sector"]
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
              Experienced operators and strategists committed to building lasting value through partnership and market consolidation
            </p>
          </div>
        </div>
      </section>

      {/* Founding Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Founding Partners</h2>
            <p className="text-xl text-gray-600">
              Five experienced leaders with complementary expertise in strategy, technology, operations, sales, and product development
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
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">Professional Experience</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {founder.experience}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-3">Education</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {founder.education}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.skills.map((skill) => (
                        <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-3">Notable Achievements</h4>
                    <ul className="space-y-2">
                      {founder.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 mr-2 mt-1">•</span>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6">
                    <a 
                      href={founder.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                      </svg>
                      LinkedIn Profile
                    </a>
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

      {/* Advisory Board */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Advisory Board</h2>
            <p className="text-xl text-gray-600">
              We work with experienced advisors who provide strategic guidance and industry expertise
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-12 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Building Our Advisory Network</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              As we grow our portfolio, we're assembling a board of advisors with deep expertise in our target industries and proven track records in business consolidation and value creation.
            </p>
            <Link 
              href="/fund/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Join Our Advisory Network
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Our Team?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're a business owner looking for growth partners or interested in joining our mission, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/fund/entrepreneurs" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Partnership Opportunities
            </Link>
            <Link 
              href="/fund/contact" 
              className="border border-white hover:bg-white hover:text-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <FundFooter />
    </div>
  );
}