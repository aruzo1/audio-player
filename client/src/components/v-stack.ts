import styled from "styled-components";

const VStack = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${({ gap }) => gap};
`;

export default VStack