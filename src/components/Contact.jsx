import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("SpyDishTest Contact");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:dasdas@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="bg-brandFigure py-16 text-white">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-6 text-center text-3xl md:text-4xl">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="grid gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-3 text-gray-900"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-3 text-gray-900"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-3 text-gray-900"
          ></textarea>
          <button
            type="submit"
            className="mx-auto w-full rounded-md bg-brandPrimary px-8 py-3 text-lg font-semibold transition hover:bg-brandPrimary/90 md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
