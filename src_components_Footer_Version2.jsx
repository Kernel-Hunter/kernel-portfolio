import React from 'react';

const Footer = () => (
  <footer className="py-12 border-t border-neutral-800 mt-10">
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <p className="text-sm text-neutral-400">
        © {new Date().getFullYear()} Karim. Crafted with imagination, precision & purpose.
      </p>
      <div className="flex flex-wrap gap-4 text-sm">
        <a href="https://github.com/Kernel-Hunter" target="_blank" rel="noreferrer" className="hover:text-cyan-400">GitHub</a>
        <a href="https://twitter.com/karim0masmoudi" target="_blank" rel="noreferrer" className="hover:text-cyan-400">Twitter</a>
        <a href="https://www.instagram.com/karim._.masmoudi" target="_blank" rel="noreferrer" className="hover:text-cyan-400">Instagram</a>
        <a href="https://www.facebook.com/kimou.mas" target="_blank" rel="noreferrer" className="hover:text-cyan-400">Facebook</a>
        <a href="https://linktr.ee/karim.masmoudi" target="_blank" rel="noreferrer" className="hover:text-cyan-400">Links</a>
        <a href="mailto:karim.masmoudi.pro@gmail.com" className="hover:text-cyan-400">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;