import Image from "next/image"
import Link from "next/link"
import { CalendarDays } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const recentPosts = [
  {
    id: 1,
    title: "The Science Behind Perfect Pastry Dough",
    excerpt: "Understanding the chemistry of butter, flour, and water can transform your pastry game.",
    date: "March 15, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "science-behind-perfect-pastry-dough",
  },
  {
    id: 2,
    title: "My Journey from Home Baker to Pastry Chef",
    excerpt: "The ups, downs, and lessons learned on my path to becoming a professional pastry chef.",
    date: "March 8, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "journey-from-home-baker-to-pastry-chef",
  },
  {
    id: 3,
    title: "Seasonal Ingredients: Spring Edition",
    excerpt: "Exploring the best spring ingredients and how to incorporate them into your baking.",
    date: "March 1, 2025",
    image: "/placeholder.svg?height=400&width=600",
    slug: "seasonal-ingredients-spring-edition",
  },
]

export function RecentPosts() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {recentPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden border-none shadow-lg">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <CardContent className="pt-6">
            <h3 className="text-xl font-display mb-2 line-clamp-2 text-deep-purple transform -rotate-1">
              <Link href={`/blog/${post.slug}`} className="hover:text-bubblegum-pink transition-colors">
                {post.title}
              </Link>
            </h3>
            <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
          </CardContent>
          <CardFooter className="border-t pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarDays size={14} className="text-warm-orange" />
              <span>{post.date}</span>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

