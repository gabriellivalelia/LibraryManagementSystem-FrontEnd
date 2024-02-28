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
  DeleteUserButton,
} from "./styles";
import { CustomModal } from "../../utils/commomStyles";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import SearchBar from "../../components/SearchBar/searchBar";
import * as EndPoints from "../../services/api/endPoints";
import { Authenticated } from "../../services/api/auth.js";
import { AddUserButton } from "./components/index.js";
import ViewUserModal from "../../modals/ViewUserModal/viewUserModal.jsx";

export default function UsersList() {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const [users, setUsers] = useState([]);
  const [selectedUserType, setSelectedUserType] = useState("");
  const [searchBarInput, setSearchBarInput] = useState("");

  async function getUsers() {
    try {
      const resUsers = selectedUserType
        ? await EndPoints.getUsersByType(selectedUserType)
        : await EndPoints.getUsers();

      setUsers(resUsers.data);
    } catch (error) {
      console.log(
        error?.response?.data?.message || "Erro interno no servidor."
      );
    }
  }

  async function deleteUser(id) {
    try {
      await EndPoints.deleteUser(id);
      alert("Usuário deletado com sucesso");
      getUsers();
    } catch (error) {
      console.log(error?.response?.data?.message);
    }
  }

  function handleSelectedUserType(e) {
    setSelectedUserType(e.target.value);
  }

  useEffect(() => {
    getUsers();
  }, [selectedUserType]);

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
            placeholder="Busque por nome..."
            onChange={(value) => setSearchBarInput(value)}
          />
          <Select onChange={(e) => handleSelectedUserType(e)}>
            <Option key="0" value="">
              Todos os tipos
            </Option>
            <Option key="1" value="Cliente">
              Clientes
            </Option>
            <Option key="2" value="Bibliotecário(a)">
              Bibliotecários(as)
            </Option>
            <Option key="3" value="Master">
              Masters
            </Option>
          </Select>
          <AddUserButton />
        </FiltersAndAddButtonWrapper>
        <TableHeaderWrapper>
          <Name>Nome</Name>
          <CPF>CPF</CPF>
          <Type>Tipo</Type>
        </TableHeaderWrapper>
        <UsersWrapper>
          {users
            ?.filter((user) =>
              user.name
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(searchBarInput)
            )
            .map((user) => (
              <UserCard key={user.id}>
                <Name
                  hover={true}
                  onClick={showModal}
                  style={{ cursor: "pointer" }}
                >
                  {user.name}
                </Name>
                <CPF>{user.cpf}</CPF>
                <Type>{user.type}</Type>

                {user.id !== Authenticated().id && (
                  <DeleteUserButton
                    className="material-icons"
                    onClick={() => deleteUser(user.id)}
                  >
                    person_remove
                  </DeleteUserButton>
                )}
              </UserCard>
            ))}
        </UsersWrapper>
      </Wrapper>
    </React.StrictMode>
  );
}
