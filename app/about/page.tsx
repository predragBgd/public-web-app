import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Public AddOn",
  description: "",

  keywords: [
    "LinkedIn automation",
    "AI assistant",
    "LinkedIn outreach",
    "LinkedIn profile boost",
    "Public LinkedIn App",
  ],
  metadataBase: new URL("https://publicaddon.com"),
  icons: {
    icon: "/images/public-logo.png",
  },
};
const About = () => {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-yellow-600 mb-4">
          About Publique
        </h1>

        <p className="text-lg mb-4 shadow-md p-4 rounded-xl hover:shadow-xl transition">
          LinkedInAddon is a smart browser extension designed to enhance your
          LinkedIn productivity by automating repetitive tasks, optimizing
          outreach, and helping you connect with the right people faster and
          more efficiently.
        </p>

        <p className="text-lg mb-4 shadow-md p-4 rounded-xl hover:shadow-xl transition">
          Whether you're a recruiter, marketer, or job seeker, LinkedInAddon
          streamlines your workflow by providing intuitive features like
          automated messaging, personalized connection sequences, and activity
          scheduling.
        </p>

        <p className="text-lg mb-4 shadow-md p-4 rounded-xl hover:shadow-xl transition">
          Our goal is to help you save time, stay organized, and grow your
          LinkedIn presence effortlessly — all while remaining compliant with
          LinkedIn's terms of use.
        </p>

        <p className="text-lg mb-4 shadow-md p-4 rounded-xl hover:shadow-xl transition">
          LinkedInAddon is built with privacy and user control in mind. You
          decide how and when to engage, and we make sure the tools work for
          you, not the other way around.
        </p>

        <p className="text-lg shadow-md p-4 rounded-xl hover:shadow-xl transition">
          Get started today and supercharge your LinkedIn networking experience
          with LinkedInAddon.
        </p>
      </div>
    </section>
  );
};

export default About;
