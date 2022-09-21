import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { tracksService } from "./service";
import { IAudioContext, ITrack } from "./types";

const AudioContext = createContext<null | IAudioContext>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const audio = useMemo(() => new Audio(), []);
  const [track, setTrack] = useState<ITrack>();

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
    audio.play();

    localStorage.setItem("trackId", track.id.toString());
  }

  return (
    <AudioContext.Provider value={{ audio, track, changeTrack }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
