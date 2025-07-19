import React from "react";
import DemoVideo from "@/components/DemoVideo/DemoVideo";
import { Metadata } from "next";
import Paragraf from "@/components/Paragraf/Paragraf";

export const metadata: Metadata = {
  title: "Watch AstLinkedIn in Action",
  description:
    "Discover how our Chrome extension automates your LinkedIn outreach and helps you save time while expanding your network. Watch the demo to see how it works in real-time.",

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
const Demo = () => {
  return (
    <div className="min-h-screen px-4 py-16 bg-white text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Watch AstLinkedIn in Action
        </h1>
        <Paragraf className="text-lg text-gray-600 mb-10">
          Discover how our Chrome extension automates your LinkedIn outreach and
          helps you save time while expanding your network. Watch the demo to
          see how it works in real-time.
        </Paragraf>
      </div>
      <DemoVideo />
    </div>
  );
};

export default Demo;
