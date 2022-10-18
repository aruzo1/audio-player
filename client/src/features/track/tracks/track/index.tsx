import PlayButton from "components/play-button";
import { ITrack } from "../../types";
import useTrack from "./use-track";
import { Cover, CoverImg, CoverOverlap, Info } from "./style";
import Typography from "components/typography";

function Track({ track }: { track: ITrack }) {
  const { currentPlaying, trackAction } = useTrack(track);

  return (
    <li>
      <Cover>
        <CoverImg src={track.coverUrl} alt={`${track.title} cover`} />
        <CoverOverlap playing={currentPlaying}>
          <PlayButton
            variant="brand"
            playing={currentPlaying}
            onClick={trackAction}
          />
        </CoverOverlap>
      </Cover>
      <Info>
        <Typography as="h3" variant="h4" truncate={true}>
          {track.title}
        </Typography>
        <Typography as="span" truncate={true}>
          {track.author}
        </Typography>
      </Info>
    </li>
  );
}

export default Track;
