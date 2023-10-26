import { z } from "zod";

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.date(),
  hour: z.string(),
  realEstateId: z.array(z.number().positive()),
  userId: z.array(z.number().positive()),
});
