import styled from "styled-components";
import React from "react";
import { OverlayTypes } from "./types";
const Overlay: React.FC = styled.div.attrs({
  role: "presentation",
})<OverlayTypes>`
  position: "fixed";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #452a7a;
  transition: opacity 0.4s;
  opacity: ${({ show }) => (show ? 0.6 : 0)};
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: ${({ show }) => (show ? "inital" : "none")};
`;

Overlay.defaultProps = {
  show: false,
  zIndex: 10,
};

export default Overlay;
