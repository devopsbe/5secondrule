export default function handler(req, res) {
  const { width = 800, height = 600, text = '' } = req.query;
  
  // Generate SVG placeholder with the requested dimensions
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#f0f0f0"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" fill="#666" text-anchor="middle" dominant-baseline="middle">
        ${text || `${width}x${height}`}
      </text>
    </svg>
  `;
  
  // Set appropriate headers
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  
  // Send the SVG as the response
  res.status(200).send(svg);
} 