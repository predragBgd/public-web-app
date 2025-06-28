import React from "react";

interface TextInputProps {
  labelText?: string;
  name?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({
  labelText,
  name,
  value,
  placeholder,
  onChange,
  required = true,
}) => {
  return (
    <div>
      <label className="block mb-1 font-medium text-gray-700" htmlFor={name}>
        {labelText}
      </label>
      <input
        type="text"
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

export default TextInput;
