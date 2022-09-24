import styled from "styled-components";
import { borderRadius, colors } from "styles/theme";

export const StyledTrackInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Cover = styled.div`
  position: relative;
  height: 100%;
  max-height: 100%;
  aspect-ratio: 1/1;
`;

export const CoverImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${borderRadius};
`;

export const Info = styled.div`
  display: grid;
  margin-left: 1rem;
`;

export const InfoTitle = styled.h2`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 0.5rem;
  font-size: 18px;
  font-weight: 700;
`;

export const InfoAuthors = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
  color: ${colors.neutral[100]};
`;
