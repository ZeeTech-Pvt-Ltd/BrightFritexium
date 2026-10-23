'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// App Router keeps the browser scroll position across navigations, so restore
// the SPA behaviour: every route change starts at the top of the page.
export default function ScrollToTop() {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
