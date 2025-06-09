"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
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
    <header className="bg-white shadow-custom sticky top-0 z-50">
      <nav className="container-custom flex items-center justify-between py-3 md:py-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 transition duration-300 hover:opacity-80">
            <span className="sr-only">American Ice Lines</span>
            <div className="flex items-center">
              <Image 
                src="/images/logo.svg" 
                alt="American Ice Lines logo"
                width={44}
                height={44}
                className="h-11 w-auto"
                priority
              />
              <span className="ml-3 text-xl font-display font-bold text-deep-blue">American Ice Lines</span>
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base font-medium text-gray-700 hover:text-deep-blue transition-colors px-1 py-2"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <Link href="/order" className="btn-primary">
            <span>Order Now</span>
          </Link>
          <Link href="/cart" className="flex items-center justify-center h-10 w-10 rounded-full text-gray-700 hover:text-deep-blue hover:bg-gray-50 transition-colors">
            <ShoppingCartIcon className="h-6 w-6" />
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} fixed inset-0 z-50`}>
        <div className="fixed inset-0 bg-black/20" onClick={() => setMobileMenuOpen(false)} />
        
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">American Ice Lines</span>
              <Image 
                src="/images/logo.svg" 
                alt="American Ice Lines logo"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-1 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-frost/50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-3">
                <Link
                  href="/order"
                  className="btn-primary block w-full py-2.5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Order Now
                </Link>
                <Link
                  href="/cart"
                  className="flex items-center gap-2 -mx-3 rounded-lg px-4 py-2.5 text-base font-medium text-gray-700 hover:bg-frost/50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ShoppingCartIcon className="h-6 w-6" />
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}