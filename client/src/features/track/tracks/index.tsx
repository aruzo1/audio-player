import { useEffect, useState } from "react";
import { tracksService } from "../service";
import { ITrack } from "../types";
import Track from "./track";
import { StyledTracks } from "./style";

function Tracks() {
  const [tracks, setTracks] = useState<ITrack[]>([]);

  useEffect(() => {
    tracksService.findAll().then((tracks) => setTracks(tracks));
  }, []);

  return (
    <StyledTracks>
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </StyledTracks>
  );
}

export default Tracks;
