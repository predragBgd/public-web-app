"use client";

import Image from "next/image";
import React from "react";

const features: string[] = [
  "Auto-connect with LinkedIn users in your niche",
  "Send personalized messages to new connections",
  "Automatically follow people in your target audience",
  "Set daily limits and intervals for safe automation",
  "Safe usage within LinkedIn usage guidelines",
];

const screenshots = [
  "/images/screen1.jpeg",
  "/images/screen2.jpeg",
  "/images/screen3.jpeg",
];

const Futures: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      {/* Intro */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-yellow-600">
          Automate Your LinkedIn Growth
        </h2>
        <p className="text-gray-600 text-lg">
          AstLinkedIn helps you effortlessly grow your professional network
          through smart automation.
        </p>
      </div>
      {/* Feature list */}
      <ul className="space-y-4 text-lg mb-12">
        {features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* Image list */}
      <div className="overflow-x-auto flex gap-6 pb-4 scrollbar-hide">
        {screenshots.map((src, index) => (
          <div key={index} className="relative w-72 h-auto">
            <Image
              src={src}
              alt={`Screenshot ${index + 1}`}
              width={300}
              height={200}
              className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Futures;
