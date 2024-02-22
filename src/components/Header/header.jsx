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
import { Authenticated } from "../../services/api/auth.js";

export default function Header() {
  const Navigate = useNavigate();

  const items = Authenticated()
    ? [
        {
          key: "1",
          label: <Link to="/">Home</Link>,
        },
        {
          key: "2",
          label: <Link to="catalago">Catálogo</Link>,
        },
        Authenticated() !== "Cliente" && {
          key: "3",
          label: <Link to="listaDeUsuarios">Usuários</Link>,
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
        <NavBar authenticated={Authenticated()}>
          <Link to="/">
            <Hover>Home</Hover>
          </Link>
          {Authenticated() && Authenticated().type !== "Cliente" && (
            <Link to="listaDeUsuarios">
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
        <LoginAndRegisterButtonsContainer authenticated={Authenticated()}>
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
        <ProfileAndNotificationsButtonsContainer
          authenticated={Authenticated()}
        >
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
            onClick={() => Navigate("/Notificacoes")}
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
