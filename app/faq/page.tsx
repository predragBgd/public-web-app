"use client";

import React from "react";

const faqs = [
  {
    question: "What is AstLinkedIn?",
    answer:
      "AstLinkedIn is a Chrome extension that automates your LinkedIn activity, helping you connect, message, and grow your network efficiently.",
  },
  {
    question: "Is it safe to use?",
    answer:
      "Yes, AstLinkedIn operates within LinkedIn's usage limits to minimize any risk to your account.",
  },
  {
    question: "How do I install the extension?",
    answer:
      "Visit the Download page, follow the step-by-step instructions to install the extension manually in your browser.",
  },
  {
    question: "Do I need a LinkedIn Premium account?",
    answer:
      "No, the extension works with free accounts too. However, premium accounts might unlock more features.",
  },
];

const FAQ = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-yellow-600">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFaq(index)}
            className="bg-white p-6 rounded-2xl shadow-md transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <h3 className="w-full text-left font-semibold text-lg text-gray-800 focus:outline-none">
              {faq.question}
            </h3>

            <p className="mt-2 text-gray-600 transition-all duration-300 ease-in-out">
              {openFaq === index ? faq.answer : "..."}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
