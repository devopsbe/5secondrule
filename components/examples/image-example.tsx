"use client";

import React from 'react';
import Image from 'next/image';
import { SafeImage, PlaceholderImage } from '@/components/ui/placeholder-image';
import { getPlaceholderImageUrl } from '@/lib/image-utils';

export default function ImageExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Using SafeImage Component</h3>
        <div className="aspect-video rounded-md overflow-hidden">
          <SafeImage 
            src="/images/example-that-doesnt-exist.jpg"
            alt="Example with fallback"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-500">
          This uses our SafeImage component which falls back to a placeholder if the image fails to load
        </p>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Using PlaceholderImage Component</h3>
        <div className="aspect-video rounded-md overflow-hidden">
          <PlaceholderImage 
            width={800}
            height={600}
            text="Placeholder Example"
            className="w-full h-full"
          />
        </div>
        <p className="text-sm text-gray-500">
          This directly uses our PlaceholderImage component
        </p>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Using Dynamic Placeholder API</h3>
        <div className="aspect-video rounded-md overflow-hidden">
          <Image 
            src={getPlaceholderImageUrl(800, 600, "API Placeholder")}
            alt="Dynamic placeholder"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-500">
          This uses our dynamic placeholder API endpoint
        </p>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Next.js Built-in Placeholder</h3>
        <div className="aspect-video rounded-md overflow-hidden">
          <Image 
            src="/placeholder.svg"
            alt="Next.js placeholder"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-500">
          This uses the Next.js built-in placeholder.svg (which we've customized)
        </p>
      </div>
    </div>
  );
} 