import { useAudio } from "../audio-context";
import TrackInfo from "./track-info";
import TrackControler from "./track-controler";
import VolumeControler from "./volume-controler";
import { StyledControlBar } from "./style";

function ControlBar() {
  const { track } = useAudio()!;

  return (
    <StyledControlBar>
      <TrackInfo track={track} />
      <TrackControler />
      <VolumeControler />
    </StyledControlBar>
  );
}

export default ControlBar;
