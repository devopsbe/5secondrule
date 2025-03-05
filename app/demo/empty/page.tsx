import React from 'react';
import { EmptyState } from '@/components/ui/empty-state';

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
            <EmptyState
              type="generic"
              title="Nothing Here Yet"
              description="It looks like this section is empty. Add some content to get started!"
              actionLabel="Add Content"
              actionProps={{ variant: 'default' }}
              onAction={() => alert('Add content action triggered')}
            />
          </div>
          
          {/* Search Empty State */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <EmptyState
              type="search"
              title="No Results Found"
              description="We couldn't find any results matching your search. Try using different keywords or filters."
              actionLabel="Clear Search"
              actionProps={{ variant: 'secondary' }}
              onAction={() => alert('Clear search action triggered')}
            />
          </div>
          
          {/* Favorites Empty State */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <EmptyState
              type="favorites"
              title="No Favorites Yet"
              description="You haven't added any recipes to your favorites yet. Browse recipes and click the heart icon to save your favorites."
              actionLabel="Browse Recipes"
              actionProps={{ variant: 'bright' }}
              onAction={() => alert('Browse recipes action triggered')}
            />
          </div>
          
          {/* Filter Empty State */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <EmptyState
              type="filter"
              title="No Matching Recipes"
              description="Your filter combination didn't match any recipes. Try adjusting your filters to see more results."
              actionLabel="Reset Filters"
              actionProps={{ variant: 'outline' }}
              onAction={() => alert('Reset filters action triggered')}
            />
          </div>
          
          {/* History Empty State */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <EmptyState
              type="history"
              title="No Recent Activity"
              description="You haven't viewed any recipes recently. Browse our collection to see your history here."
              actionLabel="Explore Recipes"
              actionProps={{ variant: 'lime' }}
              onAction={() => alert('Explore recipes action triggered')}
            />
          </div>
          
          {/* Shopping Cart Empty State */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <EmptyState
              type="cart"
              title="Your Shopping Cart is Empty"
              description="You haven't added any ingredients to your shopping cart yet. Add ingredients from recipes to create your shopping list."
              actionLabel="Find Recipes"
              actionProps={{ variant: 'secondary', rounded: 'full' }}
              onAction={() => alert('Find recipes action triggered')}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 