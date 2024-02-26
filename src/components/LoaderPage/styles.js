import styled from "styled-components";
import { Colors } from "../../utils/defaultVariables";
import { LoadingOutlined } from "@ant-design/icons";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(LoadingOutlined)`
  color: ${Colors.ORANGE};
  font-size: 4rem;
`;
