import React, { createContext, useState, ReactNode } from "react";
import styled from "styled-components";
import { Overlay } from "./Overlay";

interface ModalsContext {
  onPresent: (node: ReactNode, key: string) => void;
  onDismiss: () => void;
}
export const Context = createContext<ModalsContext>({
  onPresent: () => null,
  onDismiss: () => null,
  setCloseOnOverlayClick: () => true,
});
const ModalWrapper = styled.div``;
const ModalProvider: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalNode, setModalNode] = useState<React.ReactNode>();

  const [closeOnOverlyClick, setCloseOnOverlyClick] = useState(false);
  const handlePresent = (node: React.ReactNode) => {
    setModalNode(node);
    setIsOpen(true);
  };

  const handleDismiss = () => {
    setModalNode(undefined);
    setIsOpen(false);
  };
  const handleOverlyDismiss = () => {
    if (closeOnOverlyClick) {
      setCloseOnOverlyClick(false);
    }
  };

  return (
    <Context.Provider
      value={{
        onPresent: handlePresent,
        onDismiss: handleDismiss,
        setCloseOnOverlyClick,
      }}
    >
      {isOpen && (
        <ModalWrapper>
          <Overlay show onClick={handleOverlyDismiss} />

          {React.isValidElement(modalNode) &&
            React.cloneElement(modalNode, {
              onDismiss: handleDismiss,
            })}
        </ModalWrapper>
      )}
    </Context.Provider>
  );
};
