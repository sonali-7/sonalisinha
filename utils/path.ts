/**
 * Get the base path for assets in production
 * This handles GitHub Pages deployment where the site is served from a subdirectory
 */
export function getBasePath(): string {
  // Client-side: detect basePath from current URL
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    
    // If we're at the root or a path that starts with the repo name, extract it
    // Examples: /sonalisinha/ or /sonalisinha/index.html
    const match = pathname.match(/^\/([^/]+)/);
    if (match) {
      const firstSegment = match[1];
      // Exclude common paths that aren't repo names
      if (firstSegment && 
          firstSegment !== 'images' && 
          firstSegment !== '_next' && 
          firstSegment !== 'index.html' && 
          firstSegment !== '404.html' &&
          !firstSegment.includes('.')) {
        return `/${firstSegment}`;
      }
    }
    
    // Fallback: check if we're on GitHub Pages by looking at the hostname
    if (window.location.hostname.includes('github.io')) {
      // Try to extract from the full path
      const segments = pathname.split('/').filter(Boolean);
      if (segments.length > 0) {
        return `/${segments[0]}`;
      }
    }
  }
  
  // Server-side or fallback: use environment variable or default
  if (typeof process !== 'undefined') {
    if (process.env.NEXT_PUBLIC_BASE_PATH) {
      return process.env.NEXT_PUBLIC_BASE_PATH;
    }
    if (process.env.NODE_ENV === 'production') {
      return '/sonalisinha';
    }
  }
  
  return '';
}

/**
 * Prepend base path to an asset path if needed
 * This ensures images work correctly on GitHub Pages with basePath
 */
export function withBasePath(path: string): string {
  if (!path) return path;
  
  // Don't modify external URLs
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('//')) {
    return path;
  }
  
  // Don't modify data URLs
  if (path.startsWith('data:')) {
    return path;
  }
  
  const basePath = getBasePath();
  
  // Only prepend if we have a basePath and the path is absolute
  if (basePath && path.startsWith('/')) {
    // Remove leading slash from basePath if path already has one to avoid double slashes
    const cleanBasePath = basePath.endsWith('/') ? basePath.slice(0, -1) : basePath;
    return `${cleanBasePath}${path}`;
  }
  
  return path;
}

