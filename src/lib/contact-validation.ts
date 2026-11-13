import { z } from "zod";

export const serviceOptions = [
  "Website design & development",
  "Custom software development",
  "CRM & business automation",
  "Digital product development",
  "Something else",
] as const;

export const inquirySchema = z.object({
  name: z.string().trim().min(1, "Please tell us your name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(255),
  business: z.string().trim().min(1, "Please tell us your business name.").max(120),
  service: z.enum(serviceOptions),
  description: z
    .string()
    .trim()
    .min(1, "Please tell us a little about your project.")
    .max(2000, "Please keep your project details under 2000 characters."),
});
