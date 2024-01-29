import { Modal } from "antd";
import { Colors, Font } from "./defaultVariables";
import styled from "styled-components";

export const FormShields = `
  width: 100%;
  height: 32px;
  padding: 2%;
  font-family: ${Font.FontFamily};
  box-sizing: border-box;
  border-top: none;
  border-bottom: solid 3px ${Colors.ORANGE};
  border-right: none;
  border-left: none;
  background-color: transparent !important;
  color: ${Colors.WHITE};

  &:focus {
    outline: none;
    border-bottom: solid 4px ${Colors.ORANGE};
  }

  &::-webkit-calendar-picker-indicator {
    font-size: 18px;
    background-color: ${Colors.ORANGE};
    border-radius: 0.25rem;
  }
`;

export const FormWrapper = styled.div`
  width: 35%;
  height: auto;
  background: ${Colors.BLUE};
  padding: 2% 2% 2% 2%;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border: solid 3px ${Colors.ORANGE};
  border-radius: 3em;

  @media (max-width: 1200px) {
    width: 50%;
  }

  @media (max-width: 560px) {
    width: 75%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  width: 100%;
`;

export const FormTitle = styled.div`
  font-size: 3rem;
  color: ${Colors.WHITE};
  font-family: Lora;
  padding-bottom: 2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: ${Colors.ORANGE};
  font-size: 14px;
  width: 100%;
  gap: 5px;
`;

export const SubmitButton = styled.input`
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

export const CancelButton = styled.input`
  width: 50%;
  min-width: 120px;
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
`;

export const ErrorMessage = styled.div`
  width: 100%;
  color: ${Colors.YELLOW};
  font-size: 12px;
`;

export const TextButton = styled.button`
  background: transparent;
  border: none;
  text-decoration: underline;
  color: ${Colors.WHITE};
  padding-top: 10px;

  &:hover {
    font-weight: bold;
  }
`;

/* export const LoaderBox = styled.div`
  width: 50%;
  min-width: 120px;
  height: 32px;
  background: #f0480c;
  color: white;
  border: solid 1px;
  border-color: #913211;
  border-radius: 0.625rem;
  margin-top: 2%;

  display: flex;
  justify-content: center;
  align-items: center;
`; */

export const CustomModal = styled(Modal)`
  .ant-modal-content {
    background-color: ${Colors.LIGHTBLUE};
    background-clip: padding-box;
    border-radius: 8px;
    box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.1),
      0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    padding: 20px 24px;
    color: ${Colors.WHITE};
  }
`;
