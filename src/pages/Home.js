import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center py-20 px-4 max-w-3xl mx-auto text-center"
    >
      <h1 className="text-5xl font-bold mb-4">Hello, I'm Pavan Kumar</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl">
        Motivated Full-Stack Developer with hands-on experience in React.js,
        Node.js, PHP, and MySQL. Skilled at building secure, scalable & user-friendly
        web applications, from front-end UI to back-end systems. Passionate about
        delivering responsive, intuitive interfaces with strong problem-solving focus.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
        >
          See My Projects
        </a>

        <a
          href="#contact"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded shadow hover:bg-blue-600 hover:text-white transition"
        >
          Contact Me
        </a>
      </div>

      <div className="mt-10 text-gray-600 space-y-1">
        <p>Goa, India</p>
        <p>Email: <a href="mailto:pavan123.pk813@gmail.com" className="underline hover:text-blue-600">pavan123.pk813@gmail.com</a></p>
        <p>Phone: <a href="tel:+919130455109" className="underline hover:text-blue-600">+91 9130455109</a></p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/pavan-kumar092"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            www.linkedin.com/in/pavan-kumar092
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/Pavan0989"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600"
          >
            https://github.com/Pavan0989
          </a>
        </p>
      </div>
    </section>
  );
}

export default Home;
