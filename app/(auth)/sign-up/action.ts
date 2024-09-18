"use server";

import { signUpForm, signUpSchema } from "@/utils/validation";

export const handleSignUp = async (formData: signUpForm) => {
  try {
    const validatedData = signUpSchema.parse(formData);
    console.log("Validated Data", validatedData);
  } catch (err) {
    console.error("Error signing up ", err);
  }
};
