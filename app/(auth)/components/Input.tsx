"use client";

import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import React, { useState } from "react";

interface InputProps<T extends FieldValues> {
  name: keyof T;
  prefixIcon: React.ReactNode;
  type?: string;
  placeholder: string;
  register: UseFormRegister<T>;
  error: FieldError | undefined;
}

const Input = <T extends FieldValues>({
  name,
  prefixIcon,
  type = "text",
  placeholder,
  register,
  error,
}: InputProps<T>) => {
  const [inputType, setInputType] = useState(type);

  const toggleInputType = () => {
    const newType = inputType === "password" ? "text" : "password";
    setInputType(newType);
  };

  return (
    <div className="relative">
      <fieldset className="bg-stone-100 flex items-center rounded-lg">
        <i
          className={`bg-[#fff] p-3 rounded-lg m-2 ${
            error ? "text-red-500" : "text-blue-500"
          } transition-all duration-700`}
        >
          {prefixIcon}
        </i>
        <input
          className="flex-1 bg-transparent py-3 px-2 outline-none"
          type={inputType}
          placeholder={placeholder}
          autoComplete="off"
          id="input"
          {...register(name as any)}
        />
        {type === "password" && (
          <i className="mx-3 cursor-pointer" onClick={toggleInputType}>
            {inputType === "password" ? <FiEyeOff /> : <FiEye />}
          </i>
        )}
      </fieldset>
      {/* error message */}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{
              y: -30,
            }}
            animate={{
              y: 0,
              transition: {
                delay: 1,
                type: "tween",
                duration: 0.2,
              },
            }}
            exit={{
              y: -30,
            }}
            className="text-red-500 pt-0.5 pointer-events-none -z-10 absolute text-xs"
          >
            {error?.message}
          </motion.span>
        )}
      </AnimatePresence>
      {/* end of error message */}
    </div>
  );
};

export default Input;
