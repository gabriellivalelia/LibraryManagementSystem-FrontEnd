import React from "react";
import { Wrapper, Input, ButtonWrapper } from "./styles";
import {
  FormWrapper,
  Form,
  FormTitle,
  InputWrapper,
  ErrorMessage,
  SubmitButton,
  TextButton,
} from "../../utils/commomStyles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoginFormSchema } from "./loginFormSchema";
import * as EndPoints from "../../services/api/endPoints";
import { Authenticated } from "../../services/api/auth";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
  });

  async function Login(data) {
    setLoading(true);
    setLoginError("");

    try {
      const res = await EndPoints.logIn({
        email: data.email,
        password: data.password,
      });

      localStorage.setItem("token", res.data.token);
      Authenticated();
      navigate("/");
    } catch (error) {
      setLoginError(error?.response?.data?.message || "Erro ao fazer login.");
    }

    setLoading(false);
  }

  return (
    <React.StrictMode>
      <Wrapper>
        <FormWrapper>
          <FormTitle>Login</FormTitle>
          <Form onSubmit={handleSubmit(Login)}>
            <InputWrapper>
              <label htmlFor="email">Email:</label>
              <Input
                id="email"
                placeholder="Email"
                {...register("email")}
                autoComplete="off"
              />
              {errors.email && (
                <ErrorMessage>{errors.email.message}</ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="password">Senha:</label>
              <Input
                type="password"
                id="password"
                placeholder="Senha"
                {...register("password")}
                autoComplete="off"
              />
              {errors.password && (
                <ErrorMessage>{errors.password.message}</ErrorMessage>
              )}
            </InputWrapper>
            <ErrorMessage>{loginError}</ErrorMessage>
            {/*  {loading ? (
              {
                 <LoaderBox>
                <LoadingOutlined spin />
              </LoaderBox>
              }
            ) : ( */}
            <SubmitButton type="submit" value="Entrar" />
          </Form>
          <ButtonWrapper>
            <TextButton onClick={() => navigate("/Cadastro")}>
              Ainda não tenho cadastro
            </TextButton>
          </ButtonWrapper>
        </FormWrapper>
      </Wrapper>
    </React.StrictMode>
  );
}
