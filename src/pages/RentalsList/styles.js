import styled from "styled-components";
import { Colors, Font } from "../../utils/defaultVariables";

export const Wrapper = styled.div`
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TableHeaderWrapper = styled.div`
  width: 100%;
  padding: 2%;
  border-bottom: solid 3px ${Colors.ORANGE};
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${Colors.WHITE};
  text-align: center;
  font-size: 0.9rem;

  @media (max-width: 735px) {
    width: 90%;
  }
`;

export const Name = styled.div`
  width: 35%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 570px) {
    width: 50%;
  }

  &:hover {
    font-weight: ${(props) => props.hover && "bold"};
  }
`;

export const RentedBook = styled.div`
  width: calc(30% - 24px);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    font-weight: ${(props) => props.hover && "bold"};
  }

  @media (max-width: 570px) {
    width: 50%;
  }
`;

export const WaitingBook = styled.div`
  width: 70%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:hover {
    font-weight: ${(props) => props.hover && "bold"};
  }
`;

export const WaintingQuantity = styled.div`
  width: calc(30% - 24px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Date = styled.div`
  width: 17.5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 570px) {
    display: none;
  }
`;

export const RentalsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 2%;

  @media (max-width: 735px) {
    width: 90%;
  }
`;

export const RentalCard = styled.div`
  width: 100%;
  padding: 2%;
  border: solid 3px ${Colors.ORANGE};
  border-radius: 0.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  color: ${Colors.WHITE};
  text-align: center;
  font-size: 0.75rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const FiltersAndAddButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding-bottom: 10px;

  @media (max-width: 735px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const Select = styled.select`
  width: 20%;
  min-width: 140px;
  height: 32px;
  background-color: transparent;
  color: ${Colors.WHITE};
  border: solid 2px ${Colors.ORANGE};
  border-radius: 0.25rem;
  font-family: ${Font.FontFamily};
  box-sizing: border-box;

  @media (max-width: 735px) {
    width: 90%;
    min-width: 90%;
  }

  &:focus {
    border-width: 3px;
  }
`;

export const Option = styled.option`
  background-color: ${Colors.LIGHTBLUE};
  color: ${Colors.WHITE};
`;

export const IconButton = styled.i`
  cursor: pointer;

  &:hover {
    color: ${Colors.ORANGE};
  }
`;
