import React from "react";

function Education() {
  return (
    <section id="education" className="flex flex-col items-center justify-center min-h-[70vh] py-10 md:py-20 px-4 fade-in">
      <div className="rounded-2xl shadow-2xl p-6 md:p-12 w-full max-w-5xl border border-zinc-700 glass-enhanced relative overflow-hidden">
        <div className="absolute -inset-2 rounded-3xl pointer-events-none" style={{boxShadow: '0 0 40px 5px rgba(59, 130, 246, 0.1)'}}></div>
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-blue-100 slide-in-up z-10 relative text-enhanced">Education</h2>
        
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3 z-10 relative">
          {/* Higher Education */}
          <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-gray-100 shadow-xl rounded-2xl p-6 md:p-8 flex flex-col gap-4 border border-zinc-700 hover-lift hover-glow fade-in-scale relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
            <div className="relative z-10 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl md:text-2xl">🎓</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-blue-100 mb-3 slide-in-left text-enhanced">Bachelor of Engineering</h3>
              <p className="text-base md:text-lg text-gray-200 mb-2 slide-in-right text-enhanced">Information Technology Engineering</p>
              <p className="text-blue-400 text-xs md:text-sm mb-2">Goa College of Engineering</p>
              <p className="text-gray-400 text-xs md:text-sm">Expected: 2025</p>
            </div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 float"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full opacity-30 rotate-slow"></div>
          </div>

          {/* Higher Secondary */}
          <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-gray-100 shadow-xl rounded-2xl p-6 md:p-8 flex flex-col gap-4 border border-zinc-700 hover-lift hover-glow fade-in-scale relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
            <div className="relative z-10 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl md:text-2xl">📚</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-blue-100 mb-3 slide-in-left text-enhanced">Higher Secondary</h3>
              <p className="text-base md:text-lg text-gray-200 mb-2 slide-in-right text-enhanced">XII Standard</p>
              <p className="text-blue-400 text-xs md:text-sm mb-2">Shri Shanta Durga Higher Secondary</p>
              <p className="text-gray-400 text-xs md:text-sm">Goa, 2021</p>
              <div className="mt-3 p-2 bg-green-500/20 rounded-lg border border-green-500/30">
                <span className="text-green-400 font-bold text-base md:text-lg">72%</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 float"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full opacity-30 rotate-slow"></div>
          </div>

          {/* Secondary */}
          <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-gray-100 shadow-xl rounded-2xl p-6 md:p-8 flex flex-col gap-4 border border-zinc-700 hover-lift hover-glow fade-in-scale relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
            <div className="relative z-10 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl md:text-2xl">🏫</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-blue-100 mb-3 slide-in-left text-enhanced">Secondary</h3>
              <p className="text-base md:text-lg text-gray-200 mb-2 slide-in-right text-enhanced">X Standard</p>
              <p className="text-blue-400 text-xs md:text-sm mb-2">Our Lady of Grace High School</p>
              <p className="text-gray-400 text-xs md:text-sm">Goa, 2019</p>
              <div className="mt-3 p-2 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                <span className="text-yellow-400 font-bold text-base md:text-lg">83.67%</span>
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

export default Education;
