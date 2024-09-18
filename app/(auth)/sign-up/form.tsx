"use client";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLockOpenOutline, IoLockClosedOutline } from "react-icons/io5";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi2";
import Input from "../components/Input";
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
      setIspending(true);
      await handleSignUp(data);
      reset();
      setIspending(false);
    } catch (err) {
      console.error("Error Logging in from client", err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-5">
      <Input
        name="username"
        prefixIcon={<HiOutlineUser size={17} />}
        placeholder="Username"
        register={register}
        error={errors.username}
      />
      <Input
        name="email"
        prefixIcon={<MdOutlineAlternateEmail size={17} />}
        placeholder="Email"
        type="email"
        register={register}
        error={errors.email}
      />
      <Input
        name="password"
        prefixIcon={<IoLockOpenOutline />}
        placeholder="Password"
        type="password"
        register={register}
        error={errors.password}
      />
      <Input
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
