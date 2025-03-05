"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

export default function V0IntegrationExample() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">How to Use V0.dev with This Project</h3>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => window.open('https://v0.dev', '_blank')}
          >
            Visit V0.dev
          </Button>
        </div>
        
        <p className="text-gray-600 mb-4">
          With V0.dev, you can generate beautiful UI components using AI. 
          Simply describe what you want, and get production-ready React components that work seamlessly with this project.
        </p>
        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs">1</div>
            <p className="text-sm">Generate a component at V0.dev using natural language</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs">2</div>
            <p className="text-sm">Copy the code and create a new file in your project</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded-full bg-pink-500 flex items-center justify-center text-white text-xs">3</div>
            <p className="text-sm">Import and use the component in your pages</p>
          </div>
        </div>
      </div>
      
      <div className="border border-dashed border-gray-300 p-6 rounded-lg">
        <div className="text-center p-8">
          <h3 className="text-lg font-medium mb-2">Example V0-Generated Component Will Appear Here</h3>
          <p className="text-gray-500 text-sm mb-4">
            This is a placeholder for where your V0.dev generated components will go.
          </p>
          <div className="flex justify-center">
            <Button onClick={() => alert('Replace this with your V0.dev component!')}>
              Generate with V0.dev
            </Button>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium mb-2">Example Prompt for V0.dev:</h4>
        <div className="bg-white p-3 rounded border text-sm font-mono text-gray-800">
          Create a food safety timer component with a circular progress bar, time display in minutes and seconds, start/pause/reset buttons, and a temperature selector. Use pink as the primary color to match the 5SecondRule branding.
        </div>
      </div>
    </div>
  );
} 