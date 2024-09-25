import { z } from "zod";

export const urlSchema = z.object({
    longUrl: z.string().url("invalid url or not exist"),
    expiresIn: z.number().min(1),
});