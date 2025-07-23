import React from "react";

function ProjectCard({ title, description, link, github }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-3 border">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <div className="flex gap-4 mt-2">
        {link && (
          <a
            href={link}
            className="text-green-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Website
          </a>
        )}
        {github && (
          <a
            href={github}
            className="text-blue-600 hover:underline"
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
