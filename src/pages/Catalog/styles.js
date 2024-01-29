import styled from "styled-components";
import { Colors, Font } from "../../utils/defaultVariables";

export const PageWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 86%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  box-sizing: border-box;
  overflow: auto;
`;

export const FiltersAndAddButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding-bottom: 10px;

  @media (max-width: 590px) {
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
  box-sizing: content-box;

  @media (max-width: 590px) {
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

export const BooksWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 80%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 200px));
  align-items: center;
  justify-content: center;
  column-gap: 2em;
  row-gap: 2em;
  box-sizing: border-box;
  overflow: auto;
`;

export const BookCard = styled.div`
  width: 200px;
  height: 260px;
  background-color: ${Colors.LIGHTBLUE};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 5%;
  padding-bottom: 5%;

  &:hover {
    width: 210px;
    height: 270px;
  }
`;

export const BookDescription = styled.div`
  color: ${Colors.WHITE};
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 90%;
`;

export const Image = styled.img`
  width: 90%;
  height: 85%;
  object-fit: cover;
`;
