import { ITrack } from "features/track/types";
import style from "./style.module.css";

function TrackInfo({ track }: { track?: ITrack }) {
  return (
    <div className={style["track-info"]}>
      <div className={style.img}>
        <img
          src="https://i.scdn.co/image/ab6761610000e5ebde7885cffc35ab676e1191d7"
          alt="track image"
        />
      </div>
      <div className={style.text}>
        <h2>{track?.title}</h2>
        <span>Malik Montana</span>
      </div>
    </div>
  );
}

export default TrackInfo;
