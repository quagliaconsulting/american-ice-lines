"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function OrderPage() {
  return (
    <>
      <div className="bg-deep-blue py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6">Order Premium Ice</h1>
            <p className="text-xl text-gray-300 mb-8">
              Select your products, customize your order, and we'll deliver crystal clear ice right to your door
            </p>
          </div>
        </div>
      </div>

      <section className="container-custom py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="heading-2 mb-6">Select Your Products</h2>
            
            <div className="space-y-6">
              <ProductOrderCard
                title="Crystal Cubes"
                description="Perfect 2-inch crystal clear ice cubes for premium cocktails and spirits"
                price="19.99"
                image="/images/cube-ice.jpg"
                options={[
                  { value: '24', label: '24 Cubes - $19.99' },
                  { value: '48', label: '48 Cubes - $34.99' },
                  { value: '96', label: '96 Cubes - $59.99' },
                ]}
              />
              
              <ProductOrderCard
                title="Sphere Ice"
                description="Elegant slow-melting spheres that keep drinks cold without dilution"
                price="24.99"
                image="/images/sphere-ice.jpg"
                options={[
                  { value: '12', label: '12 Spheres - $24.99' },
                  { value: '24', label: '24 Spheres - $44.99' },
                  { value: '48', label: '48 Spheres - $79.99' },
                ]}
              />
              
              <ProductOrderCard
                title="Collins Ice"
                description="Long, clear ice sticks ideal for highball and collins glasses"
                price="22.99"
                image="/images/collins-ice.jpg"
                options={[
                  { value: '12', label: '12 Sticks - $22.99' },
                  { value: '24', label: '24 Sticks - $39.99' },
                  { value: '48', label: '48 Sticks - $69.99' },
                ]}
              />
              
              <ProductOrderCard
                title="Home Entertaining Pack"
                description="Perfect for dinner parties and gatherings"
                price="29.99"
                image="/images/entertaining-pack.jpg"
                options={[
                  { value: 'standard', label: 'Standard Pack - $29.99' },
                  { value: 'large', label: 'Large Pack - $49.99' },
                ]}
              />
              
              <ProductOrderCard
                title="Custom Ice"
                description="Custom shapes and sizes for special events and branding"
                price="Custom"
                image="/images/custom-ice.jpg"
                custom={true}
              />
            </div>
            
            <div className="mt-12">
              <h2 className="heading-3 mb-6">Delivery Information</h2>
              <form className="space-y-6">
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
                    Phone<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      City<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="state"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="CA">California</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                      {/* Add more states as needed */}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="zip"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="delivery_date" className="block text-sm font-medium text-gray-700 mb-1">
                    Delivery Date<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="delivery_date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="delivery_time" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Delivery Time
                  </label>
                  <select
                    id="delivery_time"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                  >
                    <option value="">Select a time window</option>
                    <option value="morning">Morning (9am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 4pm)</option>
                    <option value="evening">Evening (4pm - 7pm)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                    Special Instructions
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent"
                    placeholder="Delivery instructions, gate codes, etc."
                  ></textarea>
                </div>
                
                <div className="mt-8">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-deep-blue focus:ring-deep-blue border-gray-300 rounded"
                    />
                    <span className="ml-2 text-gray-700">Subscribe to regular deliveries and save 10%</span>
                  </label>
                </div>
              </form>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-deep-blue mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-semibold">$0.00</span>
                </div>
              </div>
              
              <button type="submit" className="w-full btn-primary py-3">
                Proceed to Checkout
              </button>
              
              <div className="mt-6 text-sm text-gray-500">
                <p>By placing your order, you agree to our <Link href="/terms" className="text-deep-blue hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-deep-blue hover:underline">Privacy Policy</Link>.</p>
              </div>
              
              <div className="mt-8 space-y-4">
                <h4 className="font-medium">We Accept</h4>
                <div className="flex space-x-2">
                  <div className="bg-gray-100 rounded p-2">
                    <svg className="h-8 w-12" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="32" rx="4" fill="#F3F4F6"/>
                      <path d="M18 21H30V11H18V21Z" fill="#FF5F00"/>
                      <path d="M19 16C19 13.2386 20.2642 10.7386 22.2335 9C20.4972 7.61386 18.3288 6.8 16 6.8C10.4772 6.8 6 10.9249 6 16C6 21.0751 10.4772 25.2 16 25.2C18.3288 25.2 20.4972 24.3861 22.2335 23C20.2642 21.2614 19 18.7614 19 16Z" fill="#EB001B"/>
                      <path d="M42 16C42 21.0751 37.5228 25.2 32 25.2C29.6712 25.2 27.5028 24.3861 25.7665 23C27.7358 21.2614 29 18.7614 29 16C29 13.2386 27.7358 10.7386 25.7665 9C27.5028 7.61386 29.6712 6.8 32 6.8C37.5228 6.8 42 10.9249 42 16Z" fill="#F79E1B"/>
                    </svg>
                  </div>
                  <div className="bg-gray-100 rounded p-2">
                    <svg className="h-8 w-12" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="32" rx="4" fill="#F3F4F6"/>
                      <path d="M20 21L22 11H25L23 21H20Z" fill="#1434CB"/>
                      <path d="M32.5581 11.5286C31.8581 11.1929 30.7957 11 29.6957 11C26.4718 11 24.2 12.6214 24.2 15.0857C24.2 16.9786 25.8761 17.9643 27.1333 18.5643C28.4239 19.1643 28.8146 19.55 28.8146 20.0786C28.8146 20.8857 27.823 21.2571 26.8991 21.2571C25.6763 21.2571 25.0098 21.1143 23.9141 20.6214L23.5 20.4429L23.0436 23.0071C23.8435 23.4286 25.3531 23.8 26.9263 23.8C30.3666 23.8 32.5915 22.2071 32.5915 19.5929C32.5915 18.1 31.6667 16.9786 29.695 16.1714C28.5326 15.65 27.8659 15.2786 27.8659 14.7143C27.8659 14.2214 28.4239 13.7286 29.561 13.7286C30.5172 13.6929 31.2171 13.9071 31.7751 14.1214L32.0656 14.2643L32.5581 11.5286Z" fill="#1434CB"/>
                      <path d="M36.4099 18.6357C36.6764 17.9714 37.6584 15.4071 37.6584 15.4071C37.6584 15.4071 37.8917 14.8 38.0361 14.4643L38.2362 15.3071C38.2362 15.3071 38.8275 18.0357 38.9608 18.6357H36.4099ZM40.461 11H38.3692C37.5808 11 37.0228 11.2143 36.6764 12.0214L32 21H35.4618C35.4618 21 36.0086 19.55 36.1308 19.2214C36.4771 19.2214 39.5039 19.2214 39.9519 19.2214C40.0407 19.6429 40.3315 21 40.3315 21H43.3694L40.461 11Z" fill="#1434CB"/>
                      <path d="M17 11L14 21H11L14.1522 11H17Z" fill="#1434CB"/>
                    </svg>
                  </div>
                  <div className="bg-gray-100 rounded p-2">
                    <svg className="h-8 w-12" viewBox="0 0 48 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="48" height="32" rx="4" fill="#F3F4F6"/>
                      <path d="M34.2432 12C33.1333 12 32.2162 12.8276 32.2162 13.931V18.069C32.2162 19.1724 33.1333 20 34.2432 20C35.3532 20 36.2703 19.1724 36.2703 18.069V13.931C36.2703 12.8276 35.3532 12 34.2432 12Z" fill="#0099DF"/>
                      <path d="M30.1891 12C29.0791 12 28.1621 12.8276 28.1621 13.931V18.069C28.1621 19.1724 29.0791 20 30.1891 20C31.299 20 32.2161 19.1724 32.2161 18.069V13.931C32.2161 12.8276 31.299 12 30.1891 12Z" fill="#F79F1A"/>
                      <path d="M31.1964 12H33.2123V20H31.1964V12Z" fill="#FF5F01"/>
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.4865 12.9138C14.0631 13.1793 13.7297 13.5793 13.4865 14.0138C13.243 14.4483 13.1216 14.9138 13.1216 15.4103C13.1216 15.9069 13.243 16.3724 13.4865 16.8069C13.7297 17.2414 14.0631 17.6414 14.4865 17.9069C14.9099 18.1724 15.3754 18.3069 15.8832 18.3069C16.391 18.3069 16.8565 18.1724 17.2799 17.9069C17.7032 17.6414 18.0366 17.2414 18.2799 16.8069C18.5233 16.3724 18.6448 15.9069 18.6448 15.4103C18.6448 14.9138 18.5233 14.4483 18.2799 14.0138C18.0366 13.5793 17.7032 13.1793 17.2799 12.9138C16.8565 12.6483 16.391 12.5138 15.8832 12.5138C15.3754 12.5138 14.9099 12.6483 14.4865 12.9138ZM11.2432 20V12H14.4324V13.4138H14.5946C14.8378 12.931 15.2125 12.5483 15.7189 12.2655C16.2252 11.9828 16.7836 11.8414 17.3946 11.8414C18.054 11.8414 18.6538 11.9828 19.193 12.2655C19.7322 12.5483 20.1681 12.9379 20.5007 13.4345C20.8333 13.931 21 14.5 21 15.1414V20H17.8108V15.6207C17.8108 15.1586 17.6892 14.7931 17.4459 14.5241C17.2027 14.2552 16.8693 14.1207 16.4459 14.1207C16.0225 14.1207 15.6888 14.2552 15.4446 14.5241C15.2004 14.7931 15.0784 15.1586 15.0784 15.6207V20H11.2432Z" fill="#231F20"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <h4 className="font-medium">Need Help?</h4>
                <p className="text-sm text-gray-600">Have questions about your order? Contact our customer service team.</p>
                <Link href="/contact" className="text-deep-blue hover:underline text-sm font-medium inline-flex items-center">
                  Contact Support
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductOrderCard({
  title,
  description,
  price,
  image,
  options,
  custom = false
}: {
  title: string;
  description: string;
  price: string;
  image: string;
  options?: { value: string; label: string }[];
  custom?: boolean;
}) {
  return (
    <div className="bg-white rounded-lg shadow p-6 border border-gray-200">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <div className="relative h-36 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-3/4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-deep-blue">{title}</h3>
            {!custom && <span className="text-lg font-bold">${price}</span>}
          </div>
          <p className="text-gray-600 mb-4">{description}</p>
          
          {custom ? (
            <div>
              <p className="text-sm text-gray-500 mb-4">Custom ice products require special consultation. Please contact us for pricing and details.</p>
              <Link href="/contact" className="btn-secondary inline-block">
                Request Quote
              </Link>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full sm:w-64">
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-transparent">
                  <option value="">Select Quantity</option>
                  {options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <button className="btn-primary py-2 px-6 whitespace-nowrap">
                Add to Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
