import { z } from "zod";
import { singInUserSchema } from "../Schemas/user_schema";

export type singInUserType = z.infer<typeof singInUserSchema>;
export type tokenType = { token: string };
