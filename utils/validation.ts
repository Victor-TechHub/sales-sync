import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z.string().min(1, { message: "username is required" }),
    email: z
      .string()
      .email()
      .endsWith(".com", { message: "only .com domains allowed" }),
    password: z
      .string()
      .min(6, { message: "password must contain at least 6 character(s)" })
      .max(12, { message: "password must not exceed 12 character(s)" }),
    confirmPassword: z
      .string()
      .min(6, { message: "password must contain at least 6 character(s)" })
      .max(12, { message: "password must not exceed 12 character(s)" }),
  })
  .refine((form) => form.password !== form.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: z
    .string()
    .email()
    .endsWith(".com", { message: "only .com domains allowed" }),
  password: z
    .string()
    .min(6, { message: "password must contain at least 6 character(s)" })
    .max(12, { message: "password must not exceed 12 character(s)" }),
});

export type signUpForm = z.infer<typeof signUpSchema>;
export type loginForm = z.infer<typeof loginSchema>;
