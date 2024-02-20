import React from "react";
import { PageWrapper } from "./styles";

export default function NotAuthenticated() {
  return (
    <React.StrictMode>
      <PageWrapper>
        <h1>Você deve fazer Login para acessar essa página!</h1>
      </PageWrapper>
    </React.StrictMode>
  );
}
