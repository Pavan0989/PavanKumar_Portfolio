import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-gray-300 text-center py-8 mt-16 border-t border-zinc-700 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5"></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <p className="text-base font-medium text-blue-100 mb-4">
          © {new Date().getFullYear()} Pavan Kumar. All rights reserved.
        </p>
        
        {/* Social links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="https://github.com/Pavan0989" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <span className="text-xl">🐙</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/pavan-kumar092" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <span className="text-xl">💼</span>
          </a>
          <a 
            href="mailto:pavan123.pk813@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
          >
            <span className="text-xl">📧</span>
          </a>
        </div>
        
        {/* Additional info */}
        <p className="text-sm text-gray-500">
          Built with React & Tailwind CSS
        </p>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 left-1/4 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 float"></div>
      <div className="absolute bottom-4 right-1/4 w-4 h-4 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full opacity-30 rotate-slow"></div>
    </footer>
  );
}

export default Footer;
