import React from "react";
import { PageWrapper } from "./styles";

export default function NotFound() {
  return (
    <React.StrictMode>
      <PageWrapper>
        <h1>Parece que a página que você está buscando não existe!</h1>
      </PageWrapper>
    </React.StrictMode>
  );
}
