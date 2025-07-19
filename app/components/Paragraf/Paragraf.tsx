import React from "react";

interface ParagrafProps {
  className?: string;
  children?: React.ReactNode;
}

const Paragraf: React.FC<ParagrafProps> = ({ className, children }) => {
  return <p className={className}>{children}</p>;
};

export default Paragraf;
