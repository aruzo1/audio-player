import { useAudio } from "../audio-context";
import TrackInfo from "./track-info";
import VolumeControler from "./volume-controler";
import ProgressBar from "./progress-bar";
import Buttons from "./buttons";
import { ControlBarContainer, StyledControlBar } from "./style";

function ControlBar() {
  const { track } = useAudio()!;

  if (!track) return null;

  return (
    <StyledControlBar>
      <ControlBarContainer>
        <TrackInfo track={track} />
        <Buttons />
        <ProgressBar />
        <VolumeControler />
      </ControlBarContainer>
    </StyledControlBar>
  );
}

export default ControlBar;
