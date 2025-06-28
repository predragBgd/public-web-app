import React from "react";

interface TextareaProps {
  labelText?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  labelText,
  name,
  value,
  onChange,
  required = true,
}) => (
  <div>
    <label className="block mb-1 font-medium text-gray-700">{labelText}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
);

export default Textarea;
