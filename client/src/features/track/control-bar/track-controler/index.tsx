import Buttons from "./buttons";
import ProgressBar from "./progress-bar";
import style from "./style.module.css";

function TrackControler() {
  return (
    <div className={style["track-control"]}>
      <Buttons />
      <ProgressBar />
    </div>
  );
}

export default TrackControler;
