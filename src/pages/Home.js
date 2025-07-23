import React from "react";

function Home() {
  return (
    <section id="home" className="flex flex-col items-center justify-center py-20">
      <h2 className="text-4xl font-bold mb-6">Hello, I'm Your Name</h2>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to my portfolio website! I am an IT engineer passionate about building web applications.
      </p>
      <a
        href="#projects"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        See My Projects
      </a>
    </section>
  );
}

export default Home;
