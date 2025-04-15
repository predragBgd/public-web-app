import React from "react";
import DemoVideo from "@/components/DemoVideo/DemoVideo";

const Demo = () => {
  return (
    <div className="min-h-screen px-4 py-16 bg-white text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          Watch AstLinkedIn in Action
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Discover how our Chrome extension automates your LinkedIn outreach and
          helps you save time while expanding your network. Watch the demo to
          see how it works in real-time.
        </p>
      </div>
      <DemoVideo />
    </div>
  );
};

export default Demo;
