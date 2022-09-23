import { ITrack } from "features/track/types";
import {
  Cover,
  CoverImg,
  Info,
  InfoAuthors,
  InfoTitle,
  StyledTrackInfo,
} from "./style";

function TrackInfo({ track }: { track?: ITrack }) {
  return (
    <StyledTrackInfo>
      <Cover>
        <CoverImg src={track?.coverUrl} alt={`${track?.title} cover`} />
      </Cover>
      <Info>
        <InfoTitle title={track?.title}>{track?.title}</InfoTitle>
        <InfoAuthors title={track?.author}>{track?.author}</InfoAuthors>
      </Info>
    </StyledTrackInfo>
  );
}

export default TrackInfo;
