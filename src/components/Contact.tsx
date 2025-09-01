'use client';

import { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted! Check the console.');
  };

  return (
    <section id="contact" className="py-20 bg-white p-6">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
        <p className="mt-4 text-lg text-gray-600">
          Ready to get started? Fill out the form below or contact us directly.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 text-left">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          ></textarea>
          <button type="submit" className="w-full bg-blue-500 text-white font-bold py-3 rounded-md hover:bg-blue-600 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};