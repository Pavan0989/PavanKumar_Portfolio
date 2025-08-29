import React from "react";

function Certificates() {
  return (
    <section id="certificates" className="flex flex-col items-center justify-center min-h-[70vh] py-20 px-4 fade-in">
      <div className="rounded-2xl shadow-2xl p-12 w-full max-w-5xl border border-zinc-700 glass-enhanced relative overflow-hidden">
        <div className="absolute -inset-2 rounded-3xl pointer-events-none" style={{boxShadow: '0 0 40px 5px rgba(59, 130, 246, 0.1)'}}></div>
        <h2 className="text-4xl font-bold mb-10 text-blue-100 slide-in-up z-10 relative text-enhanced">Certifications & Achievements</h2>
        
        <div className="z-10 relative">
          <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-gray-100 shadow-xl rounded-2xl p-8 flex flex-col gap-4 border border-zinc-700 hover-lift hover-glow fade-in-scale relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
            <div className="relative z-10">
              <div className="space-y-6 text-lg text-gray-200">
                {/* NPTEL Java DSA Certificate */}
                <div className="p-4 rounded-lg bg-zinc-700/50 border border-zinc-600">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-yellow-400 text-xl">🏆</span>
                    <span className="font-semibold text-white">Data Structures and Algorithms in Java</span>
                  </div>
                  <p className="text-blue-400 text-sm mb-3">Silver Medal – NPTEL Online Certification</p>
                  <a 
                    href="#" 
                    className="text-green-400 hover:text-green-300 text-sm px-3 py-1 rounded-lg border border-green-400/30 hover:border-green-400 transition-all duration-300 hover:bg-green-400/10 inline-block"
                    onClick={() => alert('Upload your Java DSA certificate PDF here')}
                  >
                    📄 View Certificate
                  </a>
                </div>

                {/* NPTEL Python Certificate */}
                <div className="p-4 rounded-lg bg-zinc-700/50 border border-zinc-600">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-green-400 text-xl">🐍</span>
                    <span className="font-semibold text-white">The Joy of Computing with Python</span>
                  </div>
                  <p className="text-blue-400 text-sm mb-3">NPTEL Online Certification</p>
                  <a 
                    href="#" 
                    className="text-green-400 hover:text-green-300 text-sm px-3 py-1 rounded-lg border border-green-400/30 hover:border-green-400 transition-all duration-300 hover:bg-green-400/10 inline-block"
                    onClick={() => alert('Upload your Python certificate PDF here')}
                  >
                    📄 View Certificate
                  </a>
                </div>

                {/* Hackathon Certificate */}
                <div className="p-4 rounded-lg bg-zinc-700/50 border border-zinc-600">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-purple-400 text-xl">🔥</span>
                    <span className="font-semibold text-white">HackIndia Spark 3 Hackathon</span>
                  </div>
                  <p className="text-blue-400 text-sm mb-3">Finalist (Goa Level)</p>
                  <a 
                    href="#" 
                    className="text-purple-400 hover:text-purple-300 text-sm px-3 py-1 rounded-lg border border-purple-400/30 hover:border-purple-400 transition-all duration-300 hover:bg-purple-400/10 inline-block"
                    onClick={() => alert('Upload your Hackathon certificate here')}
                  >
                    🏆 View Certificate
                  </a>
                </div>

                {/* CTF Competition Certificate */}
                <div className="p-4 rounded-lg bg-zinc-700/50 border border-zinc-600">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-cyan-400 text-xl">🚩</span>
                    <span className="font-semibold text-white">Technix 2025 CTF Competition</span>
                  </div>
                  <p className="text-blue-400 text-sm mb-3">2nd Place</p>
                  <a 
                    href="#" 
                    className="text-cyan-400 hover:text-cyan-300 text-sm px-3 py-1 rounded-lg border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 hover:bg-cyan-400/10 inline-block"
                    onClick={() => alert('Upload your CTF competition certificate here')}
                  >
                    🏆 View Certificate
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 float"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full opacity-30 rotate-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
