import React from "react";
import {
  Wrapper,
  FormWrapper,
  Form,
  InputWrapper,
  Input,
  Message,
  SubmitButton,
  ButtonWrapper,
  Button,
  LoaderBox,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { LoginFormSchema } from "./loginFormSchema";

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

    console.log(data);

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
            Login
          </div>
          <Form onSubmit={handleSubmit(Login)}>
            <InputWrapper>
              <label htmlFor="email">Email:</label>
              <Input
                id="email"
                placeholder="Email"
                {...register("email")}
                autoComplete="off"
              />
              {errors.email && <Message>{errors.email.message}</Message>}
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
              {errors.password && <Message>{errors.password.message}</Message>}
            </InputWrapper>
            <Message>{loginError}</Message>
            {loading ? (
              <LoaderBox>
                <LoadingOutlined spin />
              </LoaderBox>
            ) : (
              <SubmitButton type="submit" value="Entrar" />
            )}
          </Form>
          <ButtonWrapper>
            <Button onClick={() => navigate("/Cadastro")}>
              Ainda não tenho cadastro
            </Button>
          </ButtonWrapper>
        </FormWrapper>
      </Wrapper>
    </React.StrictMode>
  );
}
