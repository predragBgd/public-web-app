"use client";
import React from "react";

const faqs = [
  {
    question: "What is LinkedInAddOn?",
    answer:
      "LinkedInAddOn is a Chrome extension that automates your LinkedIn activity, helping you connect, message, and grow your network efficiently.",
  },
  {
    question: "Is it safe to use?",
    answer:
      "Yes, LinkedInAddOn operates within LinkedIn's usage limits to minimize any risk to your account.",
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
  {
    question: "Can I personalize the messages?",
    answer:
      "Absolutely. You can use templates with dynamic tags like {firstName} or {company} for personalized outreach.",
  },
  {
    question: "What are the daily action limits?",
    answer:
      "We recommend up to 50 connection requests and up to 100 messages per day, but these can be customized in the settings.",
  },
  {
    question: "How do I install the extension?",
    answer: `Visit the Chrome Web Store, click "Add to Chrome", and follow the setup instructions after installation.`,
  },
  {
    question: "Who can I contact for support?",
    answer:
      "Reach out via the contact form on our website or email us at pecabegd@gmail.com for help.",
  },
];

const FAQClient = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8 text-yellow-600">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFaq(index)}
            className="m-4 p-4 rounded-lg bg-gray-50 shadow-xl cursor-pointer hover:shadow-2xl  hover:-translate-y-2 transition"
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

export default FAQClient;
