import styled from "styled-components";

const HStack = styled.div<{ gap?: string }>`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap};
`;

export default HStack;
