import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-[70vh] py-20 px-4 fade-in"
    >
      <div className="rounded-2xl shadow-2xl p-12 w-full max-w-3xl text-center border border-zinc-800 bg-gradient-to-br from-zinc-900 via-[#1a1333] to-[#2d1a4d] relative overflow-hidden">
        <div className="absolute -inset-2 rounded-3xl pointer-events-none" style={{boxShadow: '0 0 80px 10px #7c3aed55, 0 0 120px 40px #2563eb22'}}></div>
        <h1 className="text-6xl font-extrabold mb-6 text-white drop-shadow-lg slide-in-up z-10 relative">Hello, I'm Pavan Kumar</h1>
        <p className="text-2xl text-gray-200 mb-10 max-w-2xl mx-auto slide-in-up z-10 relative">
          Motivated Full-Stack Developer with hands-on experience in React.js,
          Node.js, PHP, and MySQL. Skilled at building secure, scalable & user-friendly
          web applications, from front-end UI to back-end systems. Passionate about
          delivering responsive, intuitive interfaces with strong problem-solving focus.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center slide-in-up z-10 relative">
          <a
            href="#projects"
            className="bg-blue-600 text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 font-bold"
          >
            See My Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-blue-400 text-blue-400 text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-blue-400 hover:text-zinc-900 transition-all duration-300 transform hover:scale-105 font-bold"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
