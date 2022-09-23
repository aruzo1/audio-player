import { useTracks } from "../tracks-context";
import Track from "./track";
import { StyledTracks } from "./style";

function Tracks() {
  const { tracks } = useTracks()!;

  return (
    <StyledTracks>
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </StyledTracks>
  );
}

export default Tracks;
