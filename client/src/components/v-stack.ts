import styled from "styled-components";

const VStack = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: ${({ gap }) => gap};
`;

export default VStack;
