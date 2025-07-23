import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="max-w-md mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="border rounded px-3 py-2"
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="border rounded px-3 py-2"
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="border rounded px-3 py-2"
          name="message"
          rows="4"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-5 py-2 hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
