import VStack from "components/v-stack";
import styled from "styled-components";
import theme from "styles/theme";

const StyledTrackSkeleton = styled(VStack)`
  animation: pulse 2s ease-in-out infinite;

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }
`;

const TrackSkeltonImg = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background: ${theme.colors.neutral[800]};
  border-radius: ${theme.radius.default};
`;

const TrackSkeletonTitle = styled.div`
  width: 75%;
  height: 1.5rem;
  background: ${theme.colors.neutral[800]};
  border-radius: ${theme.radius.default};
`;

const TrackSkeletonAuthor = styled.div`
  width: 50%;
  height: 1rem;
  background: ${theme.colors.neutral[800]};
  border-radius: ${theme.radius.default};
`;

function TrackSkeleton() {
  return (
    <StyledTrackSkeleton gap="0.5rem">
      <TrackSkeltonImg />
      <TrackSkeletonTitle />
      <TrackSkeletonAuthor />
    </StyledTrackSkeleton>
  );
}

export default TrackSkeleton;
