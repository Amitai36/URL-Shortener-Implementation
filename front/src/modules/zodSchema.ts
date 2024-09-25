import { z } from "zod";


//create schema by zod with message for error 
export const urlSchema = z.object({
    longUrl: z.string().url("invalid url or not exist"),
    expiresIn: z.number().min(1),
});