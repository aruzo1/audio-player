import styled from "styled-components";
import theme from "styles/theme";

export const Cover = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
`;

export const CoverImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${theme.radius.default};
`;

export const CoverOverlap = styled.div<{ playing: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: ${({ playing }) => (playing ? 1 : 0)};
  border-radius: ${theme.radius.default};
  background: ${theme.colors.brand[600]}3F;
  transition: opacity ${theme.transition};

  &:hover {
    opacity: 1;
  }
`;

export const Info = styled.div`
  display: grid;
  margin-top: 0.5rem;
`;
