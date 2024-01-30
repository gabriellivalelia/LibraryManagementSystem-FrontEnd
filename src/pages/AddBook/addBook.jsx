import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Input,
  UploadButton,
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
import { AddBookFormSchema } from "./addBookFormSchema";
import { useState, useEffect } from "react";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import { Colors } from "../../utils/defaultVariables";

export default function AddBook() {
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AddBookFormSchema),
  });

  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [imageError, setImageError] = useState();
  const [imageName, setImageName] = useState();

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      setImageError("Apenas arquivos do tipo JPG/PNG são permitidos!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      setImageError("A imagem deve ter tamanho máximo de 2MB!");
    }

    setImageName(file.name);
    setImageError("");
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    getBase64(info.file.originFileObj, (url) => {
      setLoading(false);
      setImageUrl(url);
    });
  };

  async function createBook(bookData) {
    if (!imageUrl) setImageError("Esse campo é obrigatório");

    bookData.available_quantity = bookData.total_quantity;
    bookData.media_base64 = imageUrl;

    setLoading(true);

    console.log(bookData);

    setLoading(false);
  }

  return (
    <React.StrictMode>
      <Wrapper>
        <FormWrapper>
          <FormTitle>Cadastrar Livro</FormTitle>
          <Form onSubmit={handleSubmit(createBook)}>
            <InputWrapper>
              <label htmlFor="title">TÍTULO:</label>
              <Input
                id="title"
                {...register("title")}
                autoComplete="off"
                placeholder="Título do livro"
              />
              {errors.title && (
                <ErrorMessage>{errors.title.message}</ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="author">AUTOR:</label>
              <Input
                id="author"
                {...register("author")}
                autoComplete="off"
                placeholder="Autor do livro"
              />
              {errors.author && (
                <ErrorMessage>{errors.author.message}</ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="genre">GÊNERO:</label>
              <Input
                id="genre"
                {...register("genre")}
                autoComplete="off"
                placeholder="Gênero do livro"
              />
              {errors.genre && (
                <ErrorMessage>{errors.genre.message}</ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="pages">NÚMERO DE PÁGINAS:</label>
              <Input
                id="pages"
                {...register("pages")}
                autoComplete="off"
                placeholder="Nº de páginas do livro"
                type="number"
                min="1"
              />
              {errors.pages && (
                <ErrorMessage>{errors.pages.message}</ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="total_quantity">NÚMERO DE EXEMPLARES:</label>
              <Input
                id="total_quantity"
                {...register("total_quantity")}
                autoComplete="off"
                placeholder="Nº de exemplares do livro"
                type="number"
                min="1"
              />
              {errors.total_quantity && (
                <ErrorMessage>{errors.total_quantity.message}</ErrorMessage>
              )}
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="media_base64">IMAGEM DE CAPA:</label>
            </InputWrapper>
            <InputWrapper>
              <UploadButton>
                <Upload
                  style={{
                    width: "100%",
                    color: "white",
                    display: " flex",
                    justifyContent: "space-betweeen",
                  }}
                  id="media_base64"
                  showUploadList={false}
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                >
                  {imageUrl ? (
                    <div
                      style={{
                        width: "100%",
                        textAlign: "left",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                      }}
                    >
                      {imageName}
                    </div>
                  ) : (
                    <>
                      <d>Selecionar Arquivo</d>
                      <UploadOutlined
                        style={{ color: Colors.ORANGE, fontSize: "18px" }}
                      />
                    </>
                  )}
                </Upload>
              </UploadButton>
              {imageError && <ErrorMessage>{imageError}</ErrorMessage>}
            </InputWrapper>
            <ErrorMessage>{registerError}</ErrorMessage>
            {loading ? (
              {
                /* <LoaderBox>
                <LoadingOutlined spin />
              </LoaderBox> */
              }
            ) : (
              <LoginAndRegisterButtonsContainer>
                <CancelButton
                  type="button"
                  value="CANCELAR"
                  onClick={() => navigate("/")}
                />

                <SubmitButton type="submit" value="FINALIZAR" />
              </LoginAndRegisterButtonsContainer>
            )}
          </Form>
        </FormWrapper>
      </Wrapper>
    </React.StrictMode>
  );
}
