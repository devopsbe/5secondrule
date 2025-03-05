import Image from "next/image"
import Link from "next/link"

const portfolioItems = [
  {
    id: 1,
    title: "Japanese Milk Bread",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7418-gx0LpgVaDv0BjKsvReQ72yE5NjJW13.jpeg",
    category: "Bread",
  },
  {
    id: 2,
    title: "Milk Bread Cinnamon Roll",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5174-7AUTqWpEiJf9X3cWnYK0OQETq998LP.jpeg",
    category: "Pastries",
  },
  {
    id: 3,
    title: "Chai Coffee Cake Ghosty",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5936-VCpD1w6HKyKnWSwInTIJ8NUHQBmzNX.jpeg",
    category: "Cakes",
  },
  {
    id: 4,
    title: "Caramel Pecan Chocolate Chip Scone",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_6877-tlEf3vvDsCCiaypTfSryMccaVVrzT1.jpeg",
    category: "Pastries",
  },
]

export function PortfolioPreview() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {portfolioItems.map((item) => (
        <Link
          key={item.id}
          href={`/portfolio#${item.category.toLowerCase()}`}
          className="group relative overflow-hidden rounded-lg aspect-square"
        >
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-purple/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h3 className="text-white font-display transform -rotate-1 text-xl">{item.title}</h3>
            <p className="text-bright-yellow text-sm">{item.category}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

