import React from "react";

function Contact() {
  return (
    <section id="contact" className="max-w-md mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <div className="text-gray-700 space-y-4">
        <p>
          <strong>Email:</strong> <a href="mailto:pavan123.pk813@gmail.com" className="text-blue-600 hover:underline">pavan123.pk813@gmail.com</a>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+919130455109" className="text-blue-600 hover:underline">+91 9130455109</a>
        </p>
        <p>
          <strong>Location:</strong> Goa, India
        </p>
        <p>
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/pavan-kumar092" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.linkedin.com/in/pavan-kumar092</a>
        </p>
        <p>
          <strong>GitHub:</strong> <a href="https://github.com/Pavan0989" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://github.com/Pavan0989</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
