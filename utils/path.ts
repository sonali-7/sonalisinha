/**
 * Get the base path for assets in production
 * This handles GitHub Pages deployment where the site is served from a subdirectory
 */
export function getBasePath(): string {
  // Client-side: detect basePath from current URL
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    // Extract repository name from pathname (e.g., /sonalisinha/...)
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length > 0 && parts[0] !== 'images' && parts[0] !== '_next') {
      // Check if this looks like a GitHub Pages repo path
      const repoName = parts[0];
      // Common GitHub Pages patterns: repo name, not common paths
      if (repoName && !['index.html', '404.html'].includes(repoName)) {
        return `/${repoName}`;
      }
    }
  }
  
  // Server-side or fallback: use environment variable or default
  if (typeof process !== 'undefined' && process.env.NODE_ENV === 'production') {
    return process.env.NEXT_PUBLIC_BASE_PATH || '/sonalisinha';
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
    return `${basePath}${path}`;
  }
  
  return path;
}

