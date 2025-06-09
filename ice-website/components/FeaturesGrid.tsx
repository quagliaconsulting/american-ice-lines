"use client";

import { ReactNode } from 'react';
import { 
  SparklesIcon, 
  CalendarIcon, 
  CubeIcon, 
  TruckIcon, 
  CurrencyDollarIcon, 
  BeakerIcon
} from '@heroicons/react/24/outline';

interface Feature {
  title: string;
  description: string;
  icon: 'sparkles' | 'calendar' | 'cube' | 'truck' | 'currencyDollar' | 'beaker';
}

interface FeaturesGridProps {
  title: string;
  features: Feature[];
}

const iconMap: Record<string, ReactNode> = {
  sparkles: <SparklesIcon className="h-7 w-7" />,
  calendar: <CalendarIcon className="h-7 w-7" />,
  cube: <CubeIcon className="h-7 w-7" />,
  truck: <TruckIcon className="h-7 w-7" />,
  currencyDollar: <CurrencyDollarIcon className="h-7 w-7" />,
  beaker: <BeakerIcon className="h-7 w-7" />,
};

export default function FeaturesGrid({ title, features }: FeaturesGridProps) {
  return (
    <section className="container-custom section-padding">
      <div className="text-center mb-10">
        <h2 className="heading-2 mb-4">{title}</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-7">
        {features.map((feature, index) => (
          <div key={index} className="flex group">
            <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-ice-blue group-hover:bg-deep-blue/10 transition-colors duration-300">
              <div className="text-deep-blue group-hover:scale-110 transition-transform duration-300">
                {iconMap[feature.icon]}
              </div>
            </div>
            <div className="ml-5">
              <h3 className="text-lg font-semibold text-deep-blue mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}