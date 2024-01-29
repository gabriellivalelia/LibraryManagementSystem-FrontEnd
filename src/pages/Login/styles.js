import styled from "styled-components";
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

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5%;
`;
