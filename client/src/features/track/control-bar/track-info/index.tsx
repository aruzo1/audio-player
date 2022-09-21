import { ITrack } from "features/track/types";
import style from "./style.module.css";

function TrackInfo({ track }: { track?: ITrack }) {
  return (
    <div className={style["track-info"]}>
      <div className={style.img}>
        <img src={track?.coverUrl} alt={`${track?.title} cover`} />
      </div>
      <div className={style.text}>
        <h2 title={track?.title}>{track?.title}</h2>
        <span title={track?.author}>{track?.author}</span>
      </div>
    </div>
  );
}

export default TrackInfo;
