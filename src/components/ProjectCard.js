import React from "react";

function ProjectCard({ title, description, link, github }) {
  return (
    <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-gray-100 shadow-xl rounded-2xl p-6 md:p-8 flex flex-col gap-4 border border-zinc-700 hover-lift hover-glow fade-in-scale relative overflow-hidden group">
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-bold text-blue-100 mb-2 slide-in-left text-enhanced">{title}</h3>
        <p className="text-sm md:text-lg text-gray-200 mb-4 slide-in-right text-enhanced leading-relaxed">{description}</p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-6 mt-auto slide-in-up">
          {link && (
            <a
              href={link}
              className="text-green-400 hover:text-green-300 text-sm md:text-lg font-semibold px-3 md:px-4 py-2 rounded-lg border border-green-400/30 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 hover-rotate text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              🌐 Live Website
            </a>
          )}
          {github && (
            <a
              href={github}
              className="text-blue-400 hover:text-blue-300 text-sm md:text-lg font-semibold px-3 md:px-4 py-2 rounded-lg border border-blue-400/30 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/20 hover-rotate text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 GitHub
            </a>
          )}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 float"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full opacity-30 rotate-slow"></div>
    </div>
  );
}

export default ProjectCard;
