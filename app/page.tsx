import Image from "next/image";
import Link from "next/link";
import { FeaturedRecipe } from "@/components/featured-recipe";
import { RecipeCard } from "@/components/recipe-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Utensils, Clock, Award } from "lucide-react";
import { NewsletterSignup } from "@/components/newsletter-signup";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-bright-yellow opacity-10"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-sky-blue opacity-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-deep-purple leading-tight">
                Delicious Recipes <span className="text-bubblegum-pink block transform -rotate-2">In Just 5 Seconds</span>
              </h1>
              <p className="text-lg mb-8 text-deep-purple/80">
                Welcome to 5 Second Rule, where we share quick, easy, and mouthwatering recipes 
                that are perfect for busy home cooks and food enthusiasts alike.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-bubblegum-pink hover:bg-deep-purple text-white px-6 py-3 rounded-full transition-colors text-lg">
                  <Link href="/recipes">Explore Recipes</Link>
                </Button>
                <Button variant="outline" className="border-deep-purple text-deep-purple hover:bg-deep-purple/5 px-6 py-3 rounded-full transition-colors text-lg">
                  <Link href="/about">About Us</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="aspect-square relative rounded-full overflow-hidden border-8 border-white shadow-xl">
        <Image
                  src="/placeholder.svg?height=600&width=600" 
                  alt="Delicious food" 
                  width={600}
                  height={600}
                  className="object-cover"
          priority
        />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-5 bg-bright-yellow text-deep-purple font-display text-xl p-4 rounded-full rotate-12 shadow-lg">
                Yummy!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gradient-to-br from-sky-blue/5 to-lime-green/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display text-center mb-12 text-deep-purple">
            Why Food Lovers <span className="text-bubblegum-pink">Choose Us</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-bubblegum-pink/10 rounded-full flex items-center justify-center mb-4">
                <Utensils className="text-bubblegum-pink" size={24} />
              </div>
              <h3 className="text-xl font-display mb-3 text-deep-purple">Tested Recipes</h3>
              <p className="text-deep-purple/70">
                Every recipe is tested multiple times to ensure perfect results in your kitchen.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-lime-green/10 rounded-full flex items-center justify-center mb-4">
                <Clock className="text-lime-green" size={24} />
              </div>
              <h3 className="text-xl font-display mb-3 text-deep-purple">Quick & Easy</h3>
              <p className="text-deep-purple/70">
                Our recipes are designed to be quick and straightforward, perfect for busy schedules.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-warm-orange/10 rounded-full flex items-center justify-center mb-4">
                <Award className="text-warm-orange" size={24} />
              </div>
              <h3 className="text-xl font-display mb-3 text-deep-purple">Chef Approved</h3>
              <p className="text-deep-purple/70">
                Created by professional pastry chefs with tips to enhance your cooking skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipe */}
      <section className="py-16 px-4 bg-bright-yellow/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-display text-center mb-2 text-deep-purple">
            Featured Recipe
          </h2>
          <p className="text-center mb-10 text-deep-purple/70 max-w-2xl mx-auto">
            Try our chef's special selection, a recipe we're currently obsessed with!
          </p>
          
          <FeaturedRecipe />
        </div>
      </section>

      {/* Latest Recipes */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-display text-deep-purple">
              Latest <span className="text-bubblegum-pink">Recipes</span>
            </h2>
            <Link 
              href="/recipes" 
              className="text-bubblegum-pink hover:text-deep-purple flex items-center gap-2 transition-colors"
            >
              View all recipes <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <RecipeCard key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-bubblegum-pink/10 relative overflow-hidden">
        <div className="absolute -top-10 right-10 w-20 h-20 rounded-full bg-bubblegum-pink opacity-10"></div>
        <div className="absolute bottom-10 left-20 w-16 h-16 rounded-full bg-bubblegum-pink opacity-10"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-display mb-4 text-deep-purple">
            Join Our Sweet Community
          </h2>
          <p className="mb-8 text-deep-purple/70">
            Subscribe to our newsletter for new recipes, cooking tips, and exclusive content delivered right to your inbox.
          </p>
          
          <div className="max-w-lg mx-auto">
            <NewsletterSignup 
              variant="card" 
              title="Weekly Recipe Inspiration" 
              description="Get delicious recipes and baking tips delivered to your inbox every week."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
