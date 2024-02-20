import React from "react";
import { PageWrapper } from "./styles";

export default function AcessDenied() {
  return (
    <React.StrictMode>
      <PageWrapper>
        <h1>Você não tem autorização para acessar essa página!</h1>
      </PageWrapper>
    </React.StrictMode>
  );
}
