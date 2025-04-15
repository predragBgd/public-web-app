"use client";

import React from "react";

const DemoVideo = () => {
  return (
    <div>
      <section className="w-full px-4 py-16 bg-gray-50 flex justify-center items-center">
        <div className="w-full max-w-4xl aspect-video shadow-xl rounded-2xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/pFLl1F3Sung"
            title="Demo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default DemoVideo;
