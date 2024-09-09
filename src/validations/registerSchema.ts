import { z } from "zod";

export const registerSchema = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email("Xahiş olunur düzgün email giriniz!"),
    password: z.string(),
  })
  .required();
