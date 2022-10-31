import styled, { CSSProperties } from "styled-components";

interface Props {
  gap?: string;
  justify?: CSSProperties["justifyContent"];
  align?: CSSProperties["alignItems"];
}

const HStack = styled.div<Props>`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => (align ? align : "center")};
  gap: ${({ gap }) => gap};
`;

export default HStack;
