import styled from "styled-components";
import { Colors } from "../../utils/defaultVariables";

export const PageWrapper = styled.div`
  width: 100%;
  height: 86%;
  padding: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    gap: 10px;
    justify-content: space-between;
    padding-bottom: 10px;
    height: auto;
  }
`;

export const InfoWrapper = styled.div`
  width: 25%;
  height: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  box-sizing: border-box;
  border: solid 3px ${Colors.ORANGE};
  border-radius: 0.5rem;
  color: ${Colors.WHITE};
  overflow-y: auto;
  overflow-x: hidden;

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

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 70%;
  border-radius: 0.5rem;
  object-fit: cover;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const AboutUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Title = styled.div`
  height: auto;
  font-size: 1.5rem;
  padding: 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-sizing: border-box;
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const TextAndIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-sizing: border-box;
`;
