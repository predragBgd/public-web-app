import React from "react";
import ContactEmail from "@/components/ContactEmail/ContactEmail";
import ContactForm from "@/components/ContactForm/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact AstLinkedIn Support",
  description:
    "Have questions or need help? Contact our support team directly using the form or email provided. We're here to assist you.",
  keywords: [
    "Contact AstLinkedIn",
    "AstLinkedIn support",
    "LinkedIn automation help",
    "customer support",
    "extension support",
  ],
  metadataBase: new URL("https://publicaddon.com"),
  icons: {
    icon: "/images/public-logo.png",
  },
};

const Contact = () => {
  return (
    <section className="min-h-screen px-6 py-16 text-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="mb-8 text-gray-600 text-lg">
          We're here to help! Reach out to our team via email or use the contact
          form below.
        </p>
        <ContactEmail />
        <div className="mt-6 border-t border-gray-300"></div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
