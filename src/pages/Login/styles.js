import styled from "styled-components";

const FormShields = `
  width: 100%;
  height: 32px;
  padding: 2%;
  font-family: Lora;
  box-sizing: border-box;
  border-top: none;
  border-bottom: solid 3px #f0480c;
  border-right: none;
  border-left: none;
  background-color: transparent !important;
  color: white;

  &:focus {
    outline: none;
    border-bottom: solid 4px #f0480c;
  }

  

`;

export const Wrapper = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

export const FormWrapper = styled.div`
  width: 35%;
  height: 100%;
  background: #061c48;
  padding: 2% 2% 2% 2%;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border: solid 3px #f0480c;
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

export const Input = styled.input`
  ${FormShields}
`;

export const SubmitButton = styled.input`
  width: 50%;
  min-width: 120px;
  height: 32px;
  background: #f0480c;
  color: white;
  border: solid 1px;
  border-color: #913211;
  border-radius: 0.625rem;
  margin-top: 2%;

  &:hover {
    background-color: #913211;
  }
`;

export const Message = styled.div`
  width: 100%;
  color: #9b8d10;
  font-size: 12px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #f0480c;
  font-size: 14px;
  width: 100%;
  gap: 5px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 5%;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  text-decoration: underline;
  color: white;

  &:hover {
    font-weight: bold;
  }
`;

export const LoaderBox = styled.div`
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
`;
