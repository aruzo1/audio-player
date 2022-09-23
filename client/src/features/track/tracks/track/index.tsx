import PlayButton from "components/play-button";
import { ITrack } from "../../types";
import useTrack from "./use-track";
import {
  Cover,
  CoverImg,
  CoverOverlap,
  Info,
  InfoAuthors,
  InfoTitle,
} from "./style";

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
        <InfoTitle>{track.title}</InfoTitle>
        <InfoAuthors>{track.author}</InfoAuthors>
      </Info>
    </li>
  );
}

export default Track;
