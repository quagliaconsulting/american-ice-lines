"use client";

import Image from 'next/image';

const testimonials = [
  {
    content: "American Ice Lines has transformed our cocktail program. Our customers constantly comment on the crystal clear ice in their drinks. It's a small detail that makes a big impression.",
    author: "Sarah Johnson",
    role: "Bar Manager, The Craft Room",
    image: "/images/testimonial-1.jpg"
  },
  {
    content: "We've been using American Ice Lines for our events for over a year now. The quality is consistent, delivery is always on time, and the custom ice sculptures always impress our clients.",
    author: "Michael Chen",
    role: "Event Director, Platinum Events",
    image: "/images/testimonial-2.jpg"
  },
  {
    content: "Having premium ice delivered to my home bar has been a game-changer. It's like having a high-end cocktail lounge experience right at home, and my guests are always impressed.",
    author: "Robert Garcia",
    role: "Home Customer",
    image: "/images/testimonial-3.jpg"
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-ice-blue py-12 md:py-16">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="heading-2 mb-4">What Our Customers Say</h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            We take pride in delivering the highest quality ice products with exceptional service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card p-8 relative flex flex-col h-full">
              <div className="mb-6">
                <svg className="h-12 w-12 text-deep-blue opacity-10" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 flex-grow italic">{testimonial.content}</p>
              <div className="flex items-center mt-auto">
                <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-frost shadow-md">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-deep-blue">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}