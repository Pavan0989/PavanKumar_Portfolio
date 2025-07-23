import React from "react";

function Header() {
  return (
    <header className="bg-blue-700 text-white p-4 flex flex-col md:flex-row md:items-center md:justify-between">
      <h1 className="text-2xl font-bold">Your Name</h1>
      <nav className="mt-2 md:mt-0 space-x-4">
        <a href="#home" className="hover:underline">Home</a>
        <a href="#about" className="hover:underline">About</a>
        <a href="#projects" className="hover:underline">Projects</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
