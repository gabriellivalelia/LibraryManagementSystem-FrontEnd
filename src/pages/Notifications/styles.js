import styled from "styled-components";
import { Colors } from "../../utils/defaultVariables";

export const PageWrapper = styled.div`
  width: 100%;
  height: 86vh;
  padding: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;

  @media (max-width: 800px) {
    flex-direction: column;
    padding-bottom: 5%;
    gap: 1rem;
  }
`;

export const NotificationsWrapper = styled.div`
  width: 49%;
  height: 100%;
  box-sizing: border-box;
  border: solid 3px ${Colors.ORANGE};
  border-radius: 0.5rem;
  padding: 2%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 1rem;

  @media (max-width: 800px) {
    width: 100%;
    padding-bottom: 5%;
  }

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

export const Notification = styled.div`
  width: 100%;
  display: flex;
  text-align: left;
  flex-direction: row;
  align-items: flex-start;
  color: ${Colors.WHITE};
  gap: 10px;
`;
