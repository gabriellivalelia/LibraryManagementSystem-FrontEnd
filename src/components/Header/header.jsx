import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HeaderWrapper,
  ImageWrapper,
  NavBar,
  LoginAndRegisterButtonsContainer,
  ProfileAndNotificationsButtonsContainer,
  Image,
  Button,
  DropDownContainer,
  Hover,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import Dropdown from "antd/es/dropdown/dropdown";
import { MenuOutlined } from "@ant-design/icons";

export default function Header() {
  const authenticated =
    localStorage.getItem("tokenAcess") !== null &&
    localStorage.getItem("tokenAcess") !== "undefined" &&
    localStorage.getItem("tokenAcess") !== ""
      ? true
      : false;
  const userType = "Master";
  const Navigate = useNavigate();

  const items = authenticated
    ? [
        {
          key: "1",
          label: <Link to="/">Home</Link>,
        },
        {
          key: "2",
          label: <Link to="catalago">Catálogo</Link>,
        },
        userType === "Master" && {
          key: "3",
          label: <Link to="/">Usuários</Link>,
        },
        {
          key: "4",
          label: <Link to="perfil">Meu Perfil</Link>,
        },
        {
          key: "5",
          label: <Link to="/">Notificações</Link>,
        },
      ]
    : [
        {
          key: "1",
          label: <Link to="/Login">Login</Link>,
        },
        {
          key: "2",
          label: <Link to="/Cadastro">Cadastre-se</Link>,
        },
      ];

  return (
    <React.StrictMode>
      <HeaderWrapper>
        <ImageWrapper>
          <Image src={Logo} />
        </ImageWrapper>
        <NavBar authenticated="true">
          <Link to="/">
            <Hover>Home</Hover>
          </Link>
          {(userType === "Master" || userType === "Librarian") && (
            <Link to="/">
              <Hover>Usuários</Hover>
            </Link>
          )}
          <Link to="catalogo">
            <Hover>Catálogo</Hover>
          </Link>
        </NavBar>
        <DropDownContainer>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
          >
            <i
              className="material-icons"
              style={{ fontSize: "2.5rem", cursor: "pointer", color: "white" }}
              onMouseOver={(e) => (e.target.style.color = "#f0480c")}
              onMouseOut={(e) => (e.target.style.color = "white")}
            >
              list
            </i>
          </Dropdown>
        </DropDownContainer>
        <LoginAndRegisterButtonsContainer authenticated={!authenticated}>
          <Button
            Background="white"
            Color="#913211"
            Border="#913211 "
            onClick={() => Navigate("/Login")}
          >
            LOGIN
          </Button>

          <Button
            Background="#F0480C"
            Color="white"
            Border="#913211"
            onClick={() => Navigate("/Cadastro")}
          >
            CADASTRE-SE
          </Button>
        </LoginAndRegisterButtonsContainer>
        <ProfileAndNotificationsButtonsContainer authenticated={authenticated}>
          <i
            onClick={() => Navigate("/perfil")}
            className="material-icons"
            style={{ fontSize: "2.5rem", cursor: "pointer" }}
            onMouseOver={(e) => (e.target.style.color = "white")}
            onMouseOut={(e) => (e.target.style.color = "#f0480c")}
          >
            account_circle
          </i>
          <i
            onClick={() => Navigate("/Cadastro")}
            className="material-icons"
            style={{ fontSize: "2.5rem", cursor: "pointer" }}
            onMouseOver={(e) => (e.target.style.color = "white")}
            onMouseOut={(e) => (e.target.style.color = "#f0480c")}
          >
            circle_notifications
          </i>
        </ProfileAndNotificationsButtonsContainer>
      </HeaderWrapper>
    </React.StrictMode>
  );
}
