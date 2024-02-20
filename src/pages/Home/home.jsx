import React from "react";
import {
  PageWrapper,
  InfoWrapper,
  Image,
  Title,
  TextAndIcon,
  DataWrapper,
  AboutUsWrapper,
} from "./styles";
import HomeImage from "../../assets/HomeImage.jpg";
import { Colors } from "../../utils/defaultVariables";
export default function Home() {
  return (
    <React.StrictMode>
      <PageWrapper>
        <InfoWrapper>
          <AboutUsWrapper>
            <Title>
              <i className="material-icons">info</i>
              <>Sobre Nós</>
            </Title>
            <div style={{ fontSize: "1.1rem" }}>
              Oferecemos uma vasta coleção de obras que abrangem desde clássicos
              atemporais até as mais recentes novidades. Comprometidos em ser um
              centro vital de aprendizado e cultura. Venha nos visitar e
              deixe-se envolver pela magia da leitura.
            </div>
          </AboutUsWrapper>
          <DataWrapper>
            <TextAndIcon>
              <i className="material-icons" style={{ color: Colors.ORANGE }}>
                location_on
              </i>
              <>
                Rua Correia de Araújo, 18. Bairro Ouro Preto, Belo Horizonte/MG
              </>
            </TextAndIcon>
            <TextAndIcon>
              <i className="material-icons" style={{ color: Colors.ORANGE }}>
                mail
              </i>
              <div style={{ textDecoration: "underline" }}>
                library@hotmail.com
              </div>
            </TextAndIcon>
            <TextAndIcon>
              <i className="material-icons" style={{ color: Colors.ORANGE }}>
                call
              </i>
              <>(31) 99934-8537</>
            </TextAndIcon>
          </DataWrapper>
        </InfoWrapper>
        <Image src={HomeImage} />
      </PageWrapper>
    </React.StrictMode>
  );
}
