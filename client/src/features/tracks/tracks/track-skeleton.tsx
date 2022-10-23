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
  border-radius: ${theme.radius.default};
  background: ${theme.colors.neutral[800]};
  aspect-ratio: 1/1;
`;

const TrackSkeletonTitle = styled.div`
  width: 75%;
  height: 1.5rem;
  border-radius: ${theme.radius.default};
  background: ${theme.colors.neutral[800]};
`;

const TrackSkeletonAuthor = styled.div`
  width: 50%;
  height: 1rem;
  border-radius: ${theme.radius.default};
  background: ${theme.colors.neutral[800]};
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
