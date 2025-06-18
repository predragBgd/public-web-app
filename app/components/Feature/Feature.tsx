import React from "react";
import Heading from "../Heading/Heading";

interface FeatureProps {
  title: string;
  text: string;
  isWide?: boolean;
}

const Feature: React.FC<FeatureProps> = ({ title, text, isWide }) => {
  return (
    <article
      className={`${
        isWide ? "md:col-span-2" : ""
      } bg-white border border-gray-200 rounded-md p-8 shadow-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl`}
    >
      <Heading
        titleClassName="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-purple-600 transition"
        title={title}
        level="h3"
        subtitleClassName="text-lg text-gray-600"
        subtitle={text}
      />
    </article>
  );
};

export default Feature;
