import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Facebook, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden pt-16 pb-12 px-4">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-bubblegum-pink via-lime-green to-sky-blue"></div>
      <div className="absolute -top-8 right-8 w-16 h-16 rounded-full bg-bright-yellow opacity-20"></div>
      <div className="absolute top-40 left-10 w-10 h-10 rounded-full bg-bubblegum-pink opacity-10"></div>
      <div className="absolute bottom-20 right-[10%] w-14 h-14 rounded-full bg-sky-blue opacity-10"></div>
      <div className="absolute bottom-10 left-[20%] w-8 h-8 rounded-full bg-lime-green opacity-10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4 group">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-bubblegum-pink flex items-center justify-center text-white font-display text-xl mr-2 group-hover:scale-110 transition-transform">
                  5
                </div>
                <span className="text-2xl font-display text-bubblegum-pink transform -rotate-2 group-hover:-rotate-3 transition-transform">
                  5 Second Rule
                </span>
              </div>
            </Link>
            <p className="text-deep-purple/80 mb-6 leading-relaxed">
              Where pastry perfection meets culinary storytelling. Recipes, food photography, and stories from a
              professional pastry chef.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-warm-orange hover:text-bubblegum-pink transition-colors hover:scale-110 transform"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-warm-orange hover:text-bubblegum-pink transition-colors hover:scale-110 transform"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-warm-orange hover:text-bubblegum-pink transition-colors hover:scale-110 transform"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="mailto:hello@5secondrule.com"
                className="p-2 text-warm-orange hover:text-bubblegum-pink transition-colors hover:scale-110 transform"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-display mb-4 text-deep-purple">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-deep-purple/80 hover:text-bubblegum-pink transition-colors flex items-center">
                  <span className="h-1 w-1 rounded-full bg-bubblegum-pink mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-deep-purple/80 hover:text-bubblegum-pink transition-colors flex items-center">
                  <span className="h-1 w-1 rounded-full bg-lime-green mr-2"></span>
                  Recipes
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-deep-purple/80 hover:text-bubblegum-pink transition-colors flex items-center">
                  <span className="h-1 w-1 rounded-full bg-sky-blue mr-2"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-deep-purple/80 hover:text-bubblegum-pink transition-colors flex items-center">
                  <span className="h-1 w-1 rounded-full bg-warm-orange mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-deep-purple/80 hover:text-bubblegum-pink transition-colors flex items-center">
                  <span className="h-1 w-1 rounded-full bg-bright-yellow mr-2"></span>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-deep-purple/80 hover:text-bubblegum-pink transition-colors flex items-center">
                  <span className="h-1 w-1 rounded-full bg-bubblegum-pink mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Recipe Categories */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-display mb-4 text-deep-purple">Recipe Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/recipes/category/cakes"
                  className="text-deep-purple/80 hover:text-bubblegum-pink transition-colors flex items-center"
                >
                  <span className="h-1 w-1 rounded-full bg-lime-green mr-2"></span>
                  Cakes & Pastries
                </Link>
              </li>
              <li>
                <Link
                  href="/recipes/category/cookies"
                  className="text-deep-purple/80 hover:text-bubblegum-pink transition-colors flex items-center"
                >
                  <span className="h-1 w-1 rounded-full bg-warm-orange mr-2"></span>
                  Cookies & Bars
                </Link>
              </li>
              <li>
                <Link
                  href="/recipes/category/bread"
                  className="text-deep-purple/80 hover:text-bubblegum-pink transition-colors flex items-center"
                >
                  <span className="h-1 w-1 rounded-full bg-sky-blue mr-2"></span>
                  Bread & Dough
                </Link>
              </li>
              <li>
                <Link
                  href="/recipes/category/desserts"
                  className="text-deep-purple/80 hover:text-bubblegum-pink transition-colors flex items-center"
                >
                  <span className="h-1 w-1 rounded-full bg-bright-yellow mr-2"></span>
                  Desserts
                </Link>
              </li>
              <li>
                <Link
                  href="/recipes/category/seasonal"
                  className="text-deep-purple/80 hover:text-bubblegum-pink transition-colors flex items-center"
                >
                  <span className="h-1 w-1 rounded-full bg-bubblegum-pink mr-2"></span>
                  Seasonal Specials
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-display mb-4 text-deep-purple">Newsletter</h3>
            <p className="text-deep-purple/80 mb-4">
              Subscribe to receive new recipes and blog posts directly in your inbox.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-md border border-deep-purple/10 focus:outline-none focus:ring-2 focus:ring-bubblegum-pink text-deep-purple bg-white"
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-bubblegum-pink/20"></div>
              </div>
              <button
                type="submit"
                className="w-full bg-bubblegum-pink text-white px-4 py-2 rounded-md hover:bg-deep-purple transition-colors flex items-center justify-center group"
              >
                Subscribe
                <Heart size={16} className="ml-2 group-hover:scale-110 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-deep-purple/10 mt-12 pt-6 text-center text-deep-purple/60">
          <p className="flex items-center justify-center">
            © {currentYear} 5 Second Rule. All rights reserved. Made with <Heart size={14} className="mx-1 text-bubblegum-pink" /> and flour
          </p>
        </div>
      </div>
    </footer>
  )
}

