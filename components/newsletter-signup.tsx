'use client';

import React, { useState, useEffect } from "react"
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  XCircle,
  Cookie
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface NewsletterSignupProps {
  title?: string
  description?: string
  className?: string
  variant?: "default" | "card" | "inline"
}

export function NewsletterSignup({ 
  title = "Join Our Recipe Newsletter", 
  description = "Get weekly recipes, baking tips, and exclusive offers straight to your inbox.",
  className = "",
  variant = "default"
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")
  const [isMounted, setIsMounted] = useState(false)
  
  // Ensure component only runs client-side
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  // If not client-side yet, render a placeholder
  if (!isMounted) {
    return <div className={className}></div>
  }
  
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Clear previous errors
    setError("")
    
    // Validate email
    if (!email) {
      setError("Please enter your email address")
      return
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      return
    }
    
    // Set loading state
    setStatus("loading")
    
    // Simulate API call
    setTimeout(() => {
      // In a real app, this would be an API call
      // For demo, we'll just set success after a delay
      setStatus("success")
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setEmail("")
        setStatus("idle")
      }, 3000)
    }, 1500)
  }
  
  // Different styles based on variant
  const getContainerStyles = () => {
    switch(variant) {
      case "card":
        return "bg-white rounded-xl shadow-lg p-6 border border-bubblegum-pink/10"
      case "inline":
        return "bg-transparent"
      default:
        return "bg-deep-purple/5 rounded-lg p-6"
    }
  }
  
  // Use try-catch to prevent rendering errors
  try {
    return (
      <div className={`${getContainerStyles()} ${className}`}>
        {variant !== "inline" && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-8 h-8 bg-bubblegum-pink rounded-full flex items-center justify-center">
                <Mail className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-display text-deep-purple">{title}</h3>
            </div>
            <p className="text-deep-purple/70 text-sm md:text-base">{description}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="relative">
          {/* Decorative elements */}
          <div className="absolute -top-5 -right-5 w-12 h-12 rounded-full bg-bright-yellow opacity-10 hidden md:block"></div>
          <div className="absolute -bottom-4 -left-3 w-8 h-8 rounded-full bg-lime-green opacity-10 hidden md:block"></div>
          
          <div className={`flex ${variant === "inline" ? "flex-row" : "flex-col sm:flex-row"} gap-3`}>
            <div className="relative flex-grow">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-deep-purple/50">
                <Mail size={18} />
              </div>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
                className={`w-full pl-10 pr-4 py-3 rounded-full border ${error ? 'border-red-500 focus:ring-red-500' : 'border-bubblegum-pink/30 focus:ring-bubblegum-pink'} 
                  focus:outline-none focus:ring-2 disabled:opacity-70 transition-all
                  placeholder:text-deep-purple/40 text-deep-purple bg-white
                  ${status === "success" ? "border-lime-green/50 focus:ring-lime-green" : ""}`}
              />
              
              {status === "success" && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-lime-green">
                  <CheckCircle2 size={18} />
                </div>
              )}
            </div>
            
            <Button 
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={`rounded-full px-6 whitespace-nowrap ${variant === "inline" ? "bg-bubblegum-pink hover:bg-bubblegum-pink/90" : "bg-deep-purple hover:bg-deep-purple/90"} text-white`}
            >
              {status === "loading" ? (
                <div className="flex items-center">
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Subscribing...</span>
                </div>
              ) : status === "success" ? (
                <div className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  <span>Subscribed!</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <Send className="mr-2 h-4 w-4" />
                  <span>Subscribe</span>
                </div>
              )}
            </Button>
          </div>
          
          {error && (
            <div className="mt-2 text-red-500 text-sm flex items-center">
              <XCircle size={14} className="mr-1" />
              {error}
            </div>
          )}
          
          {/* Privacy note for non-inline variant */}
          {variant !== "inline" && (
            <div className="mt-4 text-xs text-deep-purple/50 flex items-center">
              <Cookie size={12} className="mr-1.5" />
              <span>We respect your privacy. Unsubscribe at any time.</span>
            </div>
          )}
          
          {/* Success message */}
          {status === "success" && (
            <div className="mt-3 p-2 bg-lime-green/10 rounded text-lime-green text-sm flex items-center">
              <CheckCircle2 size={14} className="mr-1.5" />
              <span>Success! Check your inbox for a confirmation email.</span>
            </div>
          )}
        </form>
      </div>
    )
  } catch (error) {
    console.error('Error in NewsletterSignup:', error)
    return <div className={className}></div> // Return empty div on error
  }
} 