import { z } from "zod";

export const AddBookFormSchema = z.object({
  title: z.string().nonempty("Esse campo é obrigatório!"),
  author: z.string().nonempty("Esse campo é obrigatório!"),
  genre: z.string().nonempty("Esse campo é obrigatório!"),
  pages: z
    .string()
    .nonempty("Esse campo é obrigatório!")
    .regex(/^[0-9]+$/, "Insira apenas números"),
  total_quantity: z
    .string()
    .nonempty("Esse campo é obrigatório!")
    .regex(/^[0-9]+$/, "Insira apenas números"),
});
