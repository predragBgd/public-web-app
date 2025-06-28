"use client";
import Link from "next/link";
import { useState } from "react";
type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  linkClassName?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

const ActionLink = ({
  href,
  children,
  linkClassName,
  target,
}: ActionLinkProps) => {
  const [pending, setPending] = useState(false);

  const handleClick = () => {
    setPending(true);
    // setTimeout(() => {
    //   setPending(false);
    // }, 1000);
  };
  return (
    <div>
      <Link
        href={href}
        className={linkClassName}
        target={target}
        onClick={handleClick}
      >
        {pending ? "Loading..." : children}
      </Link>
    </div>
  );
};

export default ActionLink;
