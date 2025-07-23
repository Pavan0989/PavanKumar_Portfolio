import React from "react";
import ProjectCard from "../components/ProjectCard";

const projectsData = [
  {
    title: "Portfolio Website",
    description: "My personal website built with React and Tailwind CSS.",
    link: "#",
  },
  {
    title: "Todo App",
    description: "A simple, efficient to-do list built with React.",
    link: "#",
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projectsData.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
