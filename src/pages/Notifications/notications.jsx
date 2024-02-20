import React from "react";
import {
  NotificationsWrapper,
  PageWrapper,
  Title,
  Notification,
} from "./styles";
import { Example } from "./example";
import { Colors } from "../../utils/defaultVariables";
import { CustomModal } from "../../utils/commomStyles";
import { useState } from "react";

export default function Notifications() {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <React.StrictMode>
      <PageWrapper>
        <CustomModal
          open={open}
          onCancel={handleCancel}
          centered="true"
          footer={null}
        ></CustomModal>
        <NotificationsWrapper>
          <Title>Lista de Espera</Title>
          {Example.map((notification) => (
            <Notification onClick={showModal}>
              <i className="material-icons" style={{ color: Colors.ORANGE }}>
                notifications
              </i>
              <>
                O título {notification.title} que você estava aguardando está
                disponível, alugue-o até 15/03/2024.
              </>
            </Notification>
          ))}
        </NotificationsWrapper>
        <NotificationsWrapper>
          <Title>Prazo de Devolução</Title>
          {Example.map((notification) => (
            <Notification onClick={showModal}>
              <i className="material-icons" style={{ color: Colors.ORANGE }}>
                notifications
              </i>
              <>
                O título {notification.title} que você alugou deve ser devolvido
                até o dia 15/03/2024. Sujeito a multa caso contrário.
              </>
            </Notification>
          ))}
        </NotificationsWrapper>
      </PageWrapper>
    </React.StrictMode>
  );
}
