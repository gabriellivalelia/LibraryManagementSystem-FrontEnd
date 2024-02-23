import { z } from "zod";

export const EditProfileFormSchema = z
  .object({
    name: z
      .string()
      .optional()
      .refine((value) => value === "" || /[a-zA-ZÀ-ÿ\s]+/.test(value), {
        message: "Digite apenas letras e acentos!",
      })
      .transform((name) => {
        if (name.trim() !== "") {
          return name
            .trim()
            .split(" ")
            .map((word) => {
              return word[0].toLocaleUpperCase().concat(word.substring(1));
            })
            .join(" ");
        }

        return "";
      }),

    email: z
      .string()
      .email("Formato de email inválido!")
      .optional()
      .or(z.literal("")),
    phone_number: z
      .string()
      .optional()
      .refine(
        (value) =>
          value === "" || /^(\(?\d{2}\)?\s?)(\d{4,5}-?\d{4})$/.test(value),
        {
          message: "Insira um telefone no formato (XX) XXXXX-XXXX!",
        }
      ),
    date_of_birth: z
      .string()
      .optional()
      .refine(
        (dataString) => {
          const data = new Date(dataString);
          return !isNaN(data.getTime()) || dataString === "";
        },
        {
          message: "Data inválida!",
        }
      ),
    cpf: z
      .string()
      .optional()
      .refine(
        (value) =>
          value === "" ||
          /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}-?[0-9]{2})$/.test(value),
        {
          message: "Insira um CPF no formato XXX.XXX.XXX-XX!",
        }
      ),
  })
  .refine(
    (data) =>
      data.name ||
      data.email ||
      data.phone_number ||
      data.cpf ||
      data.date_of_birth,
    {
      path: ["cpf"],
      message: "Preencha pelo menos um campo!",
    }
  );
