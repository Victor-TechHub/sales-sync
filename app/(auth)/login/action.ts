"use server";

import { loginForm, loginSchema } from "@/utils/validation";

export const handleLogin = async (formData: loginForm) => {
  try {
    const validatedData = loginSchema.parse(formData);
    console.log(validatedData);
  } catch (err) {
    console.error("Error Logging in ", err);
  }
};
