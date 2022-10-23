import { ITrack } from "../types";
import Track from "./track";
import { StyledTracks } from "./style";
import TrackSkeleton from "./track-skeleton";
import useQuery from "hooks/use-query";

function Tracks() {
  const { value: tracks, loading } = useQuery<ITrack[]>("tracks");

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
