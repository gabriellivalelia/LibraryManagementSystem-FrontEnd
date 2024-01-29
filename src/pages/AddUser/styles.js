import styled from "styled-components";
import InputMask from "react-input-mask";
import { FormShields } from "../../utils/commomStyles";

export const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

export const Input = styled.input`
  ${FormShields}
`;

export const StyledPhoneInput = styled(InputMask)`
  ${FormShields}
`;

export const Select = styled.select`
  ${FormShields}
  padding: 0 1% 0 1%;
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
