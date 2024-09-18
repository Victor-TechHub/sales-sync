import React from "react";
import { Input } from "antd";

interface TextAreaProps {
  label: string;
  name: string;
}

const TextArea = ({ label, name }: TextAreaProps) => {
  return (
    <fieldset>
      <label htmlFor={name}>
        {label}
        <span className="text-blue-500">*</span>
      </label>
      <Input.TextArea rows={4} name={name} />
    </fieldset>
  );
};

export default TextArea;
