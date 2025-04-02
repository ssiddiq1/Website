'use client';

import { useEffect, useState } from 'react';
import Navigation from './Navigation';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  
  // This ensures the component only renders client-side to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="relative">
      <Navigation />
      <div className="absolute inset-0 bg-grid-white/[0.02] dark:bg-grid-black/[0.02]" />
    </header>
  );
}
