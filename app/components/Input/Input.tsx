import React from "react";

interface InputProps {
  type?: "text" | "email" | "password" | "number";
  name?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  required = true,
}) => {
  return (
    <div>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className="border rounded px-3 py-2 w-full bg-white"
      />
    </div>
  );
};

export default Input;
