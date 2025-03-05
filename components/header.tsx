"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Search, Instagram, Twitter, Facebook } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-bubblegum-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            {/* We'll eventually replace this with the flower logo */}
            <div className="mr-2 w-10 h-10 relative hidden sm:block">
              <div className="w-10 h-10 rounded-full bg-bubblegum-pink flex items-center justify-center text-white font-display text-xl group-hover:scale-110 transition-transform">
                5
              </div>
            </div>
            <span className="text-2xl md:text-3xl font-display text-bubblegum-pink transform -rotate-2 group-hover:-rotate-3 transition-transform">
              5 Second Rule
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-deep-purple hover:text-bubblegum-pink transition-colors font-medium">
              Home
            </Link>
            <Link href="/recipes" className="text-deep-purple hover:text-bubblegum-pink transition-colors font-medium">
              Recipes
            </Link>
            <Link href="/portfolio" className="text-deep-purple hover:text-bubblegum-pink transition-colors font-medium">
              Portfolio
            </Link>
            <Link href="/blog" className="text-deep-purple hover:text-bubblegum-pink transition-colors font-medium">
              Blog
            </Link>
            <Link href="/about" className="text-deep-purple hover:text-bubblegum-pink transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-deep-purple hover:text-bubblegum-pink transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-warm-orange hover:text-bubblegum-pink transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            {/* Social Media Icons */}
            <a href="https://instagram.com" className="p-2 text-warm-orange hover:text-bubblegum-pink transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" className="p-2 text-warm-orange hover:text-bubblegum-pink transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://facebook.com" className="p-2 text-warm-orange hover:text-bubblegum-pink transition-colors">
              <Facebook size={20} />
            </a>
            
            <Button className="bg-bubblegum-pink hover:bg-deep-purple text-white transition-colors">Subscribe</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-foreground hover:text-bubblegum-pink transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground hover:text-bubblegum-pink transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-t py-4 px-4 bg-background">
          <div className="max-w-3xl mx-auto">
            <form className="flex items-center">
              <input
                type="search"
                placeholder="Search recipes, blog posts..."
                className="flex-1 py-2 px-4 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-bubblegum-pink"
              />
              <Button type="submit" className="rounded-l-none bg-bubblegum-pink hover:bg-bubblegum-pink/90">
                <Search size={18} className="mr-2" /> Search
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col py-4 px-4 bg-background">
            <Link
              href="/"
              className="py-3 px-4 hover:bg-muted rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/recipes"
              className="py-3 px-4 hover:bg-muted rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Recipes
            </Link>
            <Link
              href="/portfolio"
              className="py-3 px-4 hover:bg-muted rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/blog"
              className="py-3 px-4 hover:bg-muted rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="py-3 px-4 hover:bg-muted rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="py-3 px-4 hover:bg-muted rounded-md font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex space-x-4 mt-4 px-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground hover:text-bubblegum-pink transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground hover:text-bubblegum-pink transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-foreground hover:text-bubblegum-pink transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

