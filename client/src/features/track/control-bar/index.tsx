import { useAudio } from "../audio-context";
import TrackInfo from "./track-info";
import TrackControler from "./track-controler";
import VolumeControler from "./volume-controler";
import { ControlBarContainer, StyledControlBar } from "./style";

function ControlBar() {
  const { track } = useAudio()!;

  return (
    <StyledControlBar>
      <ControlBarContainer>
        <TrackInfo track={track} />
        <TrackControler />
        <VolumeControler />
      </ControlBarContainer>
    </StyledControlBar>
  );
}

export default ControlBar;
