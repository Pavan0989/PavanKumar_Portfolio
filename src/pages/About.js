import React from "react";

function About() {
  return (
    <section id="about" className="max-w-2xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-700 mb-2">
        I’m an IT engineer with a passion for crafting efficient and beautiful user interfaces using modern web technologies.
      </p>
      <ul className="list-disc ml-6 text-gray-600">
        <li>Degree: B.Tech in Computer Science</li>
        <li>Skills: React.js, Tailwind CSS, JavaScript, etc.</li>
        <li>Interests: Web development, UI/UX, Open source</li>
      </ul>
    </section>
  );
}

export default About;
