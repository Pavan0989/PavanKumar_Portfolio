import React from "react";

function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-white shadow rounded-lg p-6 flex flex-col gap-2 border">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700">{description}</p>
      {link && (
        <a
          href={link}
          className="text-blue-600 hover:underline mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
