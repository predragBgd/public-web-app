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
    <div>
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h3 className="text-xl font-semibold">{faq.question}</h3>

              {openFaq === index && (
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              )}
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left  p-4 font-medium flex justify-between items-center cursor-pointer"
              >
                {openFaq === index ? "Hide Answer" : "Show Answer"}
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
