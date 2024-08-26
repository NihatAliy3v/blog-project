import { z } from "zod";

export const postSchema = z
  .object({
    file: z.any(),
    subject: z.string(),
    content: z.string(),
    createdBy: z.string(),
  })
  .required();
