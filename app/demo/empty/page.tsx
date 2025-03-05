import React from 'react';
import { EmptyStateClient } from '@/components/demo/empty-state-client';

export const metadata = {
  title: 'Empty State Illustrations - 5SecondRule',
  description: 'Custom illustrations for different empty states in the application'
};

export default function EmptyStateDemo() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 space-y-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display text-deep-purple">
            Empty State Illustrations
          </h1>
          <p className="text-xl text-gray-600">
            Custom illustrations for different empty states in the application
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Generic Empty State */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <EmptyStateClient
              type="generic"
              title="Nothing Here Yet"
              description="It looks like this section is empty. Add some content to get started!"
              actionLabel="Add Content"
              actionVariant="default"
            />
          </div>
          
          {/* Search Empty State */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <EmptyStateClient
              type="search"
              title="No Results Found"
              description="We couldn't find any results matching your search. Try using different keywords or filters."
              actionLabel="Clear Search"
              actionVariant="secondary"
            />
          </div>
          
          {/* Favorites Empty State */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <EmptyStateClient
              type="favorites"
              title="No Favorites Yet"
              description="You haven't added any recipes to your favorites yet. Browse recipes and click the heart icon to save your favorites."
              actionLabel="Browse Recipes"
              actionVariant="bright"
            />
          </div>
          
          {/* Filter Empty State */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <EmptyStateClient
              type="filter"
              title="No Matching Recipes"
              description="Your filter combination didn't match any recipes. Try adjusting your filters to see more results."
              actionLabel="Reset Filters"
              actionVariant="outline"
            />
          </div>
          
          {/* History Empty State */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <EmptyStateClient
              type="history"
              title="No Recent Activity"
              description="You haven't viewed any recipes recently. Browse our collection to see your history here."
              actionLabel="Explore Recipes"
              actionVariant="lime"
            />
          </div>
          
          {/* Shopping Cart Empty State */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <EmptyStateClient
              type="cart"
              title="Your Shopping Cart is Empty"
              description="You haven't added any ingredients to your shopping cart yet. Add ingredients from recipes to create your shopping list."
              actionLabel="Find Recipes"
              actionVariant="secondary"
              actionRounded="full"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 