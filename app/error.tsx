'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCcw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md text-center">
        {/* Error Illustration */}
        <div className="relative w-56 h-56 mx-auto mb-6">
          {/* Main container */}
          <div className="absolute inset-0 rounded-full bg-red-100"></div>
          
          {/* Pot/mixing bowl */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-24">
            <div className="w-full h-full rounded-full bg-bright-yellow"></div>
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-20 rounded-full bg-bright-yellow/70"></div>
          </div>
          
          {/* Spilled contents */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-24 h-16">
            <div className="absolute w-32 h-8 bg-bubblegum-pink rounded-full -rotate-45 origin-right"></div>
            <div className="absolute w-24 h-8 bg-deep-purple rounded-full rotate-45 origin-left"></div>
            <div className="absolute w-20 h-6 bg-lime-green rounded-full top-8 left-4"></div>
          </div>
          
          {/* Splash effects */}
          <div className="absolute top-12 right-10 w-6 h-6 rounded-full bg-bubblegum-pink animate-bounce"></div>
          <div className="absolute top-20 left-12 w-4 h-4 rounded-full bg-lime-green animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-24 right-16 w-5 h-5 rounded-full bg-deep-purple animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          
          {/* Error text overlay */}
          <div className="absolute inset-0 flex items-center justify-center top-4">
            <span className="font-display text-4xl text-deep-purple">Oops!</span>
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl font-display text-deep-purple mb-3">
          Recipe Gone Wrong!
        </h1>
        
        <p className="text-xl text-gray-600 mb-2">
          Something unexpected happened in our kitchen
        </p>
        
        <p className="text-gray-500 mb-8 text-lg">
          Don't worry, our chefs are working to fix it. In the meantime, you can try refreshing or go back to our homepage.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="lime" 
            size="lg"
            leftIcon={<RefreshCcw />}
            rounded="full"
            onClick={() => reset()}
          >
            Try Again
          </Button>
          
          <Button 
            variant="secondary" 
            size="lg"
            leftIcon={<Home />}
            rounded="full"
            asChild
          >
            <a href="/">Go Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
} 