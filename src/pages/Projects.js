import React from "react";
import ProjectCard from "../components/ProjectCard";

// Update each entry's github link with your actual repository when available
const projectsData = [
  {
    title: "MedCare – DBMS-based Healthcare Portal",
    description:
      "Healthcare management platform featuring Admin-User authentication, patient/employee registration, appointment scheduling, and prescription modules. Role: Full-Stack Developer. Technologies: HTML, CSS, JavaScript, PHP, SQL.",
    github: "https://github.com/Pavan0989/medcare",
  },
  {
    title: "Aadhar Camp Project",
    description:
      "System for automatic PDF generation of official letters and camp attendance management for government Aadhar camps. Role: Full-Stack Developer. Technologies: React.js, Tailwind CSS, MySQL.",
    github: "https://github.com/Pavan0989/aadhar-camp",
  },
  {
    title: "AI-powered Surveillance and Intrusion Detection for 6TTR",
    description:
      "IoT-based surveillance platform with real-time border monitoring, OCR-based ID scanning, and facial recognition. Implemented two-factor personnel authentication, intrusion detection with sensors and AI, and vehicle authorization. Role: AI/ML & Web Developer. Technologies: Raspberry Pi, Python, YOLOv8, Flask, OCR.",
    github: "https://github.com/Pavan0989/ai-surveillance",
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
    <section id="projects" className="flex flex-col items-center justify-center min-h-[70vh] py-20 px-4 fade-in">
      <div className="rounded-2xl shadow-2xl p-12 w-full max-w-5xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-[#1a1333] to-[#2d1a4d] relative overflow-hidden">
        <div className="absolute -inset-2 rounded-3xl pointer-events-none" style={{boxShadow: '0 0 80px 10px #7c3aed55, 0 0 120px 40px #2563eb22'}}></div>
        <h2 className="text-4xl font-extrabold mb-10 text-white slide-in-up z-10 relative">Projects</h2>
        <div className="grid gap-10 md:grid-cols-2 z-10 relative">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
        <div className="mt-14 text-center z-10 relative">
          <a
            href="https://github.com/Pavan0989"
            className="inline-block bg-zinc-800 text-blue-400 px-8 py-3 rounded-xl border-2 border-blue-400 hover:bg-blue-400 hover:text-zinc-900 text-lg font-bold shadow-lg transition-all duration-300"
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
