import { z } from "zod";
import {
  createuserSchema,
  userResponseSchema,
  userSchema,
} from "../Schemas/user_schema";

export type userType = z.infer<typeof userSchema>;

export type UserResponseType = z.infer<typeof userResponseSchema>;

export type userCreate = z.infer<typeof createuserSchema>;
