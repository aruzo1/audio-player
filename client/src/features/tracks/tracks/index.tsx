import { ITrack } from "../types";
import Track from "./track";
import TrackSkeleton from "./track-skeleton";
import { StyledTracks } from "./style";

function Tracks({ tracks }: { tracks?: ITrack[] | null }) {
  return (
    <StyledTracks>
      {tracks?.map((track) => (
        <Track key={track.id} track={track} />
      ))}
      {tracks === undefined &&
        Array.from({ length: 6 }, (_, i) => <TrackSkeleton key={i} />)}
    </StyledTracks>
  );
}

export default Tracks;
