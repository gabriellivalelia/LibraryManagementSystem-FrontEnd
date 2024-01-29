import styled from "styled-components";
import { Colors } from "../../utils/defaultVariables";

export const SearchBarWrapper = styled.div`
  width: 30%;
  min-width: 400px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: solid 2px ${Colors.ORANGE};
  border-radius: 0.25rem;

  @media (max-width: 590px) {
    width: 90%;
    min-width: 90%;
  }

  &:focus-within {
    border: solid 3px #f0480c;
  }
`;

export const SearchBarInput = styled.input`
  width: calc(100% - 40px);
  min-width: 360px;
  height: 32px;
  background-color: transparent;
  border: none;
  font-family: Lora;
  color: ${Colors.WHITE};
  padding-left: 2%;

  @media (max-width: 590px) {
    width: calc(100% - 40px);
    min-width: calc(100% - 40px);
  }

  &:focus {
    outline: none;
  }
`;

export const SearchBarImage = styled.div`
  width: 40px;
  height: 32px;
  color: ${Colors.ORANGE};
  display: flex;
  justify-content: center;
  align-items: center;
`;
