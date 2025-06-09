"use client";

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-deep-blue py-12 md:py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-white blur-3xl"></div>
      </div>
      
      <div className="container-custom text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
          Ready to Experience Crystal Clear Ice?
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-7">
          Whether you're a business looking to enhance your beverage service or a homeowner wanting to elevate your entertaining, we've got the perfect ice solution for you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <Link href="/order" className="bg-white hover:bg-frost text-deep-blue font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            Place an Order
          </Link>
          <Link href="/contact" className="border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}