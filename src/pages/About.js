import React from "react";

function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="text-gray-700 mb-6">
        I am <span className="font-semibold">Pavan Kumar</span>, a motivated Full-Stack Developer with hands-on experience in Node.js, React.js, PHP, and MySQL. I specialize in both front-end and back-end development, and have solid expertise in web hosting, SSL certificate integration, and website security. My goal is to craft efficient, secure, and user-friendly applications with responsive and intuitive UI/UX designs. I am eager to contribute my technical skills and problem-solving mindset in a collaborative development team.
      </p>

      <h3 className="text-xl font-semibold mb-2">Core Competencies</h3>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Languages & Frameworks: HTML, CSS, JavaScript, React.js, Node.js, PHP, MySQL, SQL, Python (Basics)</li>
        <li>Development: Full-Stack Web Development, REST API Integration, Backend and Frontend Structuring, Database Design and Management</li>
        <li>DevOps & Security: Web Hosting, SSL Certificate Configuration, Basic Website Security</li>
        <li>Soft Skills: Team Collaboration, Project Coordination, Analytical Thinking, and Problem Solving</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Education</h3>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>BE in Information Technology Engineering, Goa College of Engineering (2025)</li>
        <li>XII, Shri Shanta Durga Higher Secondary, Goa (2021)</li>
        <li>X, Our Lady of Grace High School, Goa (2019)</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Major Projects</h3>
      <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
        <li>
          <b>MedCare – DBMS-based Healthcare Portal</b> — Full-Stack Developer. Developed authentication, patient/employee registration, appointment scheduling, and prescription modules using HTML, CSS, JavaScript, PHP, and SQL.
        </li>
        <li>
          <b>Aadhar Camp Project</b> — Full-Stack Developer. Implemented auto PDF generation and attendance management for government camps using React.js, Tailwind CSS, and MySQL.
        </li>
        <li>
          <b>AI Surveillance for 6TTR</b> — AI/ML Developer and Web Developer. Developed IoT-based real-time border surveillance with OCR-based ID scanning, facial recognition, and vehicle authorization using Raspberry Pi, Python, YOLOv8, and Flask.
        </li>
        <li>
          <b>Dream Bid Properties</b> — Backend Developer. Built backend for real estate enquiry site, managed hosting and security including SSL and input validation using PHP, MySQL, WordPress, and cPanel.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Internship</h3>
      <p className="text-gray-600 mb-6">
        Full Stack Developer Intern at Infotech Corporation of Goa (July – August 2024). Developed a full-stack app with React.js, Tailwind CSS, and MySQL. Also worked on WordPress projects with secure remote access.
      </p>

      <h3 className="text-xl font-semibold mb-2">Certifications & Achievements</h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        <li>Data Structures and Algorithms in Java (Silver Medal) – NPTEL Online Certification</li>
        <li>The Joy of Computing with Python – NPTEL Online Certification</li>
        <li>Finalist at HackIndia Spark 3 Hackathon (Goa Level)</li>
        <li>2nd Place in Technix 2025 Capture the Flag (CTF) Competition</li>
        <li>Active participation in multiple CTFs, hackathons, and tech workshops demonstrating strong cybersecurity and problem-solving skills</li>
      </ul>
    </section>
  );
}

export default About;
