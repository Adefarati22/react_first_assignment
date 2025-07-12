import { z } from "zod";

export const validateLoginSchema = z.object({
  username: z.string().min(4, {
    message: "Username must be at least 4 characters long",
  }),
  password: z.string().min(8, {
    message: "password must be at least 8 characters long",
  }),
});

export const validateRegisterSchema = z.object({
  username: z.string().min(4, {
    message: "Username must be at least 4 characters long",
  }),
  email: z.string().email({
    message: "please enter a valid email address",
  }),
  password: z.string().min(8, {
    message: "password must be at least 8 characters long",
  }),
});
export const validateFormSchema = z.object({
  title: z.string().min(4, {
    message: "Title is required",
  }),
  description: z.string().min(10, {
    message: "Description is required",
  }),
  tag: z.enum(["urgent", "important"], {
    errorMap: () => ({ message: "Select a valid tag" }),
  }),
});
