import styled from "styled-components";

const VStack = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
`;

export default VStack