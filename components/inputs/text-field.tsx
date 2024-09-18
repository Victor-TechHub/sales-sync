import React from "react";
import { Input } from "antd";
import { InputNumber } from "antd";

interface TextFieldProps {
  label: string;
  name: string;
  type?: "number" | "text" | "password";
  suffix?: any;
  defaultValue?: number | string;
}

const TextField = ({
  label,
  name,
  type,
  suffix,
  defaultValue,
}: TextFieldProps) => {
  return (
    <fieldset className="flex flex-col gap-1">
      <label htmlFor={name}>
        {label}
        <span className="text-blue-500">*</span>
      </label>

      {type === "number" ? (
        <InputNumber
          addonAfter={suffix}
          name={name}
          defaultValue={defaultValue}
          style={{ width: "100%" }}
        />
      ) : (
        <Input name={name} />
      )}
    </fieldset>
  );
};

export default TextField;
