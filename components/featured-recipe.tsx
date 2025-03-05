import Image from "next/image"
import Link from "next/link"
import { Clock, ChefHat, Share2, BookOpen } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function FeaturedRecipe() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center relative">
      {/* Decorative elements */}
      <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-bubblegum-pink opacity-10 hidden md:block"></div>
      <div className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-lime-green opacity-10 hidden md:block"></div>
      
      <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl transform hover:-rotate-1 transition-transform duration-500 group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
        <Image
          src="/placeholder.svg?height=800&width=800"
          alt="Chocolate Soufflé"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-white/90 border-none text-bubblegum-pink font-medium">
              45 min
            </Badge>
            <Badge className="bg-bubblegum-pink text-white border-none">
              Dessert
            </Badge>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute -top-6 -right-3 rotate-12 hidden md:block">
          <Badge className="bg-bright-yellow text-deep-purple border-none font-display text-lg px-4 py-2">
            Featured
          </Badge>
        </div>
        
        <div className="space-y-6">
          <div className="flex gap-2 mb-3 md:hidden">
            <Badge variant="outline" className="border-bubblegum-pink text-bubblegum-pink">
              Featured
            </Badge>
            <Badge className="bg-lime-green text-foreground">Dessert</Badge>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-display mb-1 text-deep-purple transform -rotate-1">
            Perfect Chocolate Soufflé
          </h3>
          
          <div className="w-20 h-1 bg-bubblegum-pink rounded-full"></div>
          
          <p className="text-deep-purple/70 text-lg leading-relaxed">
            Master the art of creating light, airy chocolate soufflés with this foolproof recipe. 
            Learn the techniques to achieve that perfect rise every time.
          </p>

          <div className="flex flex-wrap gap-6 mb-2">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-warm-orange" />
              <span className="text-deep-purple/80">45 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <ChefHat size={18} className="text-warm-orange" />
              <span className="text-deep-purple/80">Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-warm-orange" />
              <span className="text-deep-purple/80">12 Ingredients</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button className="bg-bubblegum-pink hover:bg-deep-purple text-white font-medium px-6 rounded-full transition-all transform hover:scale-105">
              <Link href="/recipes/perfect-chocolate-souffle">View Recipe</Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-bubblegum-pink text-bubblegum-pink hover:bg-bubblegum-pink/10 rounded-full transition-all transform hover:scale-105"
            >
              <Share2 size={18} />
              <span className="sr-only">Share recipe</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

