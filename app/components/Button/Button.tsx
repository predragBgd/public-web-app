import React from "react";

interface ButtonProps {
  buttonClassName?: string;
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, buttonClassName }) => {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
