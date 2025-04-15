"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-xl">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h1>
        <p className="mb-6 text-gray-600">
          Have a question or feedback? We'd love to hear from you!
        </p>
        <form>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input type="text" name="name" value={form.name} required />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input type="text" name="email" value={form.email} required />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Message
            </label>
            <textarea name="message" value={form.message} required />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
