import React from "react";
import Link from "next/link";
import ScreenshotSlider from "@/components/ScreenshotSlider/ScreenshotSlider";
import RateUs from "@/components/RateUs/RateUs";
import { Metadata } from "next";
import Heading from "@/components/Heading/Heading";
import Paragraf from "@/components/Paragraf/Paragraf";

const features: string[] = [
  "Auto-connect with LinkedIn users in your niche",
  "Send personalized messages to new connections",
  "Automatically follow people in your target audience",
  "Set daily limits and intervals for safe automation",
  "Safe usage within LinkedIn usage guidelines",
];
export const metadata: Metadata = {
  title: "AstLinkedIn Features – Automate Your LinkedIn Growth",
  description:
    "Discover powerful features of AstLinkedIn: auto-connect, personalized messaging, and safe automation to grow your LinkedIn network efficiently.",
  keywords: [
    "LinkedIn automation features",
    "AstLinkedIn features",
    "LinkedIn auto connect",
    "LinkedIn outreach tool",
    "grow LinkedIn network",
    "automated messaging LinkedIn",
  ],
  metadataBase: new URL("https://publicaddon.com"),
  icons: {
    icon: "/images/public-logo.png",
  },
};
const Futures: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      {/* Intro */}
      <div className="text-center mb-10">
        <Heading
          titleClassName="text-4xl font-extrabold text-yellow-600 mb-4"
          title="Automate Your LinkedIn Growth"
          subtitleClassName="LinkedInAddOn helps you effortlessly grow your professional network
          through smart automation."
        />
      </div>
      {/* Feature list */}
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {features.map((item, index) => (
          <Paragraf
            key={index}
            paragrafClassName="flex items-start gap-3 text-gray-800 text-lg bg-white shadow-md p-4 rounded-xl hover:shadow-xl transition"
          >
            {item}
          </Paragraf>
        ))}
      </div>
      {/* Call to Action */}
      <div className="text-center mb-12">
        <Link
          href="/download"
          className="px-6 py-3 bg-yellow-600 text-gray-900 font-semibold rounded-xl hover:bg-gray-900   hover:text-yellow-500 transition"
        >
          Try for Free
        </Link>
      </div>
      <ScreenshotSlider />
      <RateUs />
    </section>
  );
};

export default Futures;
