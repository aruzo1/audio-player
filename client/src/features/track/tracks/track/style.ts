import styled from "styled-components";
import theme from "styles/theme";

export const TrackCover = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;

  &:hover > .track-overlap {
    opacity: 1;
  }
`;

export const TrackImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${theme.radius.default};
`;

export const TrackOverlap = styled.div<{ playing: boolean }>`
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
`;

export const TrackMenu = styled.div<{ visible: boolean }>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  transition: opacity ${theme.transition};
`;

export const TrackMenuContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  background: ${theme.colors.neutral[800]};
  border-radius: ${theme.radius.default};
`;

export const TrackInfo = styled.div`
  display: grid;
  margin-top: 0.5rem;
`;
