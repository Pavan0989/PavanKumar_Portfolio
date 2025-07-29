import React from "react";

function ProjectCard({ title, description, link, github }) {
  return (
    <div className="bg-zinc-800 text-gray-100 shadow-xl rounded-2xl p-8 flex flex-col gap-4 border border-zinc-700 hover:scale-105 hover:shadow-2xl transition-all duration-300 fade-in">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-lg text-gray-300 mb-4">{description}</p>
      <div className="flex gap-6 mt-auto">
        {link && (
          <a
            href={link}
            className="text-green-400 hover:underline hover:text-green-300 text-lg font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Website
          </a>
        )}
        {github && (
          <a
            href={github}
            className="text-blue-400 hover:underline hover:text-blue-300 text-lg font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
