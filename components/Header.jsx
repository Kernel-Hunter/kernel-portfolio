'use client';

import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <h1 className="text-lg font-semibold tracking-wide gradient-text">Portfolio</h1>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
