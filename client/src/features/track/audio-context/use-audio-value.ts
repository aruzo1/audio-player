import { useEffect, useMemo, useState } from "react";
import { tracksService } from "../service";
import { ITrack } from "../types";

function useAudioValue() {
  const [track, setTrack] = useState<ITrack>();
  const audio = useMemo(() => new Audio(), []);

  useEffect(() => {
    const trackId = localStorage.getItem("trackId");

    if (trackId) {
      tracksService.findOne(trackId).then((track) => {
        setTrack(track);
        audio.src = track.trackUrl;
      });
    }
  }, [audio]);

  function changeTrack(track: ITrack) {
    setTrack(track);
    audio.src = track.trackUrl;
    localStorage.setItem("trackId", track.id.toString());
  }

  return { audio, track, changeTrack };
}

export default useAudioValue;
