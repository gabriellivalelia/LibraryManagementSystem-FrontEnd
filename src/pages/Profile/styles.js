import styled from "styled-components";
import { Colors } from "../../utils/defaultVariables";

export const PageWrapper = styled.div`
  width: 100%;
  min-height: 600px;
  height: 86%;
  padding: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 800px) {
    flex-direction: column;
    padding-bottom: 5%;
  }
`;

export const LeftWrapper = styled.div`
  width: 35%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border: solid 3px ${Colors.ORANGE};
  border-radius: 0.5rem;
  gap: 15px;
  //position: relative;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const DataWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: start;
`;

export const Label = styled.div`
  width: 100%;
  color: ${Colors.ORANGE};
  font-size: 1rem;
`;

export const Value = styled.div`
  width: 100%;
  color: ${Colors.WHITE};
  font-size: 0.75rem;
  font-weight: bold;
  padding-bottom: 1%;
  border-bottom: solid 3px ${Colors.ORANGE};
`;

export const Buttons = styled.div`
  width: 100%;
  padding: 10% 0 0 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;

  @media (min-width: 800px && max-width: 980px) {
    flex-direction: column;
  }
`;

export const LogoutButton = styled.button`
  width: 50%;
  min-width: 100px;
  height: 32px;
  background: ${Colors.WHITE};
  font-family: Lora;
  color: ${Colors.ORANGE};
  border: solid 1px;
  border-color: ${Colors.BROWN};
  border-radius: 0.625rem;
  margin-top: 2%;

  &:hover {
    background-color: ${Colors.BROWN};
    color: ${Colors.WHITE};
  }

  @media (min-width: 800px && max-width: 980px) {
    width: 100%;
  }
`;

export const EditUserButton = styled.button`
  width: 50%;
  min-width: 100px;
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

  @media (minwidth: 800px && max-width: 980px) {
    width: 100%;
  }
`;

export const RightWrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 800px) {
    width: 100%;
    padding-top: 5%;
    gap: 10px;
    padding-bottom: 5%;
  }
`;

export const BooksWrapper = styled.div`
  width: 100%;
  height: 40%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  border: solid 3px ${Colors.ORANGE};
  box-sizing: border-box;
  border-radius: 0.5rem;
  box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  overflow-x: hidden;
  gap: 5px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${Colors.WHITE};
    border-radius: 20px;
    border: 3px solid ${Colors.BLUE};
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 2rem;
  color: ${Colors.ORANGE};
`;

export const Book = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${Colors.WHITE};
  gap: 10px;
`;
