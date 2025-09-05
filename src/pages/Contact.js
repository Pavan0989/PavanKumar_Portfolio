import React from "react";

function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center min-h-[70vh] py-10 md:py-20 px-4 fade-in">
      <div className="rounded-2xl shadow-2xl p-6 md:p-12 w-full max-w-5xl border border-zinc-700 glass-enhanced relative overflow-hidden">
        <div className="absolute -inset-2 rounded-3xl pointer-events-none" style={{boxShadow: '0 0 40px 5px rgba(59, 130, 246, 0.1)'}}></div>
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-blue-100 slide-in-up z-10 relative text-enhanced">Contact Me</h2>
        
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 z-10 relative">
          {/* Contact Information Card */}
          <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-gray-100 shadow-xl rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col gap-4 border border-zinc-700 hover-lift hover-glow fade-in-scale relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-blue-100 mb-6 slide-in-left text-enhanced">Get In Touch</h3>
              <div className="space-y-4 sm:space-y-5 text-gray-200 slide-in-right text-enhanced">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819L12 8.73l6.545-4.91h3.819c.904 0 1.636.732 1.636 1.636z"/>
                    </svg>
                  </div>
                  <a href="mailto:pavan123.pk813@gmail.com" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300 text-sm sm:text-base break-all">
                    pavan123.pk813@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <a href="tel:+919130455109" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300 text-sm sm:text-base">
                    +91 9130455109
                  </a>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base">Goa, India</span>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 float"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full opacity-30 rotate-slow"></div>
          </div>

          {/* Social Links Card */}
          <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-gray-100 shadow-xl rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col gap-4 border border-zinc-700 hover-lift hover-glow fade-in-scale relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold text-blue-100 mb-6 slide-in-left text-enhanced">Connect With Me</h3>
              <div className="space-y-4 sm:space-y-5 text-gray-200 slide-in-right text-enhanced">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <a href="https://www.linkedin.com/in/pavan-kumar092" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300 text-sm sm:text-base">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <a href="https://github.com/Pavan0989" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300 text-sm sm:text-base">
                    GitHub Profile
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

export default Contact;
