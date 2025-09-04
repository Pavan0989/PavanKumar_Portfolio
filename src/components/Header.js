import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-white shadow-2xl p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between border-b border-zinc-700 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
      
      {/* Logo/Name and Mobile Menu Button */}
      <div className="relative z-10 flex justify-between items-center w-full md:w-auto">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-enhanced">
          <span className="text-white font-semibold drop-shadow-2xl filter brightness-150 contrast-200">
            Pavan Kumar
          </span>
          <span className="ml-2 text-xl md:text-2xl text-blue-400 animate-pulse">👨‍💻</span>
        </h1>
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-zinc-800/50 border border-zinc-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Navigation */}
      <nav className={`relative z-10 ${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-base md:text-lg font-semibold">
          <a href="#home" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 inline-block px-3 py-2 rounded-lg hover:bg-zinc-800/50 border border-transparent hover:border-blue-400/30 text-center md:text-left">
            Home
          </a>
          <a href="#about" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 inline-block px-3 py-2 rounded-lg hover:bg-zinc-800/50 border border-transparent hover:border-blue-400/30 text-center md:text-left">
            About
          </a>
          <a href="#education" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 inline-block px-3 py-2 rounded-lg hover:bg-zinc-800/50 border border-transparent hover:border-blue-400/30 text-center md:text-left">
            Education
          </a>
          <a href="#certificates" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 inline-block px-3 py-2 rounded-lg hover:bg-zinc-800/50 border border-transparent hover:border-blue-400/30 text-center md:text-left">
            Certificates
          </a>
          <a href="#projects" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 inline-block px-3 py-2 rounded-lg hover:bg-zinc-800/50 border border-transparent hover:border-blue-400/30 text-center md:text-left">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-400 transition-all duration-300 hover:scale-105 inline-block px-3 py-2 rounded-lg hover:bg-zinc-800/50 border border-transparent hover:border-blue-400/30 text-center md:text-left">
            Contact
          </a>
        </div>
      </nav>
      
      {/* Decorative elements */}
      <div className="absolute top-2 right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 float"></div>
      <div className="absolute bottom-2 left-4 w-6 h-6 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full opacity-30 rotate-slow"></div>
    </header>
  );
}

export default Header;
