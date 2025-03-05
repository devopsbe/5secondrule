'use client';

import React from 'react';
import Image from 'next/image';

// Define props for the placeholder image
export interface PlaceholderImageProps {
  width: number;
  height: number;
  text?: string;
  className?: string;
  alt?: string;
  backgroundColor?: string;
  textColor?: string;
}

// Simple placeholder component to use instead of Next.js placeholder
export function PlaceholderImage({
  width = 800,
  height = 600,
  text,
  className = "",
  alt = "Placeholder",
  backgroundColor = "#f0f0f0",
  textColor = "#666666"
}: PlaceholderImageProps) {
  // Generate a placeholder SVG data URL
  const dataUrl = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Crect width='100%25' height='100%25' fill='${backgroundColor.replace("#", "%23")}'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='24' fill='${textColor.replace("#", "%23")}' text-anchor='middle' dominant-baseline='middle'%3E${text || `${width}x${height}`}%3C/text%3E%3C/svg%3E`;

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      <Image
        src={dataUrl}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
      />
    </div>
  );
}

// HOC to wrap an Image component with placeholder fallback
export function withPlaceholder(Component: typeof Image) {
  return function WithPlaceholder(props: any) {
    const [error, setError] = React.useState(false);

    if (error) {
      return (
        <PlaceholderImage
          width={props.width || 800}
          height={props.height || 600}
          className={props.className}
          alt={props.alt || "Image placeholder"}
        />
      );
    }

    return <Component {...props} onError={() => setError(true)} />;
  };
}

// Export a wrapped Next/Image component with placeholder fallback
export const SafeImage = withPlaceholder(Image); 