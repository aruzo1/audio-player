import useButtons from "./use-buttons";
import style from "./style.module.css";
import PauseIcon from "./icons/pause-icon";
import PlayIcon from "./icons/play-icon";

function Buttons() {
  const { isPlaying, play, pause } = useButtons();

  if (!isPlaying)
    return (
      <button className={style.play} onClick={play}>
        <PlayIcon />
      </button>
    );

  return (
    <button className={style.pause} onClick={pause}>
      <PauseIcon />
    </button>
  );
}

export default Buttons;
