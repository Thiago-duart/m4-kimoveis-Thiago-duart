import { z } from "zod";
import { createAddressSchema } from "../Schemas/address_schema";

export type createAddressType = z.infer<typeof createAddressSchema>;
