import React from "react";
import {
  PageWrapper,
  LeftWrapper,
  RightWrapper,
  BooksWrapper,
  Title,
  Book,
  DataWrapper,
  Label,
  Value,
  LogoutButton,
  EditUserButton,
  Buttons,
} from "./styles";
import { Books } from "./example";
import { Colors } from "../../utils/defaultVariables";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <React.StrictMode>
      <PageWrapper>
        <LeftWrapper>
          <i
            className="material-icons"
            style={{ color: Colors.WHITE, fontSize: "3rem" }}
          >
            person
          </i>
          <DataWrapper>
            <Label>NOME:</Label>
            <Value>Gabrielli Valelia Sousa da Silva</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>EMAIL:</Label>
            <Value>gabrielli@gmail.com</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>NÚMERO DE TELEFONE:</Label>
            <Value>(28) 99934-8537</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>CPF:</Label>
            <Value>111.111.111-67</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>DATA DE NASCIMENTO:</Label>
            <Value>17/06/2004</Value>
          </DataWrapper>
          <Buttons>
            <LogoutButton>LOGOUT</LogoutButton>
            <EditUserButton>EDITAR DADOS</EditUserButton>
          </Buttons>
        </LeftWrapper>
        <RightWrapper>
          <Title>Livros Alugados</Title>
          <BooksWrapper>
            {Books?.map((book) => (
              <Book>
                <i className="material-icons" style={{ color: Colors.ORANGE }}>
                  book
                </i>
                <>
                  {book.title}, de {book.author}
                </>
              </Book>
            ))}
          </BooksWrapper>
          <Title>Livros em Lista de Espera</Title>
          <BooksWrapper>
            {Books?.map((book) => (
              <Book>
                <i className="material-icons" style={{ color: Colors.ORANGE }}>
                  book
                </i>
                <>
                  {book.title}, de {book.author}
                </>
              </Book>
            ))}
          </BooksWrapper>
        </RightWrapper>
      </PageWrapper>
    </React.StrictMode>
  );
}
