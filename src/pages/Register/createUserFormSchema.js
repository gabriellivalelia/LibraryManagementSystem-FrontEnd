import { z } from "zod";

export const CreateUserFormSchema = z
  .object({
    name: z
      .string()
      .nonempty("Esse campo é obrigatório!")
      .regex(/[a-zA-ZÀ-ÿ\s]+/, "Digite apenas letras e acentos!")
      .transform((name) => {
        return name
          .trim()
          .split(" ")
          .map((word) => {
            return word[0].toLocaleUpperCase().concat(word.substring(1));
          })
          .join(" ");
      }),
    type: z.string().nonempty("Esse campo é obrigatório!"),
    email: z
      .string()
      .nonempty("Esse campo é obrigatório!")
      .email("Formato de email inválido!")
      .toLowerCase(),
    phone_number: z
      .string()
      .nonempty("Esse campo é obrigatório!")
      .regex(
        /^(\(?\d{2}\)?\s?)(\d{4,5}-?\d{4})$/,
        "Insira um telefone no formato (XX) XXXXX-XXXX!"
      ),
    date_of_birth: z.string().refine(
      (dataString) => {
        const data = new Date(dataString);
        return !isNaN(data.getTime());
      },
      {
        message: "Data inválida!",
      }
    ),
    cpf: z
      .string()
      .nonempty("Esse campo é obrigatório!")
      .regex(
        /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2})$/,
        "Insira um telefone no formato XXX.XXX.XXX-XX!"
      ),
    password: z
      .string()
      .nonempty("Esse campo é obrigatório!")
      .min(8, "A senha precisa de no mínimo 8 caracteres!"),
    confirmedPassword: z
      .string()
      .nonempty("Esse campo é obrigatório!")
      .min(8, "A senha precisa de no mínimo 8 caracteres!"),
  })
  .refine((data) => data.password === data.confirmedPassword, {
    path: ["confirmedPassword"],
    message: "Senhas não coincidem!",
  });
