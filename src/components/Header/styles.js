import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 14%;
  background: transparent;
  padding-left: 2%;
  padding-top: 1%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const ImageWrapper = styled.div`
  height: 100%;
  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  height: 60px;

  @media (max-width: 500px) {
    height: 60px;
  }
`;

export const NavBar = styled.div`
  width: 85%;
  background: transparent;

  display: ${(props) => (props.authenticated ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-around;

  a:-webkit-any-link {
    font-size: 1.1em;
    color: white;
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 620px) {
    display: none;
  }
`;

export const Hover = styled.div`
  &:hover {
    font-weight: bold;
  }
`;

export const LoginAndRegisterButtonsContainer = styled.div`
  width: 30%;
  background: transparent;
  height: 100%;

  display: ${(props) => (props.authenticated && "none") || "flex"};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5%;

  @media (max-width: 620px) {
    display: none;
  }
`;

export const ProfileAndNotificationsButtonsContainer = styled.div`
  width: auto;
  background: transparent;
  height: 100%;

  display: ${(props) => (props.authenticated && "none") || "flex"};
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 10%;
  padding-right: 2%;

  color: #f0480c;

  @media (max-width: 620px) {
    display: none;
  }
`;

export const Button = styled.button`
  width: 30%;
  min-width: 140px;
  height: 32px;
  border-radius: 0.5rem;
  font-family: "Lora";
  background: ${(props) => props.Background};
  border: 1px solid ${(props) => props.Border};
  color: ${(props) => props.Color};

  &:hover {
    background-color: #913211;
    color: white;
  }
`;

export const DropDownContainer = styled.div`
  display: none;

  @media (max-width: 620px) {
    display: block;
    padding-right: 5%;
  }
`;
