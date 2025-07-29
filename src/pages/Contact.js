import React from "react";

function Contact() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center min-h-[60vh] py-20 px-4 fade-in">
      <div className="rounded-2xl shadow-2xl p-12 w-full max-w-xl text-center border border-zinc-800 bg-gradient-to-br from-zinc-900 via-[#1a1333] to-[#2d1a4d] relative overflow-hidden">
        <div className="absolute -inset-2 rounded-3xl pointer-events-none" style={{boxShadow: '0 0 80px 10px #7c3aed55, 0 0 120px 40px #2563eb22'}}></div>
        <h2 className="text-4xl font-extrabold mb-10 text-white slide-in-up z-10 relative">Contact Me</h2>
        <div className="text-gray-200 text-lg space-y-6 slide-in-up z-10 relative">
          <p>
            <strong className="text-white">Email:</strong> <a href="mailto:pavan123.pk813@gmail.com" className="text-blue-400 hover:underline">pavan123.pk813@gmail.com</a>
          </p>
          <p>
            <strong className="text-white">Phone:</strong> <a href="tel:+919130455109" className="text-blue-400 hover:underline">+91 9130455109</a>
          </p>
          <p>
            <strong className="text-white">Location:</strong> Goa, India
          </p>
          <p>
            <strong className="text-white">LinkedIn:</strong> <a href="https://www.linkedin.com/in/pavan-kumar092" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">www.linkedin.com/in/pavan-kumar092</a>
          </p>
          <p>
            <strong className="text-white">GitHub:</strong> <a href="https://github.com/Pavan0989" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://github.com/Pavan0989</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
