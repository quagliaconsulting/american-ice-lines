"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Products', href: '/products' },
  { name: 'Business', href: '/business' },
  { name: 'Residential', href: '/residential' },
  { name: 'Partners', href: '/partners' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative flex-shrink-0">
                <Image 
                  src="/images/logo.svg" 
                  alt="American Ice Lines"
                  width={45}
                  height={45}
                  className="h-11 w-11 transition-transform group-hover:scale-110"
                  priority
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">American Ice Lines</h1>
                <p className="text-xs text-gray-500 -mt-0.5">Premium Ice Delivery</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 relative py-2 transition-colors"
              >
                {item.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 transition-transform group-hover:scale-x-100" />
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Cart - Desktop */}
            <Link 
              href="/cart" 
              className="hidden lg:flex relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </Link>

            {/* Order Now Button */}
            <Link 
              href="/order" 
              className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              Order Now
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}>
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" 
          onClick={() => setMobileMenuOpen(false)} 
        />
        
        {/* Mobile menu panel */}
        <div className="fixed inset-y-0 right-0 flex max-w-xs w-full">
          <div className="relative flex w-full flex-col bg-white shadow-xl">
            {/* Mobile menu header */}
            <div className="flex items-center justify-between px-4 pt-5 pb-2">
              <Link href="/" className="flex items-center space-x-3" onClick={() => setMobileMenuOpen(false)}>
                <Image 
                  src="/images/logo.svg" 
                  alt="American Ice Lines"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <span className="text-lg font-bold text-gray-900">American Ice Lines</span>
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile menu navigation */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Mobile menu actions */}
              <div className="mt-8 space-y-4">
                <Link
                  href="/cart"
                  className="flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ShoppingCartIcon className="mr-2 h-5 w-5" />
                  View Cart
                </Link>
                <Link
                  href="/order"
                  className="flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-base font-medium text-white shadow-sm hover:from-blue-700 hover:to-blue-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}