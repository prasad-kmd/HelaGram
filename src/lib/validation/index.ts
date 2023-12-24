import * as z from "zod";

export const SignupValidation = z.object({
    name: z.string().min(2, {message:'Too Short'}),
    username: z.string().min(2, {message:'Too Short'}).max(15),
    email:z.string().email(),
    password:z.string().min(8, {message:'Pasword must be at least 8 characters'}),
  });