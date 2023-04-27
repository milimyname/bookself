import { z } from "zod";
const loginSchema = z.object({
  password: z.string().min(8),
  email: z.string().email()
});
const signUpSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
  email: z.string().email(),
  privacy: z.boolean()
});
const bookingSchema = z.object({
  status: z.string(),
  visaType: z.string(),
  visa: z.string(),
  citizenship: z.string(),
  applicants: z.string(),
  familyMember: z.string(),
  cizitenshipOfFamilyMember: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  birthDate: z.string(),
  currentVisa: z.string().optional(),
  numberOfCurrentVisa: z.string().optional()
});
const userSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  image: z.any().optional()
});
const resetSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string().min(8)
});
export {
  bookingSchema as b,
  loginSchema as l,
  resetSchema as r,
  signUpSchema as s,
  userSchema as u
};
