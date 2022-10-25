import { useEffect } from "react";
import useAudio from "../audio-context";
import { tracksService } from "../service";

function useControlBar() {
  const { audio, track, changeTrack } = useAudio()!;

  useEffect(() => {
    function playNext() {
      tracksService.findNext(track!.id).then((nextTrack) => {
        changeTrack(nextTrack);
        audio.play();
      });
    }

    audio.addEventListener("ended", playNext);
    return () => audio.removeEventListener("ended", playNext);
  }, [audio, track, changeTrack]);

  return { track };
}

export default useControlBar;
