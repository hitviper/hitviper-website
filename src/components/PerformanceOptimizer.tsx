import { useEffect } from 'react';

export function PerformanceOptimizer() {
  useEffect(() => {
    // Preconnect to external domains
    const preconnectLinks = [
      'https://images.unsplash.com',
    ];

    preconnectLinks.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = url;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Cleanup
    return () => {
      const links = document.querySelectorAll('link[rel="preconnect"]');
      links.forEach((link) => {
        if (preconnectLinks.includes(link.getAttribute('href') || '')) {
          link.remove();
        }
      });
    };
  }, []);

  return null;
}
