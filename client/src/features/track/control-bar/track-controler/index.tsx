import Buttons from "./buttons";
import ProgressBar from "./progress-bar";
import style from "./style.module.css";

function TrackControler() {
  return (
    <div className={style["track-controler"]}>
      <Buttons />
      <ProgressBar />
    </div>
  );
}

export default TrackControler;
