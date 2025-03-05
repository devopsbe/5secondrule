import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-md text-center">
        {/* 404 Flower Illustration */}
        <div className="relative w-60 h-60 mx-auto mb-6">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-52 h-52">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-full h-full"
              >
                {/* Petals with opacity offset for animation */}
                <path
                  className="fill-bubblegum-pink opacity-90 animate-[wiggle_5s_ease-in-out_infinite]"
                  d="M50 10 C60 25 75 25 85 15 C90 30 80 45 65 50 C80 55 90 70 85 85 C70 80 55 90 50 100 C45 90 30 80 15 85 C10 70 20 55 35 50 C20 45 10 30 15 15 C30 20 45 10 50 10Z"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="12"
                  className="fill-deep-purple opacity-90"
                />
              </svg>
            </div>
          </div>
          
          {/* Overlay the text "404" */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-5xl text-white">404</span>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-bright-yellow opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full bg-lime-green opacity-20 animate-pulse"></div>
        </div>

        {/* Content */}
        <h1 className="text-4xl font-display text-deep-purple mb-3">
          Oops! Recipe Not Found
        </h1>
        
        <p className="text-xl text-gray-600 mb-2">
          Looks like this dish doesn't exist in our kitchen!
        </p>
        
        <p className="text-lg text-gray-500 mb-8">
          The page you're looking for has been moved, deleted, or was never on our menu.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="default" 
            size="lg"
            leftIcon={<Home />}
            rounded="full"
            asChild
          >
            <Link href="/">
              Go Home
            </Link>
          </Button>
          
          <Button 
            variant="bright" 
            size="lg"
            rounded="full"
            asChild
          >
            <Link href="/recipes">
              Browse Recipes
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 