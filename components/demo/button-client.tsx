"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Send, 
  Bookmark, 
  Timer, 
  ChevronRight,
  Loader2,
  ThumbsUp
} from "lucide-react";

export function ButtonDemoClient() {
  return (
    <>
      {/* Button Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-display text-bubblegum-pink mb-6">Button Variants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Color Variants</h3>
            <div className="flex flex-wrap gap-3">
              <Button variant="default">Default Pink</Button>
              <Button variant="secondary">Secondary Purple</Button>
              <Button variant="bright">Bright Yellow</Button>
              <Button variant="lime">Lime Green</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Size Variants</h3>
            <div className="flex flex-wrap gap-3 items-center">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
              <Button size="icon" variant="default"><Heart /></Button>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Rounded Variants</h3>
            <div className="flex flex-wrap gap-3">
              <Button rounded="default">Default Rounded</Button>
              <Button rounded="full">Fully Rounded</Button>
              <Button rounded="none">No Rounding</Button>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Animation Variants</h3>
            <div className="flex flex-wrap gap-3">
              <Button animation="none">No Animation</Button>
              <Button animation="pulse">Pulse Animation</Button>
              <Button animation="bounce">Bounce Animation</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Advanced Button Features */}
      <section className="mb-16">
        <h2 className="text-2xl font-display text-bubblegum-pink mb-6">Advanced Button Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Icons & Layout</h3>
            <div className="flex flex-wrap gap-3">
              <Button leftIcon={<Heart />}>Left Icon</Button>
              <Button rightIcon={<ChevronRight />}>Right Icon</Button>
              <Button leftIcon={<Bookmark />} rightIcon={<ChevronRight />}>Both Icons</Button>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Loading States</h3>
            <div className="flex flex-wrap gap-3">
              <Button isLoading>Loading Default</Button>
              <Button variant="secondary" isLoading>Loading Purple</Button>
              <Button variant="bright" isLoading>Loading Yellow</Button>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Combined Features</h3>
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="secondary" 
                size="lg" 
                rounded="full"
                leftIcon={<Send />}
                onClick={() => console.log("Send message clicked")}
              >
                Send Message
              </Button>
              <Button 
                variant="bright" 
                size="lg" 
                leftIcon={<Timer />}
                onClick={() => console.log("Start timer clicked")}
              >
                Start Timer
              </Button>
              <Button 
                variant="lime" 
                size="lg" 
                rounded="full"
                rightIcon={<ThumbsUp />}
                onClick={() => console.log("Approve clicked")}
              >
                Approve
              </Button>
            </div>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-semibold mb-4">Disabled State</h3>
            <div className="flex flex-wrap gap-3">
              <Button disabled>Disabled Button</Button>
              <Button variant="secondary" disabled>Disabled Purple</Button>
              <Button variant="bright" disabled leftIcon={<Loader2 />}>Disabled with Icon</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 