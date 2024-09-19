"use client";

import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLockOpenOutline } from "react-icons/io5";
import Link from "next/link";
import Input from "../components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginForm, loginSchema } from "@/utils/validation";
import { handleLogin } from "./action";
import { useState } from "react";

const Form = () => {
  const [pending, setIspending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<loginForm>({
    resolver: zodResolver(loginSchema),
  });
  const onsubmit = async (data: loginForm) => {
    try {
      setTimeout(() => {
        setIspending(true);
      }, 2 * 1000);
      await handleLogin(data);
      reset();
      setIspending(false);
    } catch (err) {
      console.error("Error Logging in from client", err);
    }
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-5">
      <Input
        register={register}
        name="email"
        type="email"
        prefixIcon={<MdOutlineAlternateEmail size={17} />}
        placeholder="Email"
        error={errors.email}
      />
      <Input
        register={register}
        name="password"
        placeholder="Password"
        prefixIcon={<IoLockOpenOutline size={17} />}
        type="password"
        error={errors.password}
      />
      <Link className="text-right font-medium text-blue-500" href="#">
        Forgot password?
      </Link>
      <button
        type="submit"
        className="bg-blue-500 hover:opacity-90 text-white rounded-lg p-3"
      >
        {pending ? "Please wait..." : "Login"}
      </button>
    </form>
  );
};

export default Form;
