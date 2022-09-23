import styled from "styled-components";
import { borderRadius, colors } from "styles/theme";

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
  border-radius: ${borderRadius} ${borderRadius} 0 0;
`;

export const CoverOverlap = styled.div<{ playing: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: ${({ playing }) => (playing ? 1 : 0)};
  border-radius: ${borderRadius} ${borderRadius} 0 0;
  background: ${colors.brand[200]}3F;
  transition: opacity 0.1s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const Info = styled.div`
  display: grid;
  padding: 1rem;
  border-radius: 0 0 ${borderRadius} ${borderRadius};
  background: ${colors.neutral[400]};
`;

export const InfoTitle = styled.h3`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 18px;
  font-weight: 700;
`;

export const InfoAuthors = styled.span`
  margin-top: 0.5rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${colors.neutral[100]};
`;
