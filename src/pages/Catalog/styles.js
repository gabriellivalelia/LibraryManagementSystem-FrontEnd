import styled from "styled-components";
import { Modal } from "antd";

export const PageWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  box-sizing: border-box;
  position: relative;
  overflow: auto;
`;

export const CustomModal = styled(Modal)`
  .ant-modal-content {
    background-color: #2c4370;
    background-clip: padding-box;
    border-radius: 8px;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.1),
      0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    padding: 20px 24px;
    color: white;
  }
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

export const SearchBarWrapper = styled.div`
  width: 30%;
  min-width: 400px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: solid 2px #f0480c;
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
  color: white;

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
  color: #f0480c;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Select = styled.select`
  width: 20%;
  min-width: 140px;
  height: 32px;
  background-color: transparent;
  color: white;
  border: solid 2px #f0480c;
  border-radius: 0.25rem;
  font-family: Lora;
  box-sizing: content-box;

  @media (max-width: 590px) {
    width: 90%;
    min-width: 90%;
  }

  &:focus {
    border: solid 3px #f0480c;
  }
`;

export const Option = styled.option`
  background-color: #061c48;
  color: white;
`;

export const BooksWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 85%;
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
  background-color: #2c4370;
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
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 180px;
`;

export const Image = styled.img`
  width: 90%;
  height: 85%;
  object-fit: cover;
`;
