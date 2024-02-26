import styled from "styled-components";
import 

export const Button = styled.input`
  width: 50%;
  min-width: 120px;
  height: 32px;
  background: ${Colors.ORANGE};
  font-family: Lora;
  color: ${Colors.WHITE};
  border: solid 1px;
  border-color: ${Colors.BROWN};
  border-radius: 0.625rem;
  margin-top: 2%;

  &:hover {
    background-color: ${Colors.BROWN};
  }
`;
