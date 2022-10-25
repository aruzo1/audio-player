import { useEffect } from "react";
import useForceUpdate from "hooks/use-force-update";
import useAudio from "features/tracks/audio-context";
import { tracksService } from "features/tracks/service";

function useButtons() {
  const forceUpdate = useForceUpdate();
  const { audio, track, changeTrack } = useAudio()!;

  useEffect(() => {
    audio.addEventListener("play", forceUpdate);
    audio.addEventListener("pause", forceUpdate);

    return () => {
      audio.removeEventListener("play", forceUpdate);
      audio.removeEventListener("pause", forceUpdate);
    };
  }, [audio, forceUpdate]);

  async function playPrevOrNext(next?: boolean) {
    await tracksService[next ? "findNext" : "findPrev"](track!.id).then(
      (nextTrack) => {
        changeTrack(nextTrack);
        audio.play();
      }
    );
  }

  function toggle() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  return {
    toggle,
    playing: !audio.paused,
    playPrevOrNext,
  };
}

export default useButtons;
