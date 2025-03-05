import React from 'react'
import { cn } from '@/lib/utils'

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'bubblegum-pink' | 'lime-green' | 'deep-purple' | 'bright-yellow'
  text?: string
  className?: string
}

export function Loader({ 
  size = 'md', 
  color = 'bubblegum-pink',
  text,
  className 
}: LoaderProps) {
  // Size mappings
  const sizeMap = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
  }
  
  // Color mappings for SVG paths
  const colorMap = {
    'bubblegum-pink': 'fill-bubblegum-pink',
    'lime-green': 'fill-lime-green',
    'deep-purple': 'fill-deep-purple',
    'bright-yellow': 'fill-bright-yellow'
  }
  
  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      {/* Flower loader SVG with spin animation */}
      <div className={cn(
        'relative animate-spin origin-center', 
        sizeMap[size]
      )}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-full h-full"
        >
          {/* Flower petals */}
          <path
            className={cn(colorMap[color], 'opacity-90')}
            d="M50 10 C60 25 75 25 85 15 C90 30 80 45 65 50 C80 55 90 70 85 85 C70 80 55 90 50 100 C45 90 30 80 15 85 C10 70 20 55 35 50 C20 45 10 30 15 15 C30 20 45 10 50 10Z"
          />
          {/* Flower center */}
          <circle
            cx="50"
            cy="50"
            r="12"
            className={cn(
              {
                'fill-white': color === 'deep-purple',
                'fill-deep-purple': color !== 'deep-purple'
              },
              'opacity-90'
            )}
          />
        </svg>
      </div>
      
      {text && (
        <p className={cn(
          'mt-3 font-medium', 
          `text-${color}`,
          { 'text-sm': size === 'sm', 'text-base': size === 'md', 'text-lg': size === 'lg' }
        )}>
          {text}
        </p>
      )}
    </div>
  )
}

export function PageLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm z-50">
      <div className="relative">
        <Loader 
          size="lg" 
          color="bubblegum-pink" 
          text="Loading yummy content..." 
        />
        <div className="absolute -top-10 -right-10 w-16 h-16 rounded-full bg-bright-yellow opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-8 w-12 h-12 rounded-full bg-lime-green opacity-10 animate-pulse"></div>
      </div>
    </div>
  )
}

// Multiple loaders for showing recipe cards, comments loading, etc.
export function ContentLoader({ 
  text = "Loading...",
  className
}: { 
  text?: string,
  className?: string 
}) {
  return (
    <div className={cn("w-full py-8 flex flex-col items-center justify-center", className)}>
      <Loader size="md" color="bubblegum-pink" text={text} />
    </div>
  )
}

// Inline loader for buttons or small UI elements
export function InlineLoader({ 
  color = 'white',
  className
}: { 
  color?: 'white' | 'bubblegum-pink' | 'deep-purple',
  className?: string 
}) {
  return (
    <div className={cn("flex items-center", className)}>
      <div className={cn(
        "animate-spin h-4 w-4 border-2 rounded-full border-t-transparent",
        {
          "border-white": color === "white",
          "border-bubblegum-pink": color === "bubblegum-pink",
          "border-deep-purple": color === "deep-purple"
        }
      )}></div>
    </div>
  )
} 