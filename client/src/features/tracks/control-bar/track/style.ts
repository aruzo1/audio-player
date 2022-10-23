import styled from "styled-components";
import theme from "styles/theme";

export const StyledTrack = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TrackCover = styled.div`
  position: relative;
  height: 4rem;
  aspect-ratio: 1/1;
`;

export const TrackImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${theme.radius.default};
  object-fit: cover;
`;

export const TrackInfo = styled.div`
  display: grid;
  width: 7.5rem;

  @media (max-width: ${theme.devices.md}) {
    width: 100%;
  }
`;
