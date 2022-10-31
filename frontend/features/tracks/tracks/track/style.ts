import styled from "styled-components";
import theme from "styles/theme";

export const TrackCover = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;

  &:hover > .track-overlap,
  &:hover > .track-menu {
    opacity: 1;
  }
`;

export const TrackImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${theme.radius.default};
  object-fit: cover;
`;

export const TrackOverlap = styled.div<{ playing: boolean }>`
  display: flex;
  opacity: ${({ playing }) => (playing ? 1 : 0)};
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: ${theme.radius.default};
  background: ${theme.colors.brand[600]}3F;
  transition: opacity ${theme.transition};
`;

export const TrackMenu = styled.div<{ visible: boolean }>`
  display: flex;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  flex-direction: column;
  align-items: flex-end;
  transition: opacity ${theme.transition};
  gap: 0.5rem;
`;

export const TrackMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  border-radius: ${theme.radius.default};
  background: ${theme.colors.neutral[800]};
  gap: 0.5rem;
`;

export const TrackInfo = styled.div`
  display: grid;
  margin-top: 0.5rem;
`;
