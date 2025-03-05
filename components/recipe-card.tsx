import Image from "next/image"
import Link from "next/link"
import { Clock, ChefHat, Heart, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function RecipeCard() {
  return (
    <Card className="overflow-hidden group border-none rounded-xl shadow-md hover:shadow-xl transition-all duration-300 relative bg-white">
      {/* Decorative corner badge */}
      <div className="absolute top-0 left-0 w-24 h-24 overflow-hidden z-10">
        <div className="absolute transform rotate-45 bg-bubblegum-pink text-white font-medium text-xs py-1 px-6 text-center w-36 -translate-y-4 translate-x-[-20%]">
          NEW
        </div>
      </div>
      
      {/* Image container */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=600"
          alt="Recipe"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Favorite button */}
        <div className="absolute top-3 right-3 z-10">
          <button className="p-2.5 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white hover:shadow-md transition-all transform hover:scale-105 group-hover:translate-y-0.5">
            <Heart size={18} className="text-deep-purple/70 hover:text-bubblegum-pink transition-colors" />
            <span className="sr-only">Save recipe</span>
          </button>
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <CardContent className="pt-5 px-5">
        {/* Category badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge variant="outline" className="border-lime-green text-lime-green font-medium bg-lime-green/10 hover:bg-lime-green/20 transition-colors rounded-full px-3">
            Dessert
          </Badge>
          <Badge variant="outline" className="border-warm-orange text-warm-orange font-medium bg-warm-orange/10 hover:bg-warm-orange/20 transition-colors rounded-full px-3">
            Baking
          </Badge>
        </div>
        
        {/* Title with playful rotation on hover */}
        <h3 className="text-xl font-bold mb-2 text-deep-purple font-display group-hover:text-bubblegum-pink transition-colors">
          <Link href="/recipes/chocolate-cake" className="relative inline-block group-hover:-rotate-1 transition-transform origin-left">
            Classic Chocolate Cake
          </Link>
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          A rich, moist chocolate cake with a silky ganache frosting that's perfect for any occasion.
        </p>
      </CardContent>
      
      {/* Rating stars */}
      <div className="px-5 mb-2 flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={14} 
            className={i < 4 ? "fill-bright-yellow text-bright-yellow" : "text-gray-200"} 
          />
        ))}
        <span className="text-xs text-deep-purple/60 ml-2">12 reviews</span>
      </div>
      
      <CardFooter className="border-t border-bubblegum-pink/10 pt-3 pb-4 px-5 mt-1 flex justify-between text-sm text-deep-purple/70">
        <div className="flex items-center gap-1.5">
          <div className="bg-bright-yellow/10 p-1.5 rounded-full">
            <Clock size={15} className="text-bright-yellow" />
          </div>
          <span>45 min</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="bg-bubblegum-pink/10 p-1.5 rounded-full">
            <ChefHat size={15} className="text-bubblegum-pink" />
          </div>
          <span>Beginner</span>
        </div>
      </CardFooter>
    </Card>
  )
}

