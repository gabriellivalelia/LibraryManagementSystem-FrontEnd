import styled from "styled-components";
import InputMask from "react-input-mask";

const FormShields = `
  width: 100%;
  height: 32px;
  padding: 2%;
  font-family: Lora;
  box-sizing: border-box;
  border-top: none;
  border-bottom: solid 3px #f0480c;
  border-right: none;
  border-left: none;
  background-color: transparent !important;
  color: white;

  &:focus {
    outline: none;
    border-bottom: solid 4px #f0480c;
  }

  &::-webkit-calendar-picker-indicator {
    font-size: 18px;
    background-color: #f0480c;
    border-radius: 0.25rem;
  }

`;

export const Wrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

export const FormWrapper = styled.div`
  width: 35%;
  height: 100%;
  background: #061c48;
  padding: 2%;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border: solid 3px #f0480c;
  border-radius: 3em;
  color: #f0480c;

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 560px) {
    width: 80%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8em;
  width: 100%;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 14px;
  width: 100%;
  gap: 5px;
`;

export const Input = styled.input`
  ${FormShields}
`;

export const Select = styled.select`
  ${FormShields}
  padding: 0 1% 0 1%;
`;

export const StyledPhoneInput = styled(InputMask)`
  ${FormShields}
`;

export const Option = styled.option`
  background-color: #061c48;
  color: white;
`;

export const LoginAndRegisterButtonsContainer = styled.div`
  width: 100%;
  background: transparent;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 460px) {
    flex-direction: column-reverse;
  }
`;

export const Button = styled.input`
  width: 35%;
  min-width: 100px;
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

  @media (max-width: 460px) {
    width: 70%;
  }
`;

export const LoaderBox = styled.div`
  width: 50%;
  min-width: 120px;
  height: 32px;
  background: #ffa40d;
  color: white;
  border: solid 1px;
  border-color: white;
  border-radius: 0.625rem;
  margin-top: 2%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.div`
  width: 100%;
  color: #9b8d10;
  font-size: 12px;
`;

export const TextButton = styled.button`
  padding-top: 2%;
  background: transparent;
  border: none;
  text-decoration: underline;

  &:hover {
    font-weight: bold;
  }
`;
