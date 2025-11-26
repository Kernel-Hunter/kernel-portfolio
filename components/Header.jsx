export default function Header() {
  return (
    <header className="py-6 flex items-center justify-between">
      <h1 className="text-lg font-semibold tracking-wide gradient-text">Karim</h1>
      <nav className="flex gap-6 text-sm">
        <a href="#projects" className="hover:text-cyan-400">Projects</a>
        <a href="#about" className="hover:text-cyan-400">About</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>
      </nav>
    </header>
  );
}