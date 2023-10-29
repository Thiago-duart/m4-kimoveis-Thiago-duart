import { z } from "zod";

export const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().min(3).max(45),
  email: z.string().email().min(1).max(45),
  admin: z.boolean().optional().default(false),
  password: z.string().min(1).max(120),
  createdAt: z.date(),
  updatedAt: z.date(),
  deletedAt: z.date(),
  schedule: z.number().positive().nullable(),
});

export const userResponseSchema = userSchema.omit({
  password: true,
});

export const createuserSchema = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
  schedule: true,
});

export const singInUserSchema = userSchema.omit({
  id: true,
  name: true,
  admin: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
  schedule: true,
});
