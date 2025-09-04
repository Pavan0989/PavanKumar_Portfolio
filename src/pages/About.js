import React from "react";

function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center min-h-[70vh] py-10 md:py-20 px-4 fade-in">
      <div className="rounded-2xl shadow-2xl p-6 md:p-12 w-full max-w-5xl border border-zinc-700 glass-enhanced relative overflow-hidden">
        <div className="absolute -inset-2 rounded-3xl pointer-events-none" style={{boxShadow: '0 0 40px 5px rgba(59, 130, 246, 0.1)'}}></div>
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10 text-blue-100 slide-in-up z-10 relative text-enhanced">About Me</h2>
        
        {/* Personal Introduction Card */}
        <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-gray-100 shadow-xl rounded-2xl p-6 md:p-8 flex flex-col gap-4 border border-zinc-700 hover-lift hover-glow fade-in-scale relative overflow-hidden group mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-blue-100 mb-6 slide-in-left text-enhanced">Personal Introduction</h3>
            <p className="text-base md:text-xl text-gray-200 slide-in-right text-enhanced leading-relaxed">
              I am <span className="font-semibold text-blue-400">Pavan Kumar</span>, a motivated Full-Stack Developer with hands-on experience in Node.js, React.js, PHP, and MySQL. I specialize in both front-end and back-end development, and have solid expertise in web hosting, SSL certificate integration, and website security. My goal is to craft efficient, secure, and user-friendly applications with responsive and intuitive UI/UX designs. I am eager to contribute my technical skills and problem-solving mindset in a collaborative development team.
            </p>
          </div>
          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 float"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full opacity-30 rotate-slow"></div>
        </div>

        {/* Core Competencies Card */}
        <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-gray-100 shadow-xl rounded-2xl p-6 md:p-8 flex flex-col gap-4 border border-zinc-700 hover-lift hover-glow fade-in-scale relative overflow-hidden group mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-blue-100 mb-6 slide-in-left text-enhanced">Core Competencies</h3>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 text-base md:text-lg text-gray-200 slide-in-right text-enhanced">
              <div className="p-4 rounded-lg bg-zinc-700/50 border border-zinc-600">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-blue-400 text-lg md:text-xl">💻</span>
                  <span className="font-semibold text-white text-sm md:text-base">Languages & Frameworks</span>
                </div>
                <p className="text-xs md:text-sm">HTML, CSS, JavaScript, React.js, Node.js, PHP, MySQL, SQL, Python (Basics)</p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-700/50 border border-zinc-600">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-green-400 text-lg md:text-xl">🚀</span>
                  <span className="font-semibold text-white text-sm md:text-base">Development</span>
                </div>
                <p className="text-xs md:text-sm">Full-Stack Web Development, REST API Integration, Backend and Frontend Structuring, Database Design and Management</p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-700/50 border border-zinc-600">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-purple-400 text-lg md:text-xl">🔧</span>
                  <span className="font-semibold text-white text-sm md:text-base">DevOps & Security</span>
                </div>
                <p className="text-xs md:text-sm">Web Hosting, SSL Certificate Configuration, Basic Website Security</p>
              </div>
              <div className="p-4 rounded-lg bg-zinc-700/50 border border-zinc-600">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-cyan-400 text-lg md:text-xl">🤝</span>
                  <span className="font-semibold text-white text-sm md:text-base">Soft Skills</span>
                </div>
                <p className="text-xs md:text-sm">Team Collaboration, Project Coordination, Analytical Thinking, and Problem Solving</p>
              </div>
            </div>
          </div>
          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 float"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full opacity-30 rotate-slow"></div>
        </div>

        {/* Internship Card */}
        <div className="bg-gradient-to-br from-zinc-800 via-zinc-900 to-black text-gray-100 shadow-xl rounded-2xl p-6 md:p-8 flex flex-col gap-4 border border-zinc-700 hover-lift hover-glow fade-in-scale relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer"></div>
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-blue-100 mb-6 slide-in-left text-enhanced">Internship Experience</h3>
            <div className="p-4 md:p-6 rounded-lg bg-zinc-700/50 border border-zinc-600">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-yellow-400 text-xl md:text-2xl">🏢</span>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold text-white">Full Stack Developer Intern</h4>
                  <p className="text-blue-400 text-sm md:text-base">Infotech Corporation of Goa</p>
                  <p className="text-gray-400 text-xs md:text-sm">July – August 2024</p>
                </div>
              </div>
              <p className="text-sm md:text-lg text-gray-200 leading-relaxed">
                Developed a full-stack app with React.js, Tailwind CSS, and MySQL. Also worked on WordPress projects with secure remote access.
              </p>
            </div>
          </div>
          <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-20 float"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full opacity-30 rotate-slow"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
