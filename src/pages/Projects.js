import React from "react";
import ProjectCard from "../components/ProjectCard";

// Update each entry's github link with your actual repository when available
const projectsData = [
  {
    title: "MedCare – DBMS-based Healthcare Portal",
    description:
      "Healthcare management platform featuring Admin-User authentication, patient/employee registration, appointment scheduling, and prescription modules. Role: Full-Stack Developer. Technologies: HTML, CSS, JavaScript, PHP, SQL.",
    github: "https://github.com/Pavan0989/MedCare",
  },
  {
    title: "Aadhar Camp Project",
    description:
      "System for automatic PDF generation of official letters and camp attendance management for government Aadhar camps. Role: Full-Stack Developer. Technologies: React.js, Tailwind CSS, MySQL.",
    github: "https://github.com/Pavan0989/AdhaarCamp",
  },
  {
    title: "AI-powered Surveillance and Intrusion Detection for 6TTR",
    description:
      "IoT-based surveillance platform with real-time border monitoring, OCR-based ID scanning, and facial recognition. Implemented two-factor personnel authentication, intrusion detection with sensors and AI, and vehicle authorization. Role: AI/ML & Web Developer. Technologies: Raspberry Pi, Python, YOLOv8, Flask, OCR.",
    github: "https://github.com/Pavan0989/AI_Survillean_6TTR",
  },
  {
    title: "Dream Bid Properties – Real Estate Enquiry Website",
    description:
      "Website for property listings and secure enquiry management across Residential, Commercial, and Agricultural sectors for a real estate client. Handled backend, hosting, SSL, and basic website security. Role: Backend Developer, Hosting & Security. Technologies: PHP, MySQL, WordPress (Custom Theme), cPanel, SSL.",
    link: "https://dreambidproperties.com/",
  },
];

function Projects() {
  return (
    <section id="projects" className="flex flex-col items-center justify-center min-h-[70vh] py-10 md:py-20 px-4 fade-in">
      <div className="rounded-2xl shadow-2xl p-6 md:p-12 w-full max-w-5xl border border-zinc-700 glass-enhanced relative overflow-hidden">
        <div className="absolute -inset-2 rounded-3xl pointer-events-none" style={{boxShadow: '0 0 40px 5px rgba(59, 130, 246, 0.1)'}}></div>
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-blue-100 slide-in-up z-10 relative text-enhanced">Projects</h2>
        <div className="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2 z-10 relative">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
        <div className="mt-10 md:mt-14 text-center z-10 relative">
          <a
            href="https://github.com/Pavan0989"
            className="inline-block bg-zinc-800 text-blue-400 px-6 md:px-8 py-3 rounded-xl border-2 border-blue-400 hover:bg-blue-400 hover:text-zinc-900 text-base md:text-lg font-bold shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
