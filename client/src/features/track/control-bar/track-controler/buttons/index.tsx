import useButtons from "./use-buttons";
import style from "./style.module.css";
import PauseIcon from "./icons/pause-icon";
import PlayIcon from "./icons/play-icon";

function Buttons() {
  const { playing, play, pause } = useButtons();

  if (!playing)
    return (
      <button className={`btn ${style.play}`} onClick={play}>
        <PlayIcon />
      </button>
    );

  return (
    <button className={`btn ${style.pause}`} onClick={pause}>
      <PauseIcon />
    </button>
  );
}

export default Buttons;
