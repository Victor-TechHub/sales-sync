"use client";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLockOpenOutline, IoLockClosedOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { InputField } from "@/components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpForm, signUpSchema } from "@/utils/validation";
import { handleSignUp } from "./action";
import { useState } from "react";

const Form = () => {
  const [pending, setIspending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<signUpForm>({
    resolver: zodResolver(signUpSchema),
  });
  const onsubmit = async (data: signUpForm) => {
    try {
      setTimeout(() => {
        setIspending(true);
      }, 2 * 1000);
      await handleSignUp(data);
      reset();
      setIspending(false);
    } catch (err) {
      console.error("Error Logging in from client", err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-5">
      <InputField
        name="username"
        prefixIcon={<HiOutlineUser size={17} />}
        placeholder="Username"
        register={register}
        error={errors.username}
      />
      <InputField
        name="email"
        prefixIcon={<MdOutlineAlternateEmail size={17} />}
        placeholder="Email"
        type="email"
        register={register}
        error={errors.email}
      />
      <InputField
        name="password"
        prefixIcon={<IoLockOpenOutline />}
        placeholder="Password"
        type="password"
        register={register}
        error={errors.password}
      />
      <InputField
        name="confirmPassword"
        prefixIcon={<IoLockClosedOutline size={17} />}
        placeholder="Confirm Password"
        type="password"
        register={register}
        error={errors.confirmPassword}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:opacity-90 text-white rounded-lg p-3"
      >
        {pending ? "Please wait" : "Sign Up"}
      </button>
    </form>
  );
};

export default Form;
