import { useAudio } from "../audio-context";
import { ITrack } from "../types";

function Track({ track }: { track: ITrack }) {
  const { changeTrack } = useAudio()!;

  return (
    <li key={track.id}>
      <h3>{track.title}</h3>
      <button onClick={() => changeTrack(track)}>Play</button>
    </li>
  );
}

export default Track;
