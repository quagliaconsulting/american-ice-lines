"use client";

import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
}

export default function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink,
  imageUrl
}: HeroProps) {
  return (
    <div className="relative bg-crystal overflow-hidden min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt="Hero background"
          fill
          priority
          className="object-cover object-right-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
      </div>
      
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-64 h-64 rounded-full bg-ice-blue/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-deep-blue/5 blur-3xl"></div>
      </div>
      
      <div className="relative container-custom py-16 md:py-20 lg:py-24">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 bg-ice-blue text-deep-blue font-semibold text-sm rounded-full mb-7">Premium Ice Delivery Service</span>
          <h1 className="heading-1 mb-7 leading-tight">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
            {subtitle}
          </p>
          
          <div className="flex flex-wrap gap-5 mb-10">
            <Link href={ctaLink} className="btn-primary text-lg px-8 py-3.5 shadow-lg hover:shadow-xl">
              {ctaText}
            </Link>
            <Link href="/products" className="btn-secondary text-lg px-8 py-3.5">
              View Products
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            <div className="text-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm">
                <p className="text-deep-blue font-semibold text-2xl">100%</p>
                <p className="text-gray-600 text-sm">Crystal Clear</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm">
                <p className="text-deep-blue font-semibold text-2xl">24hr</p>
                <p className="text-gray-600 text-sm">Delivery</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm">
                <p className="text-deep-blue font-semibold text-2xl">5★</p>
                <p className="text-gray-600 text-sm">Rated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}