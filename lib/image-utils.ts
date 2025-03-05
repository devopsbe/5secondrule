/**
 * Utility functions for image handling in the application
 */

// Generate a placeholder image URL with the specified dimensions
export function getPlaceholderImageUrl(width: number, height: number, text?: string): string {
  // For local development, use our API route
  if (process.env.NODE_ENV === 'development') {
    return `/api/placeholder?width=${width}&height=${height}${text ? `&text=${encodeURIComponent(text)}` : ''}`;
  }
  
  // For production, use an external service like placehold.co
  return `https://placehold.co/${width}x${height}/f0f0f0/666666${text ? `?text=${encodeURIComponent(text)}` : ''}`;
}

// Generate a data URL for an SVG placeholder (client-side only)
export function getPlaceholderDataUrl(width: number, height: number, text?: string): string {
  const displayText = text || `${width}x${height}`;
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Crect width='100%25' height='100%25' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial, sans-serif' font-size='24' fill='%23666' text-anchor='middle' dominant-baseline='middle'%3E${encodeURIComponent(displayText)}%3C/text%3E%3C/svg%3E`;
} 