"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-deep-blue text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center mb-6 group transition-opacity duration-300 hover:opacity-90">
              <Image 
                src="/images/logo-white.svg" 
                alt="American Ice Lines logo"
                width={44}
                height={44}
                className="h-11 w-auto"
                priority
              />
              <span className="ml-3 text-xl font-display font-bold text-white">American Ice Lines</span>
            </Link>
            <p className="text-gray-300 mb-5 leading-relaxed">
              Delivering premium crystal clear ice to businesses and homes since 2020.
            </p>
            <div className="flex space-x-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5 font-display">Products</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/products/crystal-cubes" className="text-gray-300 hover:text-white transition-colors">Crystal Cubes</Link>
              </li>
              <li>
                <Link href="/products/sphere-ice" className="text-gray-300 hover:text-white transition-colors">Sphere Ice</Link>
              </li>
              <li>
                <Link href="/products/collins-ice" className="text-gray-300 hover:text-white transition-colors">Collins Ice</Link>
              </li>
              <li>
                <Link href="/products/custom-ice" className="text-gray-300 hover:text-white transition-colors">Custom Shapes</Link>
              </li>
              <li>
                <Link href="/products/bulk-ice" className="text-gray-300 hover:text-white transition-colors">Bulk Ice</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5 font-display">Services</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/business" className="text-gray-300 hover:text-white transition-colors">Business Solutions</Link>
              </li>
              <li>
                <Link href="/residential" className="text-gray-300 hover:text-white transition-colors">Home Delivery</Link>
              </li>
              <li>
                <Link href="/order" className="text-gray-300 hover:text-white transition-colors">Place Order</Link>
              </li>
              <li>
                <Link href="/business/catering" className="text-gray-300 hover:text-white transition-colors">Event & Catering</Link>
              </li>
              <li>
                <Link href="/business/wholesale" className="text-gray-300 hover:text-white transition-colors">Wholesale</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-5 font-display">Contact</h3>
            <address className="not-italic text-gray-300 space-y-3 mb-6 leading-relaxed">
              <p>123 Crystal Way</p>
              <p>Iceville, CA 90210</p>
              <p>Phone: <a href="tel:+18005551234" className="hover:text-white transition-colors">(800) 555-1234</a></p>
              <p>Email: <a href="mailto:info@americanicelines.com" className="hover:text-white transition-colors underline">info@americanicelines.com</a></p>
            </address>
            <Link href="/contact" className="bg-white hover:bg-frost text-deep-blue font-semibold py-2.5 px-6 rounded-lg shadow-sm transition duration-300 ease-in-out inline-flex items-center">
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700/50 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} American Ice Lines. All rights reserved.</p>
            <div className="flex space-x-8">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}