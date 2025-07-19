import React from "react";

interface TextareaProps {
  labelText?: string;
  placeholder?: string;
  rows?: number;
  ref?: React.Ref<HTMLTextAreaElement>;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  labelText,
  placeholder,
  rows,
  ref,
  name,
  value,
  onChange,
  required = true,
}) => (
  <>
    <label className="block mb-1 font-medium text-gray-700">{labelText}</label>
    <textarea
      name={name}
      value={value}
      rows={rows}
      ref={ref}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </>
);

export default Textarea;
