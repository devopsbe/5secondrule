import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  { id: "all", name: "All" },
  { id: "bread", name: "Bread" },
  { id: "pastries", name: "Pastries" },
  { id: "cakes", name: "Cakes" },
  { id: "confections", name: "Confections" },
]

const portfolioItems = [
  {
    id: 1,
    title: "Japanese Milk Bread",
    description: "Soft, fluffy Hokkaido-style milk bread with a tender crumb and golden crust",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7418-gx0LpgVaDv0BjKsvReQ72yE5NjJW13.jpeg",
    category: "bread",
  },
  {
    id: 2,
    title: "Milk Bread Cinnamon Roll",
    description: "Tender milk bread spiral filled with cinnamon and topped with vanilla glaze",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5174-7AUTqWpEiJf9X3cWnYK0OQETq998LP.jpeg",
    category: "pastries",
  },
  {
    id: 3,
    title: "Chai Coffee Cake Ghosty",
    description: "Playful ghost-shaped chai-spiced coffee cake with a dusted sugar coating and chocolate details",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5936-VCpD1w6HKyKnWSwInTIJ8NUHQBmzNX.jpeg",
    category: "cakes",
  },
  {
    id: 4,
    title: "Caramel Pecan Chocolate Chip Scone",
    description: "Buttery scone studded with chocolate chips, drizzled with caramel and topped with pecans",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6877-tlEf3vvDsCCiaypTfSryMccaVVrzT1.jpeg",
    category: "pastries",
  },
  {
    id: 5,
    title: "Artisan Sourdough",
    description: "Naturally leavened bread with open crumb structure",
    image: "/placeholder.svg?height=800&width=800",
    category: "bread",
  },
  {
    id: 6,
    title: "Wedding Cake",
    description: "Three-tier vanilla cake with buttercream frosting",
    image: "/placeholder.svg?height=800&width=800",
    category: "cakes",
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center mb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Food photography portfolio"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display text-white mb-4 transform -rotate-1 drop-shadow-lg">
            Portfolio
          </h1>
          <p className="text-lg md:text-xl text-white mb-6 max-w-2xl mx-auto">
            A showcase of my food photography and pastry creations
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="w-full flex justify-center mb-8 bg-sky-blue/20">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-6 data-[state=active]:bg-bubblegum-pink data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioItems.map((item) => (
              <PortfolioItem key={item.id} item={item} />
            ))}
          </TabsContent>

          {categories.slice(1).map((category) => (
            <TabsContent
              key={category.id}
              value={category.id}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {portfolioItems
                .filter((item) => item.category === category.id)
                .map((item) => (
                  <PortfolioItem key={item.id} item={item} />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </main>
  )
}

function PortfolioItem({ item }: { item: (typeof portfolioItems)[0] }) {
  return (
    <div className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer">
      <Image
        src={item.image || "/placeholder.svg"}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Hover overlay with enhanced styling */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep-purple/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
        <h3 className="text-white font-display text-2xl transform -rotate-1 mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {item.title}
        </h3>
        <p className="text-bright-yellow text-sm mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
        </p>
        <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
          {item.description}
        </p>
      </div>
    </div>
  )
}

