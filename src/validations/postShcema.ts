import { z } from "zod";

export const postSchema = z.object({
  createdBy: z.string().min(1, "Kim tərəfindən yarandığı məlum deyil"),
  subject: z.string().min(3, "minimum 3 simvol olmalıdır"),
  content: z.string().min(100, "minimum 100 simvol olmalıdır"),
  file: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Şəkil məcburidir"),
});
