import React from "react";
import {
  Wrapper,
  FiltersAndAddButtonWrapper,
  Select,
  Option,
  TableHeaderWrapper,
  Name,
  RentedBook,
  WaitingBook,
  WaintingQuantity,
  Date,
  RentalsWrapper,
  RentalCard,
  IconButton,
} from "./styles";
import { CustomModal } from "../../utils/commomStyles";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/searchBar";
import * as EndPoints from "../../services/api/endPoints";
import { Authenticated } from "../../services/api/auth.js";
import { AddRentalButton } from "./components/index.js";
import ViewUserModal from "../../modals/ViewUserModal/viewUserModal.jsx";
import { convertDataTime } from "../../utils/utils.js";

export default function RentalsList() {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const [rentals, setRentals] = useState([]);
  const [selectedRentalStatus, setSelectedRentalStatus] = useState("Alugado");
  const [searchBarInput, setSearchBarInput] = useState("");

  async function getRentals() {
    try {
      const res = selectedRentalStatus
        ? await EndPoints.getRentalByStatus(selectedRentalStatus)
        : await EndPoints.getRentals();

      setRentals(
        res.data.filter(
          (rental) =>
            rental?.book?.title
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(searchBarInput) ||
            rental?.user?.name
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes(searchBarInput)
        )
      );
    } catch (error) {
      console.log(
        error?.response?.data?.message || "Erro interno no servidor."
      );
    }
  }

  function handleSelect(e) {
    setSelectedRentalStatus(e.target.value);
  }

  useEffect(() => {
    getRentals();
  }, [selectedRentalStatus, searchBarInput]);

  return (
    <React.StrictMode>
      <Wrapper>
        <CustomModal
          open={open}
          onCancel={handleCancel}
          centered="true"
          footer={null}
        >
          <ViewUserModal />
        </CustomModal>
        <FiltersAndAddButtonWrapper>
          <SearchBar
            placeholder="Busque por cliente ou livro..."
            onChange={(value) => setSearchBarInput(value)}
          />
          <Select onChange={(e) => handleSelect(e)}>
            <Option key="0" value="Alugado">
              Alugados
            </Option>
            <Option key="1" value="Esperando">
              Lista de Espera
            </Option>
          </Select>
          <AddRentalButton />
        </FiltersAndAddButtonWrapper>
        <TableHeaderWrapper>
          {selectedRentalStatus === "Alugado" && (
            <>
              <Name>Cliente</Name>
              <RentedBook>Livro</RentedBook>
              <Date>Data de empréstimo</Date>
              <Date>Prazo de devolução</Date>
            </>
          )}
          {selectedRentalStatus === "Esperando" && (
            <>
              <WaitingBook>Livro</WaitingBook>
              <WaintingQuantity>
                Nº de clientes na fila de espera
              </WaintingQuantity>
            </>
          )}
        </TableHeaderWrapper>
        <RentalsWrapper>
          {rentals.map((rental) => (
            <RentalCard key={rental?.id}>
              {selectedRentalStatus === "Alugado" && (
                <>
                  <Name
                    hover={true}
                    onClick={showModal}
                    style={{ cursor: "pointer" }}
                  >
                    {rental?.user?.name}
                  </Name>
                  <RentedBook
                    hover={true}
                    onClick={showModal}
                    style={{ cursor: "pointer" }}
                  >
                    {rental?.book?.title}, de {rental?.book?.author}
                  </RentedBook>
                  <Date>{convertDataTime(rental?.created_at)}</Date>
                  <Date>{convertDataTime(rental?.return_date)}</Date>

                  <IconButton className="material-icons">
                    check_circle
                  </IconButton>
                </>
              )}
              {selectedRentalStatus === "Esperando" && (
                <>
                  <WaitingBook
                    hover={true}
                    onClick={showModal}
                    style={{ cursor: "pointer" }}
                  >
                    {rental?.book?.title}, de {rental?.book?.author}
                  </WaitingBook>
                  <WaintingQuantity>{rentals.length}</WaintingQuantity>
                  <IconButton className="material-icons">list</IconButton>
                </>
              )}
            </RentalCard>
          ))}
        </RentalsWrapper>
      </Wrapper>
    </React.StrictMode>
  );
}
