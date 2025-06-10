"use client";

import Image from 'next/image';
import Link from 'next/link';
import Hero from '../components/Hero';
import ProductFeature from '../components/ProductFeature';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';
import FeaturesGrid from '../components/FeaturesGrid';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero 
        title="Crystal Clear Ice, Delivered to Your Door"
        subtitle="Premium specialty ice products for businesses and homes at the best prices"
        ctaText="Order Now"
        ctaLink="/order"
        imageUrl="/images/ice-hero.jpg"
      />
      
      <section className="container-custom section-padding">
        <div className="text-center mb-10">
          <h2 className="heading-2 mb-3">Our Premium Ice Products</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Crafted with precision and care, our crystal clear ice products enhance every drink and display
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductFeature 
            title="Crystal Cubes"
            description="Perfect 2-inch crystal clear ice cubes for premium cocktails and spirits"
            imageSrc="/images/cube-ice.jpg"
            link="/products/crystal-cubes"
          />
          <ProductFeature 
            title="Sphere Ice"
            description="Elegant slow-melting spheres that keep drinks cold without dilution"
            imageSrc="/images/sphere-ice.jpg"
            link="/products/sphere-ice"
          />
          <ProductFeature 
            title="Collins Ice"
            description="Long, clear ice sticks ideal for highball and collins glasses"
            imageSrc="/images/collins-ice.jpg"
            link="/products/collins-ice"
          />
        </div>
      </section>

      <FeaturesGrid 
        title="Why Choose American Ice Lines?"
        features={[
          {
            title: "Crystal Clear Quality",
            description: "Our proprietary freezing technique eliminates air and impurities for perfectly clear ice",
            icon: "sparkles"
          },
          {
            title: "Subscription Service",
            description: "Regular deliveries on your schedule - never run out of premium ice again",
            icon: "calendar"
          },
          {
            title: "Custom Shapes & Sizes",
            description: "Bespoke ice products tailored to your specific needs and brand",
            icon: "cube"
          },
          {
            title: "Fast Reliable Delivery",
            description: "Temperature-controlled delivery ensures your ice arrives in perfect condition",
            icon: "truck"
          },
          {
            title: "Wholesale Pricing",
            description: "Competitive rates for businesses with volume discounts available",
            icon: "currencyDollar"
          },
          {
            title: "Eco-Friendly Packaging",
            description: "Sustainable packaging solutions that keep ice frozen while respecting the environment",
            icon: "beaker"
          }
        ]}
      />

      <div className="bg-ice-blue">
        <section className="container-custom section-padding">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="heading-2 mb-4">For Businesses</h2>
              <p className="text-lg mb-4">
                Elevate your customer experience with premium crystal clear ice that makes every drink exceptional. Perfect for bars, restaurants, hotels, and event venues.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="text-deep-blue mr-2">✓</span> Wholesale pricing
                </li>
                <li className="flex items-start">
                  <span className="text-deep-blue mr-2">✓</span> Custom branding available
                </li>
                <li className="flex items-start">
                  <span className="text-deep-blue mr-2">✓</span> Reliable scheduled delivery
                </li>
              </ul>
              <Link href="/business" className="btn-primary">
                Business Solutions
              </Link>
            </div>
            <div className="md:w-1/2 relative rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/business-ice.jpg" 
                alt="Business ice service" 
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </div>

      <section className="container-custom section-padding">
        <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="heading-2 mb-4">For Homes</h2>
            <p className="text-lg mb-4">
              Bring the luxury of crystal clear ice to your home bar and special occasions. Impress guests and enjoy premium beverages with ice that's as beautiful as it is functional.
            </p>
            <ul className="mb-6 space-y-2">
              <li className="flex items-start">
                <span className="text-deep-blue mr-2">✓</span> Home delivery service
              </li>
              <li className="flex items-start">
                <span className="text-deep-blue mr-2">✓</span> Subscribe and save
              </li>
              <li className="flex items-start">
                <span className="text-deep-blue mr-2">✓</span> Gift packages available
              </li>
            </ul>
            <Link href="/residential" className="btn-primary">
              Home Delivery
            </Link>
          </div>
          <div className="md:w-1/2 relative rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/home-ice.jpg" 
              alt="Home ice delivery" 
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <TestimonialSection />
      <CTASection />
    </div>
  );
}