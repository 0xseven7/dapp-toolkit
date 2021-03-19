import styled from "styled-components";
import React from "react";
const StyledModal = styled.div`
  background: #fff;
`;
const ModalHeader = styled.div``;
const ModalTitle = styled.div``;
interface Props {
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  bodyPadding: string;
}
const Modal: React.FC<Props> = ({ children, title }) => (
  <StyledModal>
    <ModalHeader>
      <ModalTitle>{title}</ModalTitle>

      {children}
    </ModalHeader>
  </StyledModal>
);
export default Modal;
