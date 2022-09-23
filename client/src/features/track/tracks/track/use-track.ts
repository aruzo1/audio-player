import { useEffect } from "react";
import { useAudio } from "features/track/audio-context";
import { ITrack } from "features/track/types";
import useForceUpdate from "hooks/use-force-update";

function useTrack(track: ITrack) {
  const { audio, track: playingTrack, changeTrack } = useAudio()!;
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    audio.addEventListener("play", forceUpdate);
    audio.addEventListener("pause", forceUpdate);

    return () => {
      audio.removeEventListener("play", forceUpdate);
      audio.removeEventListener("pause", forceUpdate);
    };
  }, [audio, forceUpdate]);

  function trackAction() {
    if (track.id !== playingTrack?.id) {
      changeTrack(track);
      audio.play();
    } else if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  return {
    currentPlaying: !audio.paused && track.id === playingTrack?.id,
    trackAction,
  };
}

export default useTrack;
