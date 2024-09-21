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

export const addProductSchema = z.object({
  // imgs: z.array(z.object({ img: z.string() })).min(3),
  name: z.string().min(1, { message: "name of product is required" }),
  description: z.string().min(1, { message: "description is required" }),
  brand: z.string().min(1, { message: "product brand is required" }),
  basePrice: z.string().min(1),
  discount: z.string().min(1),
  finalPrice: z.string().min(1),
  stockQty: z
    .string()
    .min(1, { message: "stock quantity is required" })
    .regex(/^[0-9]+$/, { message: "expects numbers only" }),
});

export type signUpForm = z.infer<typeof signUpSchema>;
export type loginForm = z.infer<typeof loginSchema>;
export type addProductForm = z.infer<typeof addProductSchema>;
