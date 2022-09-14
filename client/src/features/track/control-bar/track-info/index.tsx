import { ITrack } from "features/track/types";
import style from "./style.module.css";

function TrackInfo({ track }: { track?: ITrack }) {
  return (
    <div className={style["track-info"]}>
      <img
        src="https://a.allegroimg.com/s1024/0c1554/c770339944b8811674bfd3ab42d8"
        alt="track image"
      />
      <div>
        <h2>{track?.title}</h2>
        <span>Malik Montana</span>
      </div>
    </div>
  );
}

export default TrackInfo;
