import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  FormWrapper,
  Input,
  Form,
  InputWrapper,
  Button,
  Message,
  StyledPhoneInput,
  LoaderBox,
  TextButton,
  Select,
  Option,
  LoginAndRegisterButtonsContainer,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserFormSchema } from "./createUserFormSchema";
import { useState, useEffect } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { getToday } from "./utils";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreateUserFormSchema),
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(getToday());
  }, []);

  async function createUser(userData) {
    setLoading(true);

    console.log(userData);

    setLoading(false);
  }

  return (
    <React.StrictMode>
      <Wrapper>
        <FormWrapper>
          <div
            style={{
              fontSize: "3rem",
              color: "white",
              fontFamily: "Lora",
              paddingBottom: "2rem",
            }}
          >
            Cadastro
          </div>
          <Form onSubmit={handleSubmit(createUser)}>
            <InputWrapper>
              <label htmlFor="name">NOME COMPLETO:</label>
              <Input
                id="name"
                {...register("name")}
                autoComplete="off"
                placeholder="Nome Completo"
              />
              {errors.name && <Message>{errors.name.message}</Message>}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="email">EMAIL:</label>
              <Input
                id="email"
                {...register("email")}
                autoComplete="off"
                placeholder="Email"
              />
              {errors.email && <Message>{errors.email.message}</Message>}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="type">TIPO:</label>
              <Select id="type" {...register("type")}>
                <Option value="" disabled selected>
                  Tipo de Usuário
                </Option>
                <Option value="client">Cliente</Option>
                <Option value="master">Master</Option>
                <Option value="librarian">Bibliotecário</Option>
              </Select>
              {errors.type && <Message>{errors.type.message}</Message>}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="phone_number">TELEFONE:</label>
              <StyledPhoneInput
                id="phone_number"
                mask="(99) 99999-9999"
                {...register("phone_number")}
                autoComplete="off"
                placeholder="Telefone"
              />
              {errors.phone_number && (
                <Message>{errors.phone_number.message}</Message>
              )}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="date_of_birth">DATA DE NASCIMENTO:</label>
              <Input
                id="date_of_birth"
                type="date"
                {...register("date_of_birth")}
                autoComplete="off"
                placeholder="Data de nascimento"
                max={today}
              />
              {errors.date_of_birth && (
                <Message>{errors.date_of_birth.message}</Message>
              )}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="cpf">CPF:</label>
              <StyledPhoneInput
                id="cpf"
                mask="999.999.999-99"
                {...register("cpf")}
                autoComplete="off"
                placeholder="CPF"
              />
              {errors.cpf && <Message>{errors.cpf.message}</Message>}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="password">SENHA:</label>
              <Input
                type="password"
                id="password"
                {...register("password")}
                autoComplete="off"
                placeholder="Senha"
              />
              {errors.password && <Message>{errors.password.message}</Message>}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="confirmedPassword">CONFIRME SUA SENHA:</label>
              <Input
                type="password"
                id="confirmedPassword"
                autoComplete="off"
                placeholder="Confirme Sua Senha"
                {...register("confirmedPassword")}
              />
              {errors.confirmedPassword && (
                <Message>{errors.confirmedPassword.message}</Message>
              )}
            </InputWrapper>
            <Message>{registerError}</Message>
            {loading ? (
              <LoaderBox>
                <LoadingOutlined spin />
              </LoaderBox>
            ) : (
              <LoginAndRegisterButtonsContainer>
                <Button
                  type="button"
                  Background="white"
                  Color="#913211"
                  Border="#913211 "
                  value="CANCELAR"
                  onClick={() => navigate("/")}
                />

                <Button
                  type="submit"
                  Background="#F0480C"
                  Color="white"
                  Border="#913211"
                  value="FINALIZAR"
                />
              </LoginAndRegisterButtonsContainer>
            )}
          </Form>
          {/*  <TextButton onClick={() => navigate("/Login")}>
            Já tenho cadastro
          </TextButton> */}
        </FormWrapper>
      </Wrapper>
    </React.StrictMode>
  );
}
