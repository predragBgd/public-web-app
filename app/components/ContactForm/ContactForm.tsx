"use client";

import React, { useState } from "react";
import Heading from "../Heading/Heading";
import Input from "../Input/Input";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import { sendContact } from "@/actions/contact";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   // e.preventDefault();
  //   const res = await fetch("/api/contact", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(form),
  //   });

  //   if (res.ok) {
  //     // alert("Message sent!");
  //     setForm({ name: "", email: "", message: "" });
  //     alert("Message sent!");
  //   } else {
  //     alert("Failed to send message.");
  //   }
  // };
  const handleFormAction = async (_: FormData) => {
    try {
      await sendContact(_ as FormData);
      setForm({ name: "", email: "", message: "" });
      alert("Message sent!");
    } catch (error) {}
  };
  return (
    <section className="min-h-screen bg-gray-100 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-xl">
        <Heading
          titleClassName="text-3xl font-bold mb-4 text-gray-800"
          title="Contact Us"
          subtitle="Have a question or feedback? We'd love to hear from you!"
          level="h2"
        />
        <form action={handleFormAction} className="space-y-4">
          <div>
            <Input
              labelText="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <Input
              labelText="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <TextArea
              labelText="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            buttonClassName="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition cursor-pointer"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
