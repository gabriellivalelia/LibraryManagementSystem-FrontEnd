import React, { useEffect, useState } from "react";
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
import { Colors } from "../../utils/defaultVariables";
import { useNavigate } from "react-router-dom";
import { Authenticated } from "../../services/api/auth";
import * as EndPoints from "../../services/api/endPoints";
import { convertDataTime } from "../../utils/utils";
import { CustomModal } from "../../utils/commomStyles";
import RentedBookModal from "../../components/RentedBookModal/rentedBookModal.jsx";
import WaitingBookModal from "../../components/WaitingBookModal/waitingBook.Modal.jsx";

export default function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [rentals, setRentals] = useState([]);
  const [openWaitingBook, setOpenWaitingBook] = useState(false);
  const [openRentedBook, setOpenRentedBook] = useState(false);
  const [selectedBook, setSelectedBook] = useState(false);

  function showWaitingBookModal(id) {
    setSelectedBook(id);
    setOpenWaitingBook(true);
  }

  function showRentedBookModal(id) {
    setSelectedBook(id);
    setOpenRentedBook(true);
  }

  function logOut() {
    localStorage.clear();
    Authenticated();
    navigate("/login");
  }

  async function getUserDataAndRentals() {
    try {
      const res = await EndPoints.getUserById(Authenticated().id);

      setUserData(res.data);
      if (Authenticated().type === "Cliente") {
        const res = await EndPoints.getRentalByClientId(Authenticated().id);
        setRentals(res.data);
      }
    } catch (error) {
      console.log(
        error?.response?.data?.message || "Erro interno no servidor."
      );
    }
  }

  useEffect(() => {
    getUserDataAndRentals();
  }, []);

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
            <Value>{userData.name}</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>EMAIL:</Label>
            <Value>{userData.email}</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>NÚMERO DE TELEFONE:</Label>
            <Value>{userData.phone_number}</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>CPF:</Label>
            <Value>{userData.cpf}</Value>
          </DataWrapper>
          <DataWrapper>
            <Label>DATA DE NASCIMENTO:</Label>
            <Value>{convertDataTime(userData.date_of_birth)}</Value>
          </DataWrapper>
          <Buttons>
            <LogoutButton onClick={() => logOut()}>LOGOUT</LogoutButton>
            <EditUserButton onClick={() => navigate("/editarPerfil")}>
              EDITAR DADOS
            </EditUserButton>
          </Buttons>
        </LeftWrapper>
        {Authenticated().type === "Cliente" && (
          <RightWrapper>
            <Title>Livros Alugados</Title>
            <BooksWrapper>
              {rentals?.map(
                (rental) =>
                  rental.status === "Rented" && (
                    <Book
                      key={rental.id}
                      onClick={() => showRentedBookModal(rental.book_id)}
                    >
                      <i
                        className="material-icons"
                        style={{ color: Colors.ORANGE }}
                      >
                        book
                      </i>
                      <>
                        {rental.title}, de {rental.author}
                      </>
                    </Book>
                  )
              )}
              <CustomModal
                open={openRentedBook}
                onCancel={() => setOpenRentedBook(false)}
                centered="true"
                footer={null}
              >
                <RentedBookModal bookId={selectedBook} />
              </CustomModal>
            </BooksWrapper>
            <Title>Livros em Lista de Espera</Title>
            <BooksWrapper>
              {rentals?.map(
                (rental) =>
                  rental.status === "Waiting" && (
                    <Book
                      key={rental.id}
                      onClick={() => showWaitingBookModal(rental.book_id)}
                    >
                      <i
                        className="material-icons"
                        style={{ color: Colors.ORANGE }}
                      >
                        book
                      </i>
                      <>
                        {rental.book.title}, de {rental.book.author}
                      </>
                    </Book>
                  )
              )}
              <CustomModal
                open={openWaitingBook}
                onCancel={() => setOpenWaitingBook(false)}
                centered="true"
                footer={null}
              >
                <WaitingBookModal bookId={selectedBook} />
              </CustomModal>
            </BooksWrapper>
          </RightWrapper>
        )}
      </PageWrapper>
    </React.StrictMode>
  );
}
