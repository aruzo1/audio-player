import PlayButton from "components/play-button";
import useButtons from "./use-buttons";

function Buttons() {
  const { playing, play, pause } = useButtons();

  return <PlayButton playing={playing} onClick={playing ? pause : play} />;
}

export default Buttons;
