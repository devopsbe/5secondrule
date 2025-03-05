import React from "react";
import { PageLoader, ContentLoader, InlineLoader, Loader } from "@/components/ui/loader";
import { ButtonDemoClient } from "@/components/demo/button-client";

export const metadata = {
  title: 'UI Components Demo - 5SecondRule',
  description: 'Explore our enhanced UI components with microinteractions'
};

export default function ButtonDemo() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display text-deep-purple">
            Interactive UI Components
          </h1>
          <p className="text-xl text-gray-600">
            Explore our enhanced buttons and loaders with microinteractions
          </p>
        </div>
        
        <ButtonDemoClient />
        
        {/* Loaders */}
        <section>
          <h2 className="text-2xl font-display text-bubblegum-pink mb-6">Custom Loaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold mb-4">Page Loaders</h3>
              <div className="h-40 flex items-center justify-center">
                <PageLoader />
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="font-semibold mb-4">Content Loaders</h3>
              <div className="h-40 flex items-center justify-center">
                <ContentLoader text="Fetching recipes..." />
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md col-span-1 md:col-span-2">
              <h3 className="font-semibold mb-4">Flower Loader Variants</h3>
              <div className="flex flex-wrap gap-6 justify-center">
                <Loader size="sm" color="bubblegum-pink" />
                <Loader size="md" color="lime-green" />
                <Loader size="lg" color="deep-purple" />
                <Loader size="md" color="bright-yellow" text="Loading..." />
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-lg shadow-md col-span-1 md:col-span-2">
              <h3 className="font-semibold mb-4">Inline Loaders</h3>
              <div className="flex flex-wrap gap-6 justify-center">
                <InlineLoader color="bubblegum-pink" />
                <InlineLoader color="deep-purple" />
                <InlineLoader color="white" className="p-2 bg-deep-purple rounded-md" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 