"use client";

import Image from 'next/image';
import Link from 'next/link';

interface ProductFeatureProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

export default function ProductFeature({ 
  title, 
  description, 
  imageSrc, 
  link 
}: ProductFeatureProps) {
  return (
    <div className="card overflow-hidden transition-all duration-300 hover:scale-[1.02] group">
      <div className="relative h-52">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-deep-blue mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link} className="text-deep-blue font-medium group-hover:text-blue-700 inline-flex items-center transition-colors">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </div>
  );
}