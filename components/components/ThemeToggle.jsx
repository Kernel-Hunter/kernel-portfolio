'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="px-3 py-1 rounded-md border border-neutral-700 text-xs"
      >
        …
      </button>
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="px-3 py-1 rounded-md border border-neutral-700 hover:border-cyan-400 text-xs font-medium transition
                 bg-neutral-900/40 dark:bg-neutral-800/40 backdrop-blur-sm"
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
}
