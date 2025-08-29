import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white shadow-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between border-b border-zinc-700 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
      
      {/* Logo/Name */}
      <div className="relative z-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2 md:mb-0 text-enhanced">
          <span className="text-white font-semibold drop-shadow-2xl filter brightness-150 contrast-200">
            Pavan Kumar
          </span>
          <span className="ml-2 text-2xl text-blue-400 animate-pulse">👨‍💻</span>
        </h1>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-10 space-x-6 text-lg font-semibold">
        <a href="#home" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 inline-block px-3 py-2 rounded-lg hover:bg-zinc-800/50 border border-transparent hover:border-blue-400/30">
          Home
        </a>
        <a href="#about" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 inline-block px-3 py-2 rounded-lg hover:bg-zinc-800/50 border border-transparent hover:border-blue-400/30">
          About
        </a>
        <a href="#education" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 inline-block px-3 py-2 rounded-lg hover:bg-zinc-800/50 border border-transparent hover:border-blue-400/30">
          Education
        </a>
        <a href="#certificates" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 inline-block px-3 py-2 rounded-lg hover:bg-zinc-800/50 border border-transparent hover:border-blue-400/30">
          Certificates
        </a>
        <a href="#projects" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 inline-block px-3 py-2 rounded-lg hover:bg-zinc-800/50 border border-transparent hover:border-blue-400/30">
          Projects
        </a>
        <a href="#contact" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 inline-block px-3 py-2 rounded-lg hover:bg-zinc-800/50 border border-transparent hover:border-blue-400/30">
          Contact
        </a>
      </nav>
      
      {/* Decorative elements */}
      <div className="absolute top-2 right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 float"></div>
      <div className="absolute bottom-2 left-4 w-6 h-6 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full opacity-30 rotate-slow"></div>
    </header>
  );
}

export default Header;
