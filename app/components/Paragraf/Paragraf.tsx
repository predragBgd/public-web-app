import React from "react";

interface ParagrafProps {
  paragrafClassName?: string;
  children?: React.ReactNode;
}

const Paragraf: React.FC<ParagrafProps> = ({ paragrafClassName, children }) => {
  return <p className={paragrafClassName}>{children}</p>;
};

export default Paragraf;
