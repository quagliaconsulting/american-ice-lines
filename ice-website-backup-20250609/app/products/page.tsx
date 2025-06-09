"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductsPage() {
  return (
    <main>
      <div className="bg-deep-blue py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">Our Premium Ice Products</h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our range of crystal clear ice products, crafted with precision for the perfect drink experience
            </p>
          </div>
        </div>
      </div>

      <section className="container-custom py-10 md:py-16">
        <div className="text-center mb-10">
          <h2 className="heading-2 mb-3">Why Crystal Clear Ice Matters</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Our premium ice isn't just about looks - it enhances your drink in multiple ways
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-ice-blue mb-4">
              <svg className="h-8 w-8 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-deep-blue mb-3">Beautiful Presentation</h3>
            <p className="text-gray-600">
              Crystal clear ice creates a stunning visual presentation that elevates any drink.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-ice-blue mb-4">
              <svg className="h-8 w-8 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-deep-blue mb-3">Slower Melting</h3>
            <p className="text-gray-600">
              Our dense, pure ice melts significantly slower than regular ice.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-ice-blue mb-4">
              <svg className="h-8 w-8 text-deep-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-deep-blue mb-3">Pure Clean Taste</h3>
            <p className="text-gray-600">
              Without impurities, our ice adds no off-flavors to your drinks.
            </p>
          </div>
        </div>

        <div className="mb-14">
          <div className="relative rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/90 to-deep-blue/70"></div>
            <Image 
              src="/images/ice-production.jpg" 
              alt="Ice production process" 
              width={1200}
              height={350}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="text-center text-white max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Our Production Process</h3>
                <p className="mb-6">
                  Our proprietary freezing process eliminates air and impurities, resulting in perfectly clear ice.
                </p>
                <Link href="/about" className="bg-white hover:bg-frost text-deep-blue font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out inline-block">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="heading-2 mb-3">Our Premium Ice Products</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600 mb-8">
            A variety of shapes and sizes to meet all your drink and display needs
          </p>
        </div>

        <div className="space-y-16">
          {/* Crystal Cubes */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-1">
              <Image 
                src="/images/cube-ice.jpg" 
                alt="Crystal Cubes" 
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="order-2">
              <h3 className="text-xl md:text-2xl font-semibold text-deep-blue mb-3">Crystal Cubes</h3>
              <p className="text-lg text-gray-600 mb-4">
                Our signature crystal clear ice cubes are perfect for whiskey, bourbon, and other premium spirits.
              </p>
              <Link href="/order" className="btn-primary">
                Order Crystal Cubes
              </Link>
            </div>
          </div>

          {/* Sphere Ice */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-2">
              <Image 
                src="/images/sphere-ice.jpg" 
                alt="Sphere Ice" 
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-1">
              <h3 className="text-2xl md:text-3xl font-semibold text-deep-blue mb-4">Sphere Ice</h3>
              <p className="text-lg text-gray-600 mb-4">
                Our ice spheres create a stunning presentation while minimizing surface area contact with your drink.
              </p>
              <Link href="/order" className="btn-primary">
                Order Sphere Ice
              </Link>
            </div>
          </div>

          {/* Collins Ice */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-1">
              <Image 
                src="/images/collins-ice.jpg" 
                alt="Collins Ice" 
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="order-2">
              <h3 className="text-2xl md:text-3xl font-semibold text-deep-blue mb-4">Collins Ice</h3>
              <p className="text-lg text-gray-600 mb-4">
                Long, crystal clear ice sticks designed specifically for highball and collins glasses.
              </p>
              <Link href="/order" className="btn-primary">
                Order Collins Ice
              </Link>
            </div>
          </div>

          {/* Custom Shapes */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-2">
              <Image 
                src="/images/custom-ice.jpg" 
                alt="Custom Ice" 
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="order-1 md:order-1">
              <h3 className="text-2xl md:text-3xl font-semibold text-deep-blue mb-4">Custom Shapes</h3>
              <p className="text-lg text-gray-600 mb-4">
                Looking for something unique? We create custom ice shapes and sizes for special events.
              </p>
              <Link href="/contact" className="btn-primary">
                Request Custom Quote
              </Link>
            </div>
          </div>

          {/* Bulk Ice */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-1">
              <Image 
                src="/images/ice-production.jpg" 
                alt="Bulk Ice" 
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="order-2">
              <h3 className="text-2xl md:text-3xl font-semibold text-deep-blue mb-4">Bulk Ice</h3>
              <p className="text-lg text-gray-600 mb-4">
                Need large quantities of premium ice for events, businesses, or regular use?
              </p>
              <Link href="/business" className="btn-primary">
                Request Bulk Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ice-blue py-10 md:py-16">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="heading-2 mb-3">Ice for Every Occasion</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Special packages designed for specific uses and events
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-40">
                <Image
                  src="/images/home-entertaining.jpg"
                  alt="Home Entertaining"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-deep-blue mb-2">Home Entertaining</h3>
                <p className="text-gray-600 mb-4">Everything you need for a dinner party or home bar.</p>
                <Link href="/order" className="btn-primary w-full block text-center">
                  Order Now
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-40">
                <Image
                  src="/images/corporate-events.jpg"
                  alt="Corporate Events"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-deep-blue mb-2">Corporate Events</h3>
                <p className="text-gray-600 mb-4">Premium ice solutions for corporate functions.</p>
                <Link href="/contact" className="btn-primary w-full block text-center">
                  Get Quote
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-40">
                <Image
                  src="/images/wedding-events.jpg"
                  alt="Weddings & Special Events"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-deep-blue mb-2">Weddings & Events</h3>
                <p className="text-gray-600 mb-4">Make your special day memorable with custom ice.</p>
                <Link href="/contact" className="btn-primary w-full block text-center">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom py-10 md:py-16">
        <div className="text-center mb-10">
          <h2 className="heading-2 mb-3">Frequently Asked Questions</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Common questions about our ice products
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          <div className="bg-white rounded-lg p-5 shadow-md">
            <h3 className="text-xl font-semibold text-deep-blue mb-3">How long does your ice last?</h3>
            <p className="text-gray-600">Our premium ice typically lasts 30-50% longer than regular ice due to its density and purity.</p>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-md">
            <h3 className="text-xl font-semibold text-deep-blue mb-3">Do you deliver outside of major cities?</h3>
            <p className="text-gray-600">Yes! We have a wide delivery area and use specialized packaging to ensure our ice arrives in perfect condition.</p>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-md">
            <h3 className="text-xl font-semibold text-deep-blue mb-3">How should I store the ice?</h3>
            <p className="text-gray-600">Our ice comes in insulated containers that will keep it frozen for up to 24 hours.</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="btn-primary">
            Have More Questions? Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}