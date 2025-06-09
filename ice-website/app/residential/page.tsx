"use client";

import Image from "next/image";
import Link from "next/link";
import FeaturesGrid from "../../components/FeaturesGrid";
import CTASection from "../../components/CTASection";
import React from "react";

export default function ResidentialPage() {
  return (
    <div className="residential-page">
      <div className="bg-deep-blue text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">Premium Ice for Your Home</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Elevate your home entertaining with crystal clear ice delivered to your door
            </p>
            <Link href="/order" className="bg-white hover:bg-frost text-deep-blue font-semibold py-3 px-8 rounded-md transition duration-300 ease-in-out inline-block">
              Start Home Delivery
            </Link>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading-2 mb-6">Elevate Your Home Bar Experience</h2>
            <p className="text-lg mb-6">
              Transform your home entertaining with premium ice used by high-end cocktail bars.
            </p>
            <Link href="/products" className="btn-primary">
              Explore Home Products
            </Link>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image 
              src="/images/home-bar.jpg" 
              alt="Home bar with premium ice" 
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="bg-ice-blue">
        <div className="container-custom section-padding">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-4">How Home Delivery Works</h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Getting premium ice delivered to your home is simple and convenient
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom section-padding">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Popular Home Products</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Our most popular ice products for home delivery
          </p>
        </div>
      </div>

      <FeaturesGrid 
        title="Benefits of Home Ice Delivery"
        features={[
          {
            title: "Superior Quality",
            description: "Crystal clear ice that enhances the flavor and experience of every drink",
            icon: "sparkles"
          },
          {
            title: "Convenience",
            description: "No need to make or buy ice - we deliver it right to your door",
            icon: "truck"
          },
          {
            title: "Special Occasions",
            description: "Perfect for dinner parties, holidays, and celebrations",
            icon: "calendar"
          },
          {
            title: "Subscription Savings",
            description: "Save money with regular delivery subscriptions",
            icon: "currencyDollar"
          },
          {
            title: "Custom Options",
            description: "Choose the shapes and quantities that fit your needs",
            icon: "cube"
          },
          {
            title: "Gift Packages",
            description: "Perfect gift for cocktail enthusiasts and home entertainers",
            icon: "beaker"
          }
        ]}
      />

      <div className="bg-deep-blue text-white py-16 md:py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Special Events & Gift Packages</h2>
              <p className="text-lg mb-6">
                Planning a special event or looking for a unique gift? We offer custom ice packages.
              </p>
              <Link href="/contact" className="bg-white hover:bg-frost text-deep-blue font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out inline-block">
                Inquire About Custom Packages
              </Link>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/gift-package.jpg" 
                alt="Ice gift package" 
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}