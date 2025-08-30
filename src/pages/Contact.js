import React from "react";

function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center min-h-[70vh] py-20 px-4 fade-in">
      <div className="rounded-2xl shadow-2xl p-12 w-full max-w-5xl border border-zinc-700 glass-enhanced relative overflow-hidden">
        <div className="absolute -inset-2 rounded-3xl pointer-events-none" style={{boxShadow: '0 0 40px 5px rgba(59, 130, 246, 0.1)'}}></div>
        <h2 className="text-4xl font-bold mb-10 text-blue-100 slide-in-up z-10 relative text-enhanced">Contact Me</h2>
        
        <div className="grid gap-8 md:grid-cols-2 z-10 relative">
          {/* Contact Information Card */}
          <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-gray-100 shadow-xl rounded-2xl p-8 flex flex-col gap-4 border border-zinc-700 hover-lift hover-glow fade-in-scale relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-blue-100 mb-6 slide-in-left text-enhanced">Get In Touch</h3>
              <div className="space-y-4 text-lg text-gray-200 slide-in-right text-enhanced">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-xl">📧</span>
                  <a href="mailto:pavan123.pk813@gmail.com" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">
                    pavan123.pk813@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-xl">📱</span>
                  <a href="tel:+919130455109" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">
                    +91 9130455109
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-xl">📍</span>
                  <span>Goa, India</span>
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 float"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full opacity-30 rotate-slow"></div>
          </div>

          {/* Social Links Card */}
          <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-gray-100 shadow-xl rounded-2xl p-8 flex flex-col gap-4 border border-zinc-700 hover-lift hover-glow fade-in-scale relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-blue-100 mb-6 slide-in-left text-enhanced">Connect With Me</h3>
              <div className="space-y-4 text-lg text-gray-200 slide-in-right text-enhanced">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-xl">💼</span>
                  <a href="https://www.linkedin.com/in/pavan-kumar092" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400 text-xl">🐙</span>
                  <a href="https://github.com/Pavan0989" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">
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
