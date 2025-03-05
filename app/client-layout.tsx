'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the TransitionProvider with no SSR
const TransitionProvider = dynamic(
  () => import("@/components/transition-provider"),
  { ssr: false }
);

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  
  // Only render the TransitionProvider after client-side hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) {
    // Just return the children wrapped in a div if not mounted
    return <div className="w-full">{children}</div>;
  }
  
  // Ensure we're wrapping the TransitionProvider in a div to avoid React.Children.only errors
  return (
    <div className="contents">
      <TransitionProvider>{children}</TransitionProvider>
    </div>
  );
} 