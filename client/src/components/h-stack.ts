import styled from "styled-components";

const HStack = styled.div<{ gap?: string }>`
  display: flex;
  gap: ${({ gap }) => gap};
`;

export default HStack;
