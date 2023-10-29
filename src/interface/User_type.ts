import { z } from "zod";
import {
  createuserSchema,
  singInUserSchema,
  userResponseSchema,
  userSchema,
} from "../Schemas/user_schema";

export type userType = z.infer<typeof userSchema>;

export type UserResponseType = Partial<z.infer<typeof userResponseSchema>>;

export type userCreate = z.infer<typeof createuserSchema>;

export type singInUserType = z.infer<typeof singInUserSchema>;
