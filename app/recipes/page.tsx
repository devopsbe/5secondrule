import { Suspense } from "react"
import Image from "next/image"
import { RecipeCard } from "@/components/recipe-card"
import { RecipeFilters } from "@/components/recipe-filters"
import { Button } from "@/components/ui/button"
import { Search, ChefHat, ChevronLeft, ChevronRight } from "lucide-react"
import { ContentLoader } from "@/components/ui/loader"

export default function RecipesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[45vh] flex items-center justify-center">
        {/* Decorative elements */}
        <div className="absolute top-12 left-12 w-32 h-32 rounded-full bg-bright-yellow opacity-30 animate-pulse"></div>
        <div className="absolute bottom-12 right-12 w-24 h-24 rounded-full bg-bubblegum-pink opacity-20"></div>
        
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Various pastries and desserts"
            fill
            className="object-cover brightness-[0.8]"
            priority
          />
          <div className="absolute inset-0 bg-deep-purple/40 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-bubblegum-pink rounded-full flex items-center justify-center">
              <ChefHat size={30} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display text-white mb-4 transform -rotate-1">
            Delicious Recipes
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto font-light">
            Browse our collection of carefully crafted recipes for every skill level
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="search"
                placeholder="Search recipes..."
                className="w-full py-3 px-4 pl-12 rounded-full border-2 border-white/40 bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-bubblegum-pink backdrop-blur-sm transition-all focus:bg-white/20"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white" size={18} />
            </div>
          </div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0,120 C150,200 350,0 500,120 L500,150 L0,150 Z" className="fill-white"></path>
          </svg>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-72 shrink-0">
            <RecipeFilters />
          </aside>

          {/* Recipe Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-display text-deep-purple">All Recipes</h2>
              <div className="text-sm text-deep-purple/70">
                Showing <span className="font-medium">9</span> of <span className="font-medium">36</span> recipes
              </div>
            </div>
            
            <Suspense fallback={
              <ContentLoader text="Preparing delicious recipes..." />
            }>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 9 }).map((_, i) => (
                  <RecipeCard key={i} />
                ))}
              </div>
            </Suspense>

            {/* Pagination */}
            <div className="mt-16 flex justify-center">
              <nav className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  disabled
                  className="rounded-full border-deep-purple/20 hover:bg-bubblegum-pink/5 hover:text-bubblegum-pink"
                >
                  <ChevronLeft size={18} />
                </Button>
                
                <div className="flex items-center gap-1 mx-2">
                  <Button 
                    variant="outline" 
                    className="bg-bubblegum-pink text-white border-bubblegum-pink hover:bg-bubblegum-pink/90 rounded-full h-9 w-9 p-0"
                  >
                    1
                  </Button>
                  <Button 
                    variant="outline" 
                    className="text-deep-purple border-deep-purple/20 hover:bg-bubblegum-pink/5 hover:text-bubblegum-pink hover:border-bubblegum-pink rounded-full h-9 w-9 p-0"
                  >
                    2
                  </Button>
                  <Button 
                    variant="outline" 
                    className="text-deep-purple border-deep-purple/20 hover:bg-bubblegum-pink/5 hover:text-bubblegum-pink hover:border-bubblegum-pink rounded-full h-9 w-9 p-0"
                  >
                    3
                  </Button>
                  <span className="px-1 text-deep-purple/60">...</span>
                  <Button 
                    variant="outline" 
                    className="text-deep-purple border-deep-purple/20 hover:bg-bubblegum-pink/5 hover:text-bubblegum-pink hover:border-bubblegum-pink rounded-full h-9 w-9 p-0"
                  >
                    8
                  </Button>
                </div>
                
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-full border-deep-purple/20 hover:bg-bubblegum-pink/5 hover:text-bubblegum-pink hover:border-bubblegum-pink"
                >
                  <ChevronRight size={18} />
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

