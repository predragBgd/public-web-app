"use client";
import React from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  buttonClassName?: string;
  labelText?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  buttonClassName,
  children,
  onClick,
}) => {
  const { pending } = useFormStatus();
  return (
    <button className={buttonClassName} disabled={pending} onClick={onClick}>
      {pending ? "Procesing..." : children}
    </button>
  );
};

export default Button;
