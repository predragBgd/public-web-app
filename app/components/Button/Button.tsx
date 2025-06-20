import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  buttonClassName?: string;
  label: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, buttonClassName }) => {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
