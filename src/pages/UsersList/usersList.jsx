import React from "react";
import {
  Wrapper,
  FiltersAndAddButtonWrapper,
  Select,
  Option,
  TableHeaderWrapper,
  Name,
  CPF,
  Type,
  UsersWrapper,
  UserCard,
} from "./styles";
import { CustomModal } from "../../utils/commomStyles";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import SearchBar from "../../components/SearchBar/searchBar";
import { Users } from "./exampleUsers";

export default function UsersList() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <React.StrictMode>
      <Wrapper>
        <CustomModal
          open={open}
          onCancel={handleCancel}
          centered="true"
          footer={null}
        ></CustomModal>
        <FiltersAndAddButtonWrapper>
          <SearchBar placeholder="Busque por nome..." />
          <Select>
            <Option key="0" value="">
              Todos os tipos
            </Option>
            <Option key="1" value="Client">
              Clientes
            </Option>
            <Option key="2" value="Librarian">
              Bibliotecários
            </Option>
            <Option key="3" value="Master">
              Masters
            </Option>
          </Select>
        </FiltersAndAddButtonWrapper>
        <TableHeaderWrapper>
          <Name>Nome</Name>
          <CPF>CPF</CPF>
          <Type>Tipo</Type>
        </TableHeaderWrapper>
        <UsersWrapper>
          {Users?.map((user) => (
            <UserCard onClick={showModal}>
              <Name>{user.name}</Name>
              <CPF>{user.cpf}</CPF>
              <Type>{user.type}</Type>
            </UserCard>
          ))}
        </UsersWrapper>
      </Wrapper>
    </React.StrictMode>
  );
}
