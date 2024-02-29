import styled from "styled-components";
import { Colors } from "../../../../utils/defaultVariables";

export const Button = styled.button`
  width: 20%;
  min-width: 140px;
  height: 34px;
  background: ${Colors.ORANGE};
  font-family: Lora;
  color: ${Colors.WHITE};
  border: solid 1px;
  border-color: ${Colors.BROWN};
  border-radius: 0.625rem;
  float: right;

  @media (max-width: 735px) {
    width: 90%;
  }

  &:hover {
    background-color: ${Colors.BROWN};
  }
`;
