import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRight, Calendar, User, Tag } from 'lucide-react';

export const metadata = {
  title: 'Blog | 5SecondRule',
  description: 'Food tips, cooking techniques, and culinary inspiration for quick and delicious meals.',
};

export default function BlogPage() {
  return (
    <main className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-lime-green text-deep-purple">
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-display mb-6">
              The 5Second Blog
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Food tips, cooking techniques, and culinary inspiration
              for quick and delicious meals.
            </p>
          </div>
        </div>
        
        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-20 text-white"
            fill="currentColor"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Z" />
          </svg>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-display text-deep-purple mb-10">Featured Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Featured Post */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64 md:h-80">
              <Image
                    src="/images/blog/featured-1.jpg"
                    alt="10 Kitchen Hacks to Save You Time"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-4 mb-3">
                    <span className="text-sm flex items-center text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      June 12, 2023
                    </span>
                    <span className="text-sm flex items-center text-gray-500">
                      <User size={14} className="mr-1" />
                      Alex Johnson
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    <Link href="/blog/10-kitchen-hacks" className="hover:text-bubblegum-pink transition-colors">
                      10 Kitchen Hacks to Save You Time
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Discover time-saving techniques that will revolutionize your cooking routine and help you prepare delicious meals in minutes.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/blog/10-kitchen-hacks">
                      Read More <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Featured Post */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64 md:h-80">
                  <Image
                    src="/images/blog/featured-2.jpg"
                    alt="5 One-Pot Recipes for Busy Weeknights"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex gap-4 mb-3">
                    <span className="text-sm flex items-center text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      May 28, 2023
                    </span>
                    <span className="text-sm flex items-center text-gray-500">
                      <User size={14} className="mr-1" />
                      Sam Rivera
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    <Link href="/blog/one-pot-recipes" className="hover:text-bubblegum-pink transition-colors">
                      5 One-Pot Recipes for Busy Weeknights
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    These one-pot wonders minimize cleanup while maximizing flavor, making them perfect for hectic weeknights when time is limited.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/blog/one-pot-recipes">
                      Read More <ChevronRight size={16} className="ml-1" />
                  </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Blog Posts */}
              <div className="lg:col-span-2 space-y-10">
                <h2 className="text-3xl font-display text-deep-purple mb-8">Latest Articles</h2>
                
                {blogPosts.map((post, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6 border-b pb-10 mb-10 last:border-0 last:pb-0">
                    <div className="md:w-1/3 flex-shrink-0">
                      <div className="relative h-48 w-full rounded-lg overflow-hidden">
                <Image
                          src={post.image}
                  alt={post.title}
                  fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                />
              </div>
                </div>
                    <div className="md:w-2/3">
                      <div className="flex gap-4 mb-2">
                        <span className="text-xs flex items-center text-gray-500">
                          <Calendar size={12} className="mr-1" />
                          {post.date}
                        </span>
                        <span className="text-xs flex items-center text-gray-500">
                          <User size={12} className="mr-1" />
                          {post.author}
                        </span>
              </div>
                      <h3 className="text-xl font-bold mb-2">
                        <Link href={post.slug} className="hover:text-bubblegum-pink transition-colors">
                  {post.title}
                </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 mb-4">
                        {post.categories.map((category, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-bubblegum-pink/10 text-bubblegum-pink px-2 py-1 rounded-full flex items-center"
                          >
                            <Tag size={10} className="mr-1" />
                            {category}
                          </span>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={post.slug}>
                          Read More <ChevronRight size={14} className="ml-1" />
                  </Link>
                      </Button>
                    </div>
                  </div>
                ))}

        {/* Pagination */}
                <div className="flex justify-center pt-8">
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
            </Button>
                    <Button variant="default" size="sm">
              1
            </Button>
                    <Button variant="outline" size="sm">
              2
            </Button>
                    <Button variant="outline" size="sm">
              3
            </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-10">
                {/* Categories */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-display text-deep-purple mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <Link 
                          href={`/blog/category/${category.slug}`}
                          className="flex items-center justify-between py-2 border-b last:border-0 hover:text-bubblegum-pink transition-colors"
                        >
                          <span>{category.name}</span>
                          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Popular Posts */}
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-display text-deep-purple mb-4">Popular Posts</h3>
                  <div className="space-y-4">
                    {popularPosts.map((post, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 64px, 64px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm line-clamp-2">
                            <Link href={post.slug} className="hover:text-bubblegum-pink transition-colors">
                              {post.title}
                            </Link>
                          </h4>
                          <span className="text-xs text-gray-500">{post.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Newsletter */}
                <div className="bg-bubblegum-pink/10 p-6 rounded-xl">
                  <h3 className="text-xl font-display text-deep-purple mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-sm mb-4">Get the latest recipes and cooking tips delivered straight to your inbox.</p>
                  <Button className="w-full" asChild>
                    <Link href="/newsletter">
                      Subscribe Now
                    </Link>
            </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Blog posts data
const blogPosts = [
  {
    title: "The Science Behind the Perfect 5-Minute Marinade",
    slug: "/blog/5-minute-marinade",
    author: "Alex Johnson",
    date: "June 5, 2023",
    image: "/images/blog/post-1.jpg",
    excerpt: "Learn the scientific principles behind quick marinades and how they can impart maximum flavor in minimum time for your proteins.",
    categories: ["Science", "Techniques"]
  },
  {
    title: "7 Essential Kitchen Tools for Quick Cooking",
    slug: "/blog/essential-kitchen-tools",
    author: "Jordan Taylor",
    date: "May 22, 2023",
    image: "/images/blog/post-2.jpg",
    excerpt: "Discover the must-have tools that will revolutionize your kitchen efficiency and help you prepare meals in record time.",
    categories: ["Tools", "Guides"]
  },
  {
    title: "Quick Breakfast Ideas for Busy Mornings",
    slug: "/blog/quick-breakfast-ideas",
    author: "Sam Rivera",
    date: "May 15, 2023",
    image: "/images/blog/post-3.jpg",
    excerpt: "Start your day right with these nutritious breakfast recipes that can be prepared in just 5 minutes or less.",
    categories: ["Breakfast", "Recipes"]
  },
  {
    title: "The Art of Meal Prepping: 5 Days in 1 Hour",
    slug: "/blog/meal-prepping",
    author: "Alex Johnson",
    date: "May 8, 2023",
    image: "/images/blog/post-4.jpg",
    excerpt: "Master the art of efficient meal prepping with our step-by-step guide to preparing 5 days of meals in just one hour.",
    categories: ["Meal Prep", "Guides"]
  },
  {
    title: "Fast Cooking Methods Around the World",
    slug: "/blog/fast-cooking-methods",
    author: "Jordan Taylor",
    date: "April 30, 2023",
    image: "/images/blog/post-5.jpg",
    excerpt: "Explore quick cooking techniques from different cultures and how they've perfected the art of fast yet flavorful meals.",
    categories: ["Culture", "Techniques"]
  }
];

// Categories data
const categories = [
  { name: "Recipes", slug: "recipes", count: 28 },
  { name: "Techniques", slug: "techniques", count: 16 },
  { name: "Tools", slug: "tools", count: 12 },
  { name: "Meal Prep", slug: "meal-prep", count: 9 },
  { name: "Science", slug: "science", count: 7 },
  { name: "Culture", slug: "culture", count: 5 },
  { name: "Guides", slug: "guides", count: 14 },
  { name: "Breakfast", slug: "breakfast", count: 8 }
];

// Popular posts data
const popularPosts = [
  {
    title: "15 Quick Pasta Dishes Ready in Under 10 Minutes",
    slug: "/blog/quick-pasta-dishes",
    date: "June 10, 2023",
    image: "/images/blog/popular-1.jpg"
  },
  {
    title: "The Ultimate Guide to Stir-Fry Mastery",
    slug: "/blog/stir-fry-guide",
    date: "May 25, 2023",
    image: "/images/blog/popular-2.jpg"
  },
  {
    title: "Pressure Cooker Magic: From Raw to Ready in Minutes",
    slug: "/blog/pressure-cooker",
    date: "May 18, 2023",
    image: "/images/blog/popular-3.jpg"
  },
  {
    title: "3 Essential Knife Skills Every Quick Cook Needs",
    slug: "/blog/knife-skills",
    date: "May 5, 2023",
    image: "/images/blog/popular-4.jpg"
  }
];

