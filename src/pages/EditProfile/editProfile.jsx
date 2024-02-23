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
  SubmitButton,
  CancelButton,
  FormTitle,
} from "../../utils/commomStyles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditProfileFormSchema } from "./editProfileFormSchema";
import { useState, useEffect } from "react";
import { getToday, convertDateToDateTimeType } from "../../utils/utils";
import * as EndPoints from "../../services/api/endPoints";
import { Authenticated } from "../../services/api/auth";

export default function EditProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EditProfileFormSchema),
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [updateError, setUpdateError] = useState("");
  const [today, setToday] = useState("");
  const [user, setUser] = useState();

  async function getUser() {
    const res = await EndPoints.getUserById(Authenticated().id);
    setUser(res.data);
  }

  async function createUser(userData) {
    setLoading(true);
    setUpdateError("");

    userData.id = Authenticated().id;
    userData.date_of_birth = userData.date_of_birth
      ? convertDateToDateTimeType(userData.date_of_birth)
      : "";

    for (const key in userData) {
      if (userData[key] === "") {
        delete userData[key];
      }
    }

    try {
      await EndPoints.updateUser(userData);

      alert("Dados alterados com sucesso.");
      navigate("/");
    } catch (error) {
      setUpdateError(
        error?.response?.data?.message || "Erro ao alterar dados."
      );
    }

    setLoading(false);
  }

  useEffect(() => {
    setToday(getToday());
    getUser();
  }, []);

  return (
    <React.StrictMode>
      <Wrapper>
        <FormWrapper>
          <FormTitle>Editar Perfil</FormTitle>
          <Form onSubmit={handleSubmit(createUser)}>
            <InputWrapper>
              <label htmlFor="name">NOME COMPLETO:</label>
              <Input
                id="name"
                {...register("name")}
                autoComplete="off"
                placeholder={user?.name}
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
                placeholder={user?.email}
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
                placeholder={user?.phone_number}
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
                placeholder={user?.cpf}
              />
              {errors.cpf && <ErrorMessage>{errors.cpf.message}</ErrorMessage>}
            </InputWrapper>

            <ErrorMessage>{updateError}</ErrorMessage>
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
                onClick={() => navigate("/perfil")}
              />

              <SubmitButton type="submit" value="FINALIZAR" />
            </LoginAndRegisterButtonsContainer>
            {/*  )} */}
          </Form>
        </FormWrapper>
      </Wrapper>
    </React.StrictMode>
  );
}
