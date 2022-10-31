import { useEffect, useState } from "react";
import { tracksService } from "../service";
import { ITrack } from "../types";

function useAudioValue() {
  const [track, setTrack] = useState<ITrack>();
  const [audio, setAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    const trackId = localStorage.getItem("trackId");

    setAudio(() => {
      const audio = new Audio();

      if (trackId) {
        tracksService.findOne(trackId).then((track) => {
          setTrack(track);
          audio.src = track.trackUrl;
        });
      }

      return audio;
    });
  }, []);

  function changeTrack(track: ITrack) {
    setTrack(track);
    audio!.src = track.trackUrl;
    localStorage.setItem("trackId", track.id.toString());
  }

  return { audio, track, changeTrack };
}

export default useAudioValue;
