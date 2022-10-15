import styled from "styled-components";
import theme from "styles/theme";

export const StyledTrackInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Cover = styled.div`
  position: relative;
  height: 4rem;
  aspect-ratio: 1/1;
`;

export const CoverImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${theme.radius.default};
`;

export const Info = styled.div`
  display: grid;
  min-width: 7.5rem;
`;
