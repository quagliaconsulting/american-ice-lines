"use client";

import Link from 'next/link';

export default function ContactPage() {
  return (
    <>
      <div className="bg-deep-blue py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-4">
              Have questions about our products or services? Our team is here to help.
            </p>
          </div>
        </div>
      </div>

      <section className="container-custom py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="heading-2 mb-6">Get In Touch</h2>
            <p className="text-lg mb-8">
              Fill out the form and one of our ice experts will get back to you shortly. We're here to answer any questions about our products, delivery service, or custom solutions.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-deep-blue mb-2">Our Office</h3>
                <address className="not-italic">
                  <p>123 Crystal Way</p>
                  <p>Iceville, CA 90210</p>
                </address>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-deep-blue mb-2">Contact Info</h3>
                <p>
                  <span className="font-medium">Phone:</span>{' '}
                  <a href="tel:+18005551234" className="text-deep-blue hover:underline">(800) 555-1234</a>
                </p>
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  <a href="mailto:info@americanicelines.com" className="text-deep-blue hover:underline">info@americanicelines.com</a>
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-deep-blue mb-2">Business Hours</h3>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div>
            <form className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject<span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="business">Business Services</option>
                    <option value="residential">Home Delivery</option>
                    <option value="custom">Custom Orders</option>
                    <option value="support">Customer Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="h-4 w-4 text-deep-blue focus:ring-deep-blue border-gray-300 rounded mt-1"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                    I agree to the <Link href="/privacy" className="text-deep-blue hover:underline">Privacy Policy</Link> and consent to being contacted regarding my inquiry.
                  </label>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full btn-primary py-3"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="container-custom py-12 pb-24">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Find quick answers to common questions about our products and services
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-deep-blue mb-3">How far in advance should I place my order?</h3>
            <p className="text-gray-600">For residential deliveries, we recommend ordering at least 24 hours in advance. For business accounts and large orders, please allow 48-72 hours.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-deep-blue mb-3">What makes your ice crystal clear?</h3>
            <p className="text-gray-600">We use a specialized freezing process that removes air and impurities, resulting in perfectly clear ice that melts slower and enhances beverages without diluting them quickly.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-deep-blue mb-3">Do you offer custom ice sculptures?</h3>
            <p className="text-gray-600">Yes! We create custom ice sculptures for special events, corporate functions, and weddings. Contact us with your specific requirements for a quote.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-deep-blue mb-3">How is the ice packaged for delivery?</h3>
            <p className="text-gray-600">Our ice is delivered in insulated containers that keep it frozen for up to 24 hours. For business accounts, we also offer storage solutions.</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link href="/faq" className="text-deep-blue hover:underline font-medium inline-flex items-center">
            View all FAQs
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
