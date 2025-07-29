import React from "react";

function Header() {
  return (
    <header className="bg-zinc-900 text-white shadow-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between border-b border-zinc-800">
      <h1 className="text-3xl font-extrabold tracking-tight mb-2 md:mb-0">Pavan Kumar</h1>
      <nav className="space-x-8 text-lg font-semibold">
        <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
        <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
        <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
        <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
