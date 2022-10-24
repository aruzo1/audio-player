import styled from "styled-components";

const HStack = styled.div<{ gap?: string; align?: "center" | "unset" }>`
  display: flex;
  align-items: ${({ align }) => (align ? align : "center")};
  gap: ${({ gap }) => gap};
`;

export default HStack;
