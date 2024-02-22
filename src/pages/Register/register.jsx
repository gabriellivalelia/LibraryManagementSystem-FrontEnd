import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Input,
  StyledPhoneInput,
  LoginAndRegisterButtonsContainer,
} from "./styles";
import {
  FormWrapper,
  Form,
  InputWrapper,
  ErrorMessage,
  TextButton,
  SubmitButton,
  CancelButton,
  FormTitle,
} from "../../utils/commomStyles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserFormSchema } from "./createUserFormSchema";
import { useState, useEffect } from "react";
import { getToday, convertDateToDateTimeType } from "../../utils/utils";
import * as EndPoints from "../../services/api/endPoints";
import { Authenticated } from "../../services/api/auth";

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
    setRegisterError("");
    userData.type = "Cliente";
    userData.date_of_birth = convertDateToDateTimeType(userData.date_of_birth);

    try {
      await EndPoints.createUser(userData);
      const res = await EndPoints.logIn({
        email: userData.email,
        password: userData.password,
      });

      localStorage.setItem("token", res.data.token);
      Authenticated();
      alert("Cadastro criado com sucesso.");
      navigate("/");
    } catch (error) {
      setRegisterError(error?.response?.data?.message || "Erro ao cadastrar.");
    }

    setLoading(false);
  }

  return (
    <React.StrictMode>
      <Wrapper>
        <FormWrapper>
          <FormTitle>Cadastro</FormTitle>
          <Form onSubmit={handleSubmit(createUser)}>
            <InputWrapper>
              <label htmlFor="name">NOME COMPLETO:</label>
              <Input
                id="name"
                {...register("name")}
                autoComplete="off"
                placeholder="Nome Completo"
              />
              {errors.name && (
                <ErrorMessage>{errors.name.message}</ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="email">EMAIL:</label>
              <Input
                id="email"
                {...register("email")}
                autoComplete="off"
                placeholder="Email"
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper></InputWrapper>
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
                <ErrorMessage>{errors.phone_number.message}</ErrorMessage>
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
                <ErrorMessage>{errors.date_of_birth.message}</ErrorMessage>
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
              {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
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
              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="confirmedPassword">CONFIRME SUA SENHA:</label>
              <Input
                type="password"
                id="confirmedPassword"
                autoComplete="off"
                placeholder="Confirme sua senha"
                {...register("confirmedPassword")}
              />
              {errors.confirmedPassword && (
                <ErrorMessage>{errors.confirmedPassword.message}</ErrorMessage>
              )}
            </InputWrapper>
            <ErrorMessage>{registerError}</ErrorMessage>
            {/* {loading ? (
              {
                 <LoaderBox>
                <LoadingOutlined spin />
              </LoaderBox> 
              }
            ) : ( */}
            <LoginAndRegisterButtonsContainer>
              <CancelButton
                type="button"
                value="CANCELAR"
                onClick={() => navigate("/Cadastro")}
              />

              <SubmitButton type="submit" value="FINALIZAR" />
            </LoginAndRegisterButtonsContainer>
            {/*  )} */}
          </Form>
          <TextButton onClick={() => navigate("/Login")}>
            Já tenho cadastro
          </TextButton>
        </FormWrapper>
      </Wrapper>
    </React.StrictMode>
  );
}
