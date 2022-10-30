import Typography from "components/typography";
import { ITrack } from "features/tracks/types";
import { TrackCover, TrackImg, TrackInfo, StyledTrack } from "./style";

function Track({ track }: { track: ITrack }) {
  return (
    <StyledTrack>
      <TrackCover>
        <TrackImg src={track.coverUrl} alt={`${track.title} cover`} />
      </TrackCover>

      <TrackInfo>
        <Typography as="h3" variant="h4" truncate>
          {track.title}
        </Typography>
        
        <Typography as="span" truncate>
          {track.author}
        </Typography>
      </TrackInfo>
    </StyledTrack>
  );
}

export default Track;
