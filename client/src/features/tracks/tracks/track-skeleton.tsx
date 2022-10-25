import VStack from "components/v-stack";
import styled from "styled-components";
import theme from "styles/theme";

const StyledTrackSkeleton = styled(VStack)`
  ${theme.animations.pulse}
`;

const TrackSkeltonImg = styled.div`
  width: 100%;
  border-radius: ${theme.radius.default};
  background: ${theme.colors.neutral[800]};
  aspect-ratio: 1/1;
`;

const TrackSkeletonTitle = styled.div`
  width: 75%;
  height: 1.25rem;
  border-radius: ${theme.radius.default};
  background: ${theme.colors.neutral[800]};
`;

const TrackSkeletonAuthor = styled.div`
  width: 50%;
  height: 15px;
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
