import Typography from "components/typography";
import { ITrack } from "features/track/types";
import { Cover, CoverImg, Info, StyledTrackInfo } from "./style";

function TrackInfo({ track }: { track: ITrack }) {
  return (
    <StyledTrackInfo>
      <Cover>
        <CoverImg src={track.coverUrl} alt={`${track.title} cover`} />
      </Cover>
      <Info>
        <Typography as="h3" variant="h4" truncate={true}>
          {track.title}
        </Typography>
        <Typography as="span" truncate={true}>
          {track.author}
        </Typography>
      </Info>
    </StyledTrackInfo>
  );
}

export default TrackInfo;
