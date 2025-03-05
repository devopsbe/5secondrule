"use client";

import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { Search, Bookmark, Filter, Clock, ShoppingCart, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

// Type definitions
type EmptyStateType = 'search' | 'favorites' | 'filter' | 'history' | 'cart' | 'generic';

interface EmptyStateProps {
  type?: EmptyStateType;
  title: string;
  description: string;
  actionLabel?: string;
  actionProps?: Omit<ButtonProps, 'children'>;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  type = 'generic',
  title,
  description,
  actionLabel,
  actionProps,
  onAction,
  className,
}: EmptyStateProps) {
  // Determine which illustration to use based on type
  const renderIllustration = () => {
    switch (type) {
      case 'search':
        return <SearchIllustration />;
      case 'favorites':
        return <FavoritesIllustration />;
      case 'filter':
        return <FilterIllustration />;
      case 'history':
        return <HistoryIllustration />;
      case 'cart':
        return <CartIllustration />;
      case 'generic':
      default:
        return <GenericIllustration />;
    }
  };

  // Determine which icon to use based on type
  const getActionIcon = () => {
    switch (type) {
      case 'search':
        return <Search className="w-4 h-4" />;
      case 'favorites':
        return <Heart className="w-4 h-4" />;
      case 'filter':
        return <Filter className="w-4 h-4" />;
      case 'history':
        return <Clock className="w-4 h-4" />;
      case 'cart':
        return <ShoppingCart className="w-4 h-4" />;
      case 'generic':
      default:
        return null;
    }
  };

  return (
    <div className={cn("flex flex-col items-center text-center px-4 py-10", className)}>
      <div className="w-64 h-64 mb-6">
        {renderIllustration()}
      </div>
      
      <h3 className="text-2xl font-display text-deep-purple mb-3">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 max-w-md">
        {description}
      </p>
      
      {actionLabel && (
        <Button
          variant="default"
          size="lg"
          rounded="full"
          leftIcon={getActionIcon()}
          onClick={onAction}
          {...actionProps}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

// Custom illustrations for each type
function GenericIllustration() {
  return (
    <div className="relative w-full h-full">
      {/* Plate */}
      <div className="absolute inset-x-0 bottom-4 mx-auto w-48 h-12 rounded-full bg-gray-200"></div>
      
      {/* Plate contents with dotted pattern */}
      <div className="absolute inset-x-0 bottom-8 mx-auto w-40 h-40 rounded-full bg-white border-4 border-gray-200 overflow-hidden">
        <div className="w-full h-full flex items-center justify-center">
          <div className="grid grid-cols-3 gap-3 w-28 h-28">
            {[...Array(9)].map((_, i) => (
              <div 
                key={i} 
                className="w-6 h-6 rounded-full bg-gray-100"
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Confused face */}
      <div className="absolute inset-x-0 top-10 mx-auto w-20">
        <div className="relative w-20 h-20 rounded-full bg-bright-yellow">
          {/* Eyes */}
          <div className="absolute left-3 top-6 w-3 h-3 rounded-full bg-deep-purple"></div>
          <div className="absolute right-3 top-6 w-3 h-3 rounded-full bg-deep-purple"></div>
          
          {/* Confused mouth */}
          <div className="absolute left-1/2 bottom-4 transform -translate-x-1/2 w-8 h-3 rounded-full border-b-2 border-deep-purple"></div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-2 right-10 w-6 h-6 rounded-full bg-bubblegum-pink/30 animate-pulse"></div>
      <div className="absolute bottom-20 left-4 w-4 h-4 rounded-full bg-lime-green/30 animate-pulse"></div>
    </div>
  );
}

function SearchIllustration() {
  return (
    <div className="relative w-full h-full">
      {/* Background */}
      <div className="absolute inset-0 rounded-full bg-gray-100/50"></div>
      
      {/* Large magnifying glass */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Glass */}
          <div className="w-36 h-36 rounded-full border-4 border-deep-purple/70"></div>
          
          {/* Handle */}
          <div className="absolute -right-4 bottom-0 w-12 h-4 bg-deep-purple/70 rounded-full rotate-45 origin-left"></div>
        </div>
      </div>
      
      {/* Question marks */}
      <div className="absolute top-14 left-20 text-4xl font-display text-bubblegum-pink/80">?</div>
      <div className="absolute top-24 right-24 text-3xl font-display text-lime-green/80">?</div>
      <div className="absolute bottom-20 left-28 text-3xl font-display text-bright-yellow/80">?</div>
      
      {/* Decorative elements */}
      <div className="absolute top-6 right-12 w-4 h-4 rounded-full bg-lime-green/30 animate-pulse"></div>
      <div className="absolute bottom-10 right-16 w-5 h-5 rounded-full bg-bubblegum-pink/30 animate-pulse"></div>
    </div>
  );
}

function FavoritesIllustration() {
  return (
    <div className="relative w-full h-full">
      {/* Background */}
      <div className="absolute inset-0 rounded-full bg-gray-100/50"></div>
      
      {/* Large empty heart */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 relative">
          <svg viewBox="0 0 24 24" className="w-full h-full fill-none stroke-bubblegum-pink/80 stroke-[0.5]">
            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
          </svg>
        </div>
      </div>
      
      {/* Small hearts floating around */}
      <div className="absolute top-10 left-14 w-8 h-8 text-lime-green/50 animate-pulse">
        <Heart />
      </div>
      <div className="absolute top-30 right-16 w-6 h-6 text-bright-yellow/50 animate-pulse" style={{ animationDelay: '0.3s' }}>
        <Heart />
      </div>
      <div className="absolute bottom-16 left-20 w-5 h-5 text-deep-purple/50 animate-pulse" style={{ animationDelay: '0.6s' }}>
        <Heart />
      </div>
    </div>
  );
}

function FilterIllustration() {
  return (
    <div className="relative w-full h-full">
      {/* Background */}
      <div className="absolute inset-0 rounded-full bg-gray-100/50"></div>
      
      {/* Filter funnel */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-40 h-40">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-deep-purple/70 rounded-t-lg"></div>
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 border-l-[28px] border-r-[28px] border-t-[20px] border-deep-purple/70 border-l-transparent border-r-transparent"></div>
          <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-4 h-12 bg-deep-purple/70 rounded-b-sm"></div>
        </div>
      </div>
      
      {/* Items that didn't pass through filter */}
      <div className="absolute top-6 left-12 w-8 h-8 rounded-md bg-bubblegum-pink/40 transform rotate-12"></div>
      <div className="absolute top-10 right-16 w-6 h-6 rounded-full bg-lime-green/40 transform -rotate-12"></div>
      <div className="absolute top-8 right-24 w-7 h-7 rounded-md bg-bright-yellow/40 transform rotate-45"></div>
      
      {/* Items that passed through filter */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-bubblegum-pink/70 animate-bounce"></div>
    </div>
  );
}

function HistoryIllustration() {
  return (
    <div className="relative w-full h-full">
      {/* Background */}
      <div className="absolute inset-0 rounded-full bg-gray-100/50"></div>
      
      {/* Clock face */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-40 h-40 rounded-full border-4 border-deep-purple/60 bg-white/80">
          {/* Clock center */}
          <div className="absolute inset-0 m-auto w-3 h-3 rounded-full bg-deep-purple/80"></div>
          
          {/* Hour hand */}
          <div className="absolute left-1/2 top-1/2 w-1 h-12 bg-deep-purple/80 transform -translate-x-1/2 -translate-y-1/2 origin-bottom rotate-45"></div>
          
          {/* Minute hand */}
          <div className="absolute left-1/2 top-1/2 w-1 h-16 bg-bubblegum-pink/80 transform -translate-x-1/2 -translate-y-1/2 origin-bottom rotate-[120deg]"></div>
          
          {/* Clock markers */}
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute left-1/2 top-4 w-1 h-3 bg-gray-300 transform -translate-x-1/2 origin-bottom"
              style={{ transform: `translateX(-50%) rotate(${i * 30}deg) translateY(${i % 3 === 0 ? -2 : 0}px)` }}
            />
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-6 right-10 w-5 h-5 rounded-full bg-bright-yellow/30 animate-pulse"></div>
      <div className="absolute bottom-10 left-14 w-4 h-4 rounded-full bg-lime-green/30 animate-pulse"></div>
    </div>
  );
}

function CartIllustration() {
  return (
    <div className="relative w-full h-full">
      {/* Background */}
      <div className="absolute inset-0 rounded-full bg-gray-100/50"></div>
      
      {/* Shopping basket */}
      <div className="absolute inset-x-0 bottom-10 mx-auto w-48 h-28">
        <div className="relative w-full h-full">
          {/* Basket body */}
          <div className="absolute inset-x-0 bottom-0 w-full h-24 border-2 border-deep-purple/70 bg-white/80 rounded-b-xl"></div>
          
          {/* Basket top rim */}
          <div className="absolute inset-x-0 top-4 w-full h-4 border-2 border-deep-purple/70 bg-deep-purple/20 rounded-t-xl"></div>
          
          {/* Basket handle */}
          <div className="absolute inset-x-0 top-0 mx-auto w-24 h-12 border-2 border-deep-purple/70 rounded-t-full"></div>
        </div>
      </div>
      
      {/* Empty basket indicators */}
      <div className="absolute inset-x-0 bottom-20 mx-auto text-center">
        <div className="w-16 h-px bg-gray-300 mx-auto mb-2"></div>
        <div className="w-12 h-px bg-gray-300 mx-auto"></div>
      </div>
      
      {/* Floating grocery items */}
      <div className="absolute top-10 left-14 w-8 h-8 rounded-md bg-bright-yellow/50 transform rotate-12 animate-float-slow"></div>
      <div className="absolute top-16 right-20 w-7 h-7 rounded-full bg-bubblegum-pink/50 animate-float-slow" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute top-22 left-24 w-6 h-9 rounded-lg bg-lime-green/50 transform -rotate-12 animate-float-slow" style={{ animationDelay: '1s' }}></div>
    </div>
  );
}

// Add this to your tailwind.config.js keyframes and animation
/**
 * @keyframes float-slow {
 *   0%, 100% {
 *     transform: translateY(0) rotate(0);
 *   }
 *   50% {
 *     transform: translateY(-10px) rotate(5deg);
 *   }
 * }
 * animation: {
 *   'float-slow': 'float-slow 5s ease-in-out infinite',
 * }
 */ 