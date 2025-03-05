'use client';

import React, { useState } from "react"
import { 
  Share2, 
  Twitter, 
  Facebook, 
  Mail, 
  Instagram, 
  Link as LinkIcon, 
  Copy, 
  Check
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface SocialShareProps {
  url?: string
  title?: string
  description?: string
  image?: string
  hashtags?: string[]
  className?: string
  variant?: "icon-only" | "full" | "compact"
}

export function SocialShare({
  url = typeof window !== "undefined" ? window.location.href : "",
  title = "Check out this amazing recipe!",
  description = "I found this delicious recipe I thought you might like.",
  image = "",
  hashtags = ["5secondrule", "recipe", "food"],
  className = "",
  variant = "compact"
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  
  // Encode parameters for share URLs
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description)
  const encodedHashtags = hashtags.join(",")
  
  // Share URLs
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}&hashtags=${encodedHashtags}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
  const emailUrl = `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`
  
  // Open share dialog
  const openShareWindow = (url: string) => {
    window.open(url, "_blank", "width=600,height=400,resizable=yes")
  }
  
  // Copy URL to clipboard
  const copyToClipboard = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }
  }
  
  // Icon-only variant
  if (variant === "icon-only") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className={`rounded-full border-bubblegum-pink text-bubblegum-pink hover:bg-bubblegum-pink/10 ${className}`}
          >
            <Share2 size={16} />
            <span className="sr-only">Share</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="rounded-xl border-bubblegum-pink/20 p-2">
          <DropdownMenuItem 
            className="flex items-center gap-2 p-2 cursor-pointer rounded-lg hover:bg-bubblegum-pink/10"
            onClick={() => openShareWindow(twitterUrl)}
          >
            <Twitter size={16} className="text-[#1DA1F2]" />
            <span>Twitter</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center gap-2 p-2 cursor-pointer rounded-lg hover:bg-bubblegum-pink/10"
            onClick={() => openShareWindow(facebookUrl)}
          >
            <Facebook size={16} className="text-[#4267B2]" />
            <span>Facebook</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center gap-2 p-2 cursor-pointer rounded-lg hover:bg-bubblegum-pink/10"
            onClick={() => window.location.href = emailUrl}
          >
            <Mail size={16} className="text-deep-purple" />
            <span>Email</span>
          </DropdownMenuItem>
          <DropdownMenuItem 
            className="flex items-center gap-2 p-2 cursor-pointer rounded-lg hover:bg-bubblegum-pink/10"
            onClick={copyToClipboard}
          >
            {copied ? (
              <Check size={16} className="text-lime-green" />
            ) : (
              <Copy size={16} className="text-deep-purple" />
            )}
            <span>{copied ? "Copied!" : "Copy Link"}</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  
  // Full variant
  if (variant === "full") {
    return (
      <div className={`p-4 bg-bubblegum-pink/5 rounded-xl ${className}`}>
        <div className="flex items-center gap-2 mb-3">
          <Share2 size={18} className="text-bubblegum-pink" />
          <h3 className="font-medium text-deep-purple">Share this recipe</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <Button
            variant="outline"
            className="rounded-lg border-[#1DA1F2]/30 hover:bg-[#1DA1F2]/10 text-deep-purple hover:text-[#1DA1F2] flex gap-2 items-center justify-center"
            onClick={() => openShareWindow(twitterUrl)}
          >
            <Twitter size={16} />
            <span>Twitter</span>
          </Button>
          <Button
            variant="outline"
            className="rounded-lg border-[#4267B2]/30 hover:bg-[#4267B2]/10 text-deep-purple hover:text-[#4267B2] flex gap-2 items-center justify-center"
            onClick={() => openShareWindow(facebookUrl)}
          >
            <Facebook size={16} />
            <span>Facebook</span>
          </Button>
          <Button
            variant="outline"
            className="rounded-lg border-[#E1306C]/30 hover:bg-[#E1306C]/10 text-deep-purple hover:text-[#E1306C] flex gap-2 items-center justify-center"
            onClick={() => window.alert("Instagram share would open here")}
          >
            <Instagram size={16} />
            <span>Instagram</span>
          </Button>
          <Button
            variant="outline"
            className="rounded-lg border-deep-purple/30 hover:bg-deep-purple/10 text-deep-purple flex gap-2 items-center justify-center"
            onClick={() => window.location.href = emailUrl}
          >
            <Mail size={16} />
            <span>Email</span>
          </Button>
        </div>
        <div className="mt-3 relative">
          <input
            type="text"
            value={url}
            readOnly
            className="w-full rounded-lg border border-bubblegum-pink/20 bg-white py-2 pl-3 pr-16 text-sm text-deep-purple"
          />
          <Button
            variant="ghost"
            size="sm"
            className={`absolute right-1 top-1/2 -translate-y-1/2 h-7 text-xs rounded-md ${copied ? 'text-lime-green' : 'text-deep-purple'}`}
            onClick={copyToClipboard}
          >
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </div>
    )
  }
  
  // Compact variant (default)
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        className="rounded-full border-bubblegum-pink/30 text-bubblegum-pink hover:bg-bubblegum-pink/10 flex gap-1.5 items-center"
        onClick={() => openShareWindow(twitterUrl)}
      >
        <Twitter size={14} />
        <span className="text-sm">Tweet</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="rounded-full border-bubblegum-pink/30 text-bubblegum-pink hover:bg-bubblegum-pink/10 flex gap-1.5 items-center"
        onClick={() => openShareWindow(facebookUrl)}
      >
        <Facebook size={14} />
        <span className="text-sm">Share</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className="rounded-full border-bubblegum-pink/30 text-bubblegum-pink hover:bg-bubblegum-pink/10 flex gap-1.5 items-center"
        onClick={() => window.location.href = emailUrl}
      >
        <Mail size={14} />
        <span className="text-sm">Email</span>
      </Button>
      <Button
        variant="outline"
        size="sm"
        className={`rounded-full border-bubblegum-pink/30 ${copied ? 'text-lime-green' : 'text-bubblegum-pink'} hover:bg-bubblegum-pink/10 flex gap-1.5 items-center`}
        onClick={copyToClipboard}
      >
        {copied ? (
          <>
            <Check size={14} />
            <span className="text-sm">Copied</span>
          </>
        ) : (
          <>
            <LinkIcon size={14} />
            <span className="text-sm">Copy</span>
          </>
        )}
      </Button>
    </div>
  )
} 