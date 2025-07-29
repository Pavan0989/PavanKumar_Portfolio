import React from "react";

function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center min-h-[70vh] py-20 px-4 fade-in">
      <div className="rounded-2xl shadow-2xl p-12 w-full max-w-4xl text-center border border-zinc-800 bg-gradient-to-br from-zinc-900 via-[#1a1333] to-[#2d1a4d] relative overflow-hidden">
        {/* Optional: Soft purple/blue glow */}
        <div className="absolute -inset-2 rounded-3xl pointer-events-none" style={{boxShadow: '0 0 80px 10px #7c3aed55, 0 0 120px 40px #2563eb22'}}></div>
        <h2 className="text-4xl font-extrabold mb-8 text-white slide-in-up z-10 relative">About Me</h2>
        <p className="text-xl text-gray-200 mb-8 slide-in-up z-10 relative">
          I am <span className="font-semibold text-blue-400">Pavan Kumar</span>, a motivated Full-Stack Developer with hands-on experience in Node.js, React.js, PHP, and MySQL. I specialize in both front-end and back-end development, and have solid expertise in web hosting, SSL certificate integration, and website security. My goal is to craft efficient, secure, and user-friendly applications with responsive and intuitive UI/UX designs. I am eager to contribute my technical skills and problem-solving mindset in a collaborative development team.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-purple-400 slide-in-up z-10 relative">Core Competencies</h3>
        <ul className="list-disc list-inside text-lg text-gray-200 mb-8 slide-in-up space-y-2 z-10 relative text-left mx-auto max-w-2xl">
          <li>Languages & Frameworks: HTML, CSS, JavaScript, React.js, Node.js, PHP, MySQL, SQL, Python (Basics)</li>
          <li>Development: Full-Stack Web Development, REST API Integration, Backend and Frontend Structuring, Database Design and Management</li>
          <li>DevOps & Security: Web Hosting, SSL Certificate Configuration, Basic Website Security</li>
          <li>Soft Skills: Team Collaboration, Project Coordination, Analytical Thinking, and Problem Solving</li>
        </ul>
        <h3 className="text-2xl font-bold mb-4 text-purple-400 slide-in-up z-10 relative">Education</h3>
        <ul className="list-disc list-inside text-lg text-gray-200 mb-8 slide-in-up space-y-2 z-10 relative text-left mx-auto max-w-2xl">
          <li>BE in Information Technology Engineering, Goa College of Engineering (2025)</li>
          <li>XII, Shri Shanta Durga Higher Secondary, Goa (2021)</li>
          <li>X, Our Lady of Grace High School, Goa (2019)</li>
        </ul>
        <h3 className="text-2xl font-bold mb-4 text-purple-400 slide-in-up z-10 relative">Major Projects</h3>
        <ul className="list-disc list-inside text-lg text-gray-200 mb-8 slide-in-up space-y-2 z-10 relative text-left mx-auto max-w-2xl">
          <li>
            <b className="text-white">MedCare – DBMS-based Healthcare Portal</b> — Full-Stack Developer. Developed authentication, patient/employee registration, appointment scheduling, and prescription modules using HTML, CSS, JavaScript, PHP, and SQL.
          </li>
          <li>
            <b className="text-white">Aadhar Camp Project</b> — Full-Stack Developer. Implemented auto PDF generation and attendance management for government camps using React.js, Tailwind CSS, and MySQL.
          </li>
          <li>
            <b className="text-white">AI Surveillance for 6TTR</b> — AI/ML Developer and Web Developer. Developed IoT-based real-time border surveillance with OCR-based ID scanning, facial recognition, and vehicle authorization using Raspberry Pi, Python, YOLOv8, and Flask.
          </li>
          <li>
            <b className="text-white">Dream Bid Properties</b> — Backend Developer. Built backend for real estate enquiry site, managed hosting and security including SSL and input validation using PHP, MySQL, WordPress, and cPanel.
          </li>
        </ul>
        <h3 className="text-2xl font-bold mb-4 text-purple-400 slide-in-up z-10 relative">Internship</h3>
        <p className="text-lg text-gray-200 mb-8 slide-in-up z-10 relative">
          Full Stack Developer Intern at Infotech Corporation of Goa (July – August 2024). Developed a full-stack app with React.js, Tailwind CSS, and MySQL. Also worked on WordPress projects with secure remote access.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-purple-400 slide-in-up z-10 relative">Certifications & Achievements</h3>
        <ul className="list-disc list-inside text-lg text-gray-200 slide-in-up space-y-2 z-10 relative text-left mx-auto max-w-2xl">
          <li>Data Structures and Algorithms in Java (Silver Medal) – NPTEL Online Certification</li>
          <li>The Joy of Computing with Python – NPTEL Online Certification</li>
          <li>Finalist at HackIndia Spark 3 Hackathon (Goa Level)</li>
          <li>2nd Place in Technix 2025 Capture the Flag (CTF) Competition</li>
          <li>Active participation in multiple CTFs, hackathons, and tech workshops demonstrating strong cybersecurity and problem-solving skills</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
