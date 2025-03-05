"use client"

import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isMounted, setIsMounted] = useState(false)
  
  // Ensure component only runs client-side animations
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  // If not client-side yet, render children without animations
  if (!isMounted) {
    return <>{children}</>
  }
  
  // Fix for React.Children.only error - ensure AnimatePresence gets exactly one child
  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

// Removed PageTransitionEffect since it might be causing the issues 