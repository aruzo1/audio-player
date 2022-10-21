import PlayButton from "components/play-button";
import { ITrack } from "../../types";
import useTrack from "./use-track";
import Typography from "components/typography";
import { TrackCover, TrackImg, TrackOverlap, TrackInfo } from "./style";

function Track({ track }: { track: ITrack }) {
  const { currentPlaying, trackAction } = useTrack(track);

  return (
    <li>
      <TrackCover>
        <TrackImg src={track.coverUrl} alt={`${track.title} cover`} />
        <TrackOverlap playing={currentPlaying}>
          <PlayButton
            variant="brand"
            playing={currentPlaying}
            onClick={trackAction}
          />
        </TrackOverlap>
      </TrackCover>
      <TrackInfo>
        <Typography as="h3" variant="h4" truncate={true}>
          {track.title}
        </Typography>
        <Typography as="span" truncate={true}>
          {track.author}
        </Typography>
      </TrackInfo>
    </li>
  );
}

export default Track;
