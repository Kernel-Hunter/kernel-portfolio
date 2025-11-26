import ThemeToggle from './ThemeToggle.jsx';

export default function Header() {
  return (
    <header className="py-6 flex items-center justify-between">
      <h1 className="text-lg font-semibold tracking-wide gradient-text">Karim</h1>
      <nav className="flex items-center gap-6 text-sm">
        <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
        <a href="#about" className="hover:text-cyan-400 transition">About</a>
        <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
