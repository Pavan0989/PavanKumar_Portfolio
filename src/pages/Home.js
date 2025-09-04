import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-[70vh] py-10 md:py-20 px-4 fade-in"
    >
      <div className="rounded-2xl shadow-2xl p-6 md:p-12 w-full max-w-5xl border border-zinc-700 glass-enhanced relative overflow-hidden">
        <div className="absolute -inset-2 rounded-3xl pointer-events-none" style={{boxShadow: '0 0 40px 5px rgba(59, 130, 246, 0.1)'}}></div>
        
        {/* Main Content Card */}
        <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-gray-100 shadow-xl rounded-2xl p-6 md:p-8 flex flex-col gap-6 border border-zinc-700 hover-lift hover-glow fade-in-scale relative overflow-hidden group mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 text-blue-100 drop-shadow-lg slide-in-up text-enhanced">Hello, I'm Pavan Kumar</h1>
          </div>
          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 float"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full opacity-30 rotate-slow"></div>
        </div>

        {/* Skills & Expertise Card */}
        <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-gray-100 shadow-xl rounded-2xl p-6 md:p-8 flex flex-col gap-4 border border-zinc-700 hover-lift hover-glow fade-in-scale relative overflow-hidden group mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-100 mb-6 slide-in-left text-enhanced text-center">Core Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-base md:text-lg text-gray-200 slide-in-right text-enhanced">
              <div className="text-center p-4 rounded-lg bg-zinc-700/50 border border-zinc-600">
                <span className="text-blue-400 text-xl md:text-2xl">⚛️</span>
                <p className="mt-2 font-semibold">Frontend</p>
                <p className="text-sm text-gray-300">React.js, HTML, CSS, JavaScript</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-zinc-700/50 border border-zinc-600">
                <span className="text-blue-400 text-xl md:text-2xl">🔧</span>
                <p className="mt-2 font-semibold">Backend</p>
                <p className="text-sm text-gray-300">Node.js, PHP, MySQL, Python</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-zinc-700/50 border border-zinc-600">
                <span className="text-blue-400 text-xl md:text-2xl">🚀</span>
                <p className="mt-2 font-semibold">DevOps</p>
                <p className="text-sm text-gray-300">Hosting, SSL, Security, Git</p>
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 float"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full opacity-30 rotate-slow"></div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center slide-in-up z-10 relative">
          <a
            href="#projects"
            className="inline-block bg-zinc-800 text-blue-400 px-6 md:px-8 py-3 md:py-4 rounded-xl border-2 border-blue-400 hover:bg-blue-400 hover:text-zinc-900 text-base md:text-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
          >
            🚀 See My Projects
          </a>
          <a
            href="#contact"
            className="inline-block bg-zinc-800 text-green-400 px-6 md:px-8 py-3 md:py-4 rounded-xl border-2 border-green-400 hover:bg-green-400 hover:text-zinc-900 text-base md:text-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
          >
            💬 Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
