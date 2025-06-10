'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function DynamicFavicon() {
  const pathname = usePathname();

  useEffect(() => {
    // Change favicon based on pathname
    const updateFavicon = () => {
      // Get existing favicon link or create new one
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
      }
      
      // Set favicon based on route
      if (pathname?.startsWith('/fund')) {
        link.href = '/images/apex_favicon.png';
        link.type = 'image/png';
      } else {
        link.href = '/images/ice_favicon.svg';
        link.type = 'image/svg+xml';
      }
    };

    updateFavicon();
  }, [pathname]);

  return null;
}