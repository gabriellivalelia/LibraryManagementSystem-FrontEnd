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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </AboutUsWrapper>
          <DataWrapper>
            <TextAndIcon>
              <i className="material-icons" style={{ color: Colors.ORANGE }}>
                location_on
              </i>
              <>
                Rua Zilah Correia de Araújo, 345. Bairro Ouro Preto, Belo
                Horizonte/MG
              </>
            </TextAndIcon>
            <TextAndIcon>
              <i className="material-icons" style={{ color: Colors.ORANGE }}>
                mail
              </i>
              <>library@hotmail.com</>
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
