import { useTracks } from "../tracks-context";
import Track from "./track";

function Tracks() {
  const { tracks } = useTracks()!;

  return (
    <ul>
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </ul>
  );
}

export default Tracks;
