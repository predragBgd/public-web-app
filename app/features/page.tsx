import React from "react";
import Link from "next/link";
import ScreenshotSlider from "@/components/ScreenshotSlider/ScreenshotSlider";
import RateUs from "@/components/RateUs/RateUs";

const features: string[] = [
  "Auto-connect with LinkedIn users in your niche",
  "Send personalized messages to new connections",
  "Automatically follow people in your target audience",
  "Set daily limits and intervals for safe automation",
  "Safe usage within LinkedIn usage guidelines",
];

const Futures: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      {/* Intro */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-yellow-600 mb-4">
          Automate Your LinkedIn Growth
        </h2>
        <p className="text-gray-600 text-lg">
          LinkedInAddOn helps you effortlessly grow your professional network
          through smart automation.
        </p>
      </div>
      {/* Feature list */}
      <ul className="grid md:grid-cols-2 gap-4 mb-12">
        {features.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 text-gray-800 text-lg bg-white shadow-md p-4 rounded-xl hover:shadow-xl transition"
          >
            {item}
          </li>
        ))}
      </ul>
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
