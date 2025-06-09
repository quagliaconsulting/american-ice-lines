"use client";

import Image from 'next/image';
import Link from 'next/link';
import CTASection from '../../components/CTASection';

export default function AboutPage() {
  return (
    <>
      <div className="bg-deep-blue py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">About American Ice Lines</h1>
            <p className="text-xl text-gray-300 mb-4">
              Crafting premium crystal clear ice since 2020
            </p>
          </div>
        </div>
      </div>

      <section className="container-custom py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading-2 mb-6">Our Story</h2>
            <p className="text-lg mb-4">
              American Ice Lines was founded in 2020 by a team of craft cocktail enthusiasts and food science experts who shared a passion for perfect ice. After years of experimenting with different freezing techniques and water purification methods, we developed our proprietary process for creating crystal clear ice that enhances every drink it touches.
            </p>
            <p className="text-lg mb-4">
              What started as a small operation serving local bars and restaurants quickly grew as word spread about the quality of our products. Today, we're proud to deliver premium ice to businesses and homes across the country, maintaining our commitment to quality, innovation, and exceptional service.
            </p>
            <p className="text-lg">
              Our mission is simple: to elevate the drinking experience through perfect ice, delivered reliably and sustainably.
            </p>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/about-team.jpg" 
              alt="Our team at American Ice Lines" 
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-ice-blue py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Our Process</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Creating crystal clear ice is both an art and a science
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <ProcessStep 
              number="1"
              title="Water Purification"
              description="We start with triple-filtered water to remove all impurities and minerals that cause cloudiness."
            />
            <ProcessStep 
              number="2"
              title="Directional Freezing"
              description="Our proprietary freezing technique forces air bubbles and impurities out of the ice as it forms."
            />
            <ProcessStep 
              number="3"
              title="Precision Cutting"
              description="Each piece of ice is cut to exact specifications using specialized equipment for perfect shapes."
            />
            <ProcessStep 
              number="4"
              title="Quality Control"
              description="Every batch undergoes rigorous inspection to ensure only the clearest ice reaches our customers."
            />
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-deep-blue mb-4 text-center">The Science Behind Clear Ice</h3>
              <p className="mb-4">
                Traditional ice cubes freeze from the outside in, trapping air bubbles and impurities in the center, which creates cloudiness. Our directional freezing method freezes water from one direction only, allowing air and impurities to be pushed out before they can be trapped.
              </p>
              <p>
                This process, combined with our ultra-pure water, results in ice that is not only visually stunning but also melts more slowly and doesn't impart any unwanted flavors to your drink.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Our Values</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ValueCard 
            title="Quality Without Compromise"
            description="We never cut corners. From water sourcing to delivery, we maintain the highest standards at every step."
            icon={<svg className="h-8 w-8 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
          />
          <ValueCard 
            title="Sustainability"
            description="We're committed to minimizing our environmental impact through eco-friendly packaging, efficient production, and responsible water usage."
            icon={<svg className="h-8 w-8 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>}
          />
          <ValueCard 
            title="Innovation"
            description="We continuously research and develop new techniques, shapes, and services to better serve our customers and advance the art of ice crafting."
            icon={<svg className="h-8 w-8 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
          />
          <ValueCard 
            title="Customer Service"
            description="We believe in building lasting relationships with our customers through responsive support, reliable delivery, and personalized solutions."
            icon={<svg className="h-8 w-8 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
          />
          <ValueCard 
            title="Craftsmanship"
            description="We approach ice-making as both an art and a science, with attention to detail and pride in our work evident in every piece of ice we create."
            icon={<svg className="h-8 w-8 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
          />
          <ValueCard 
            title="Community"
            description="We're proud to be part of the culinary and beverage community, supporting local events, education, and the advancement of drink culture."
            icon={<svg className="h-8 w-8 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}
          />
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 border-t border-gray-200">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">Meet Our Leadership</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              The team behind American Ice Lines
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember 
              name="Michael Chen"
              role="Founder & CEO"
              bio="With a background in food science and a passion for craft cocktails, Michael founded American Ice Lines to revolutionize how we think about ice in drinks."
              image="/images/team-1.jpg"
            />
            <TeamMember 
              name="Sarah Johnson"
              role="Chief Operations Officer"
              bio="Sarah brings 15 years of logistics and supply chain experience to ensure our ice is delivered perfectly every time, no matter the destination."
              image="/images/team-2.jpg"
            />
            <TeamMember 
              name="David Rodriguez"
              role="Head of Product Development"
              bio="David combines artistry and technical expertise to develop new ice products and refine our production processes for exceptional quality."
              image="/images/team-3.jpg"
            />
          </div>
        </div>
      </section>

      <section className="container-custom py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading-2 mb-6">Our Commitment to Sustainability</h2>
            <p className="text-lg mb-4">
              At American Ice Lines, we recognize the importance of responsible environmental practices. Our sustainability initiatives include:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-deep-blue text-white flex items-center justify-center mr-3">✓</span>
                <div>
                  <h3 className="font-semibold text-deep-blue">Eco-Friendly Packaging</h3>
                  <p>All our delivery containers are made from recycled materials and are reusable or recyclable.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-deep-blue text-white flex items-center justify-center mr-3">✓</span>
                <div>
                  <h3 className="font-semibold text-deep-blue">Water Conservation</h3>
                  <p>Our production process includes water recycling systems that reduce waste and conserve this precious resource.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-deep-blue text-white flex items-center justify-center mr-3">✓</span>
                <div>
                  <h3 className="font-semibold text-deep-blue">Carbon-Neutral Delivery</h3>
                  <p>We offset the carbon footprint of our delivery operations through investments in environmental projects.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-deep-blue text-white flex items-center justify-center mr-3">✓</span>
                <div>
                  <h3 className="font-semibold text-deep-blue">Energy Efficiency</h3>
                  <p>Our production facilities use energy-efficient equipment and renewable energy sources wherever possible.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/sustainability.jpg" 
              alt="Our sustainable packaging" 
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md text-center relative">
      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-deep-blue text-white text-xl font-bold mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-deep-blue mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ValueCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md transition-transform hover:scale-105 h-full">
      <div className="text-deep-blue mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-deep-blue mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TeamMember({ name, role, bio, image }: { name: string; role: string; bio: string; image: string }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-deep-blue mb-1">{name}</h3>
        <p className="text-gray-500 mb-4">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
}
