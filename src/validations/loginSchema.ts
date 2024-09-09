import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Xahiş olunur düzgün email giriniz!"),
  password: z.string().trim().min(1, "Boş saxlamaq olmaz"),
});
