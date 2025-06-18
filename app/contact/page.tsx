import React from "react";
import ContactEmail from "@/components/ContactEmail/ContactEmail";
import ContactForm from "@/components/ContactForm/ContactForm";
import { Metadata } from "next";
import Heading from "@/components/Heading/Heading";

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
        <Heading
          titleClassName="text-4xl font-extrabold text-yellow-600 mb-4"
          title="Contact Us"
          subtitle="We're here to help! Reach out to our team via email or use the contact
          form below."
        />
        <ContactEmail />
        <div className="mt-6 border-t border-gray-300"></div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
