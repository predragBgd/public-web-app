import React from "react";
import { Metadata } from "next";
import Heading from "@/components/Heading/Heading";
import Paragraf from "@/components/Paragraf/Paragraf";
import { aboutContent } from "@/data/aboutContent";

export const metadata: Metadata = {
  ...aboutContent,
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
        <Heading
          titleClassName="text-4xl font-extrabold text-yellow-600 mb-4"
          title="About Publique"
        />
        {aboutContent.aboutText.map((text, index) => (
          <Paragraf
            key={index}
            className="text-lg mb-4 shadow-md p-4 rounded-xl hover:shadow-xl transition"
          >
            {text}
          </Paragraf>
        ))}
      </div>
    </section>
  );
};

export default About;
