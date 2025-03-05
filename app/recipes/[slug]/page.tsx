import Image from "next/image"
import Link from "next/link"
import { 
  Clock, 
  ChefHat, 
  Users, 
  Printer, 
  Share2, 
  Heart, 
  Star, 
  ChevronLeft,
  Award,
  Flame,
  AlarmClock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { RecipeTimer } from "@/components/recipe-timer"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { SocialShare } from "@/components/social-share"
import { PageLoader } from "@/components/ui/loader"

// This would normally be fetched from a database or API
const recipeData = {
  title: "Classic Chocolate Cake",
  slug: "classic-chocolate-cake",
  description: "A rich, moist chocolate cake with a silky ganache frosting that's perfect for any occasion. This recipe has been perfected over years of testing to ensure the perfect texture and flavor balance.",
  image: "/placeholder.svg?height=800&width=1200",
  prepTime: 20,
  cookTime: 35,
  totalTime: 55,
  servings: 8,
  difficulty: "Beginner",
  rating: 4.7,
  reviews: 42,
  author: "Jane Doe",
  publishDate: "February 15, 2025",
  categories: ["Dessert", "Baking", "Chocolate"],
  ingredients: [
    "2 cups all-purpose flour",
    "2 cups granulated sugar",
    "3/4 cup unsweetened cocoa powder",
    "2 teaspoons baking soda",
    "1 teaspoon baking powder",
    "1 teaspoon salt",
    "2 large eggs",
    "1 cup buttermilk",
    "1/2 cup vegetable oil",
    "2 teaspoons vanilla extract",
    "1 cup hot coffee",
  ],
  instructions: [
    "Preheat the oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.",
    "In a large bowl, whisk together the flour, sugar, cocoa powder, baking soda, baking powder, and salt.",
    "Add the eggs, buttermilk, oil, and vanilla extract. Beat with an electric mixer on medium speed for about 2 minutes.",
    "Stir in the hot coffee by hand. The batter will be thin, but that's normal.",
    "Pour the batter evenly into the prepared pans.",
    "Bake for 30-35 minutes, or until a toothpick inserted into the center comes out clean.",
    "Allow the cakes to cool in the pans for 10 minutes, then remove from pans and cool completely on wire racks.",
    "Once cooled, frost with your favorite chocolate frosting.",
  ],
  tips: [
    "For extra richness, use Dutch-process cocoa powder.",
    "The coffee enhances the chocolate flavor without making the cake taste like coffee.",
    "Make sure all ingredients are at room temperature for the best results.",
    "If you don't have buttermilk, you can make a substitute by adding 1 tablespoon of lemon juice or vinegar to 1 cup of milk and letting it sit for 5 minutes.",
  ],
  nutrition: {
    calories: 420,
    fat: 18,
    carbs: 64,
    protein: 5,
    sugar: 42,
  }
}

export default function RecipeDetailPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the recipe data based on the slug
  const recipe = recipeData
  
  // In a real app, this would be a loading state based on data fetching
  const isLoading = false
  
  if (isLoading) {
    return <PageLoader />
  }
  
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-deep-purple/40 mix-blend-multiply"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-12 left-12 w-24 h-24 rounded-full bg-bright-yellow opacity-20 animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 rounded-full bg-bubblegum-pink opacity-20"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Link 
            href="/recipes" 
            className="inline-flex items-center text-white mb-6 hover:text-bubblegum-pink transition-colors"
          >
            <ChevronLeft size={16} className="mr-1" />
            Back to Recipes
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-display text-white mb-4 transform -rotate-1">
            {recipe.title}
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            {recipe.categories.map((category, index) => (
              <Badge 
                key={index} 
                className="bg-bubblegum-pink/90 hover:bg-bubblegum-pink text-white border-none rounded-full px-3"
              >
                {category}
              </Badge>
            ))}
          </div>
          
          <div className="flex justify-center items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={18} 
                className={i < Math.floor(recipe.rating) ? "fill-bright-yellow text-bright-yellow" : "text-white/50"} 
              />
            ))}
            <span className="text-white ml-2">{recipe.rating} ({recipe.reviews} reviews)</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Recipe overview */}
            <div className="p-6 bg-white rounded-xl shadow-md mb-8">
              <h2 className="text-2xl font-display text-deep-purple mb-4">About This Recipe</h2>
              <p className="text-deep-purple/80 mb-6">{recipe.description}</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 rounded-lg bg-bright-yellow/10">
                  <Clock size={20} className="mx-auto mb-1 text-bright-yellow" />
                  <span className="block text-sm text-deep-purple/70">Prep Time</span>
                  <span className="block font-medium text-deep-purple">{recipe.prepTime} min</span>
                </div>
                <div className="text-center p-3 rounded-lg bg-lime-green/10">
                  <Flame size={20} className="mx-auto mb-1 text-lime-green" />
                  <span className="block text-sm text-deep-purple/70">Cook Time</span>
                  <span className="block font-medium text-deep-purple">{recipe.cookTime} min</span>
                </div>
                <div className="text-center p-3 rounded-lg bg-bubblegum-pink/10">
                  <AlarmClock size={20} className="mx-auto mb-1 text-bubblegum-pink" />
                  <span className="block text-sm text-deep-purple/70">Total Time</span>
                  <span className="block font-medium text-deep-purple">{recipe.totalTime} min</span>
                </div>
                <div className="text-center p-3 rounded-lg bg-deep-purple/10">
                  <Users size={20} className="mx-auto mb-1 text-deep-purple" />
                  <span className="block text-sm text-deep-purple/70">Servings</span>
                  <span className="block font-medium text-deep-purple">{recipe.servings}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center sm:justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Button size="sm" className="rounded-full bg-bubblegum-pink hover:bg-bubblegum-pink/90">
                    <Heart size={16} className="mr-1" />
                    Save Recipe
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full border-deep-purple/30 text-deep-purple hover:bg-deep-purple/5">
                    <Printer size={16} className="mr-1" />
                    Print
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <SocialShare 
                    variant="icon-only" 
                    title={`${recipe.title} | 5secondrule Recipe`}
                    description={`Try this delicious ${recipe.title} recipe from 5secondrule.`}
                    hashtags={["recipe", "5secondrule", "baking"]}
                  />
                </div>
              </div>
            </div>
            
            {/* Ingredients */}
            <div className="mb-8">
              <h2 className="text-2xl font-display text-deep-purple mb-4 flex items-center">
                <span className="relative">
                  Ingredients
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-bubblegum-pink/30 -z-10 transform translate-y-1"></span>
                </span>
              </h2>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <ul className="space-y-3">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-bubblegum-pink mr-3 mt-0.5"></div>
                      <span className="text-deep-purple/90">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Instructions */}
            <div className="mb-8">
              <h2 className="text-2xl font-display text-deep-purple mb-4 flex items-center">
                <span className="relative">
                  Instructions
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-lime-green/30 -z-10 transform translate-y-1"></span>
                </span>
              </h2>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <ol className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-lime-green/20 text-lime-green font-bold flex items-center justify-center mr-4 mt-0.5">
                        {index + 1}
                      </div>
                      <div className="text-deep-purple/90">{instruction}</div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            
            {/* Tips */}
            <div>
              <h2 className="text-2xl font-display text-deep-purple mb-4 flex items-center">
                <span className="relative">
                  Chef's Tips
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-bright-yellow/30 -z-10 transform translate-y-1"></span>
                </span>
              </h2>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="bg-bright-yellow/10 p-4 rounded-lg border-l-4 border-bright-yellow mb-4">
                  <div className="flex items-center mb-2">
                    <ChefHat size={18} className="text-bright-yellow mr-2" />
                    <span className="font-medium text-deep-purple">Pro Tips</span>
                  </div>
                  <ul className="space-y-3 pl-6 list-disc marker:text-bright-yellow">
                    {recipe.tips.map((tip, index) => (
                      <li key={index} className="text-deep-purple/80">{tip}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Share recipe */}
                <div className="mt-8">
                  <h3 className="text-lg font-display text-deep-purple mb-3">Share this recipe</h3>
                  <SocialShare 
                    variant="full"
                    title={`${recipe.title} | 5secondrule Recipe`}
                    description={`Try this delicious ${recipe.title} recipe from 5secondrule.`}
                    hashtags={["recipe", "5secondrule", "baking"]}
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            {/* Sidebar */}
            <div className="sticky top-24">
              {/* Author info */}
              <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-bubblegum-pink/20 flex items-center justify-center mr-3">
                    <ChefHat size={24} className="text-bubblegum-pink" />
                  </div>
                  <div>
                    <span className="block text-sm text-deep-purple/70">Recipe by</span>
                    <span className="font-medium text-deep-purple">{recipe.author}</span>
                  </div>
                </div>
                <div className="text-sm text-deep-purple/70">
                  <p>Published on {recipe.publishDate}</p>
                </div>
              </div>
              
              {/* Difficulty level */}
              <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <h3 className="font-medium text-deep-purple mb-3">Difficulty Level</h3>
                <div className="flex items-center">
                  <Award size={18} className="text-bubblegum-pink mr-2" />
                  <div>
                    <div className="font-medium text-deep-purple">{recipe.difficulty}</div>
                    <div className="text-sm text-deep-purple/70">Perfect for beginners</div>
                  </div>
                </div>
              </div>
              
              {/* Nutrition info */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-medium text-deep-purple mb-3">Nutrition Information</h3>
                <div className="space-y-2">
                  <div className="flex justify-between py-1 border-b border-deep-purple/10">
                    <span className="text-deep-purple/70">Calories</span>
                    <span className="font-medium text-deep-purple">{recipe.nutrition.calories} kcal</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-deep-purple/10">
                    <span className="text-deep-purple/70">Fat</span>
                    <span className="font-medium text-deep-purple">{recipe.nutrition.fat}g</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-deep-purple/10">
                    <span className="text-deep-purple/70">Carbs</span>
                    <span className="font-medium text-deep-purple">{recipe.nutrition.carbs}g</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-deep-purple/10">
                    <span className="text-deep-purple/70">Protein</span>
                    <span className="font-medium text-deep-purple">{recipe.nutrition.protein}g</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-deep-purple/70">Sugar</span>
                    <span className="font-medium text-deep-purple">{recipe.nutrition.sugar}g</span>
                  </div>
                </div>
              </div>
              
              {/* Recipe timer */}
              <div className="mt-6">
                <RecipeTimer 
                  label="Baking Timer" 
                  minutes={recipe.cookTime} 
                  className="shadow-lg"
                  onComplete={() => {
                    // This would show a notification in a real app
                    console.log('Timer completed!')
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related recipes section - could be expanded in the future */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-display text-deep-purple mb-8 text-center">
            You Might Also Like
          </h2>
          {/* Related recipes would go here */}
          
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-2xl font-display text-deep-purple mb-4 text-center">Never Miss a Recipe</h3>
              <NewsletterSignup variant="inline" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 