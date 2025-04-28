"use client";

import Image from "next/image";
import React, { useState } from "react";

const screenshots = [
  "/images/screen1.jpeg",
  "/images/screen2.jpeg",
  "/images/screen3.jpeg",
];
const ScreenshotSlider = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <>
      {/* Image gallery */}
      <div className="overflow-x-auto flex gap-6 pb-4 scrollbar-hide">
        {screenshots.map((src, index) => (
          <div
            key={index}
            className="relative w-72 cursor-pointer"
            onClick={() => setLightbox(src)}
          >
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
      {/* Slider */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightbox(null)}
        >
          <Image
            src={lightbox}
            alt="Lightbox"
            width={900}
            height={600}
            className="rounded-xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export default ScreenshotSlider;
