import styled from "styled-components";

interface Props {
  gap?: string;
  align?: "center" | "initial";
  justify?: "space-between";
}

const HStack = styled.div<Props>`
  display: flex;
  ${({ justify }) => justify && `justify-content: ${justify};`}
  align-items: ${({ align }) => (align ? align : "center")};
  gap: ${({ gap }) => gap};
`;

export default HStack;
