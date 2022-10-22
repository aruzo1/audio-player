import usePromise from "hooks/use-promise";
import { tracksService } from "../service";
import { ITrack } from "../types";
import Track from "./track";
import { StyledTracks } from "./style";
import TrackSkeleton from "./track-skeleton";

function Tracks() {
  const { value: tracks, loading } = usePromise<ITrack[]>(tracksService.findAll);

  return (
    <StyledTracks>
      {tracks?.map((track) => (
        <Track key={track.id} track={track} />
      ))}
      {loading &&
        Array.from({ length: 6 }, (_, i) => <TrackSkeleton key={i} />)}
    </StyledTracks>
  );
}

export default Tracks;
