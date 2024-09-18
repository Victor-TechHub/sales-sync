import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z.string().min(2, { message: "username is required" }),
    email: z
      .string()
      .email()
      .endsWith(".com", { message: "only .com domains allowed" }),
    password: z.string().min(6).max(12),
    confirmPassword: z.string().min(6).max(12),
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
  password: z.string().min(6).max(12),
});

export type signUpForm = z.infer<typeof signUpSchema>;
export type loginForm = z.infer<typeof loginSchema>;
