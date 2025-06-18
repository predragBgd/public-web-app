import React, { JSX } from "react";

interface HeadingProps {
  titleClassName: string;
  title: string;
  subtitleClassName?: string;
  subtitle?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading: React.FC<HeadingProps> = ({
  titleClassName,
  title,
  subtitleClassName,
  subtitle,
  level = "h1",
}) => {
  const HeadingTag = level as keyof JSX.IntrinsicElements;

  return (
    <>
      <HeadingTag className={titleClassName}>{title}</HeadingTag>
      {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
    </>
  );
};

export default Heading;
