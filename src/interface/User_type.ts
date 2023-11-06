import { z } from "zod";
import {
  createuserSchema,
  singInUserSchema,
  updateUserSchema,
  userResponseSchema,
  userSchema,
} from "../Schemas/user_schema";

export type userType = z.infer<typeof userSchema>;

export type UserResponseType = Partial<z.infer<typeof userResponseSchema>>;

export type userCreate = z.infer<typeof createuserSchema>;

export type userUpdate = z.infer<typeof updateUserSchema>;

export type localsType = {
  userName: string;
  admin: boolean;
  iat: number;
  exp: number;
  sub: string;
};
