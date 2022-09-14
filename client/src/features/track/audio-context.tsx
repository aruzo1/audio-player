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
  const [track, setTrack] = useState<ITrack>();
  const audio = useMemo(() => new Audio(), []);

  useEffect(() => {
    const trackId = localStorage.getItem("trackId");

    if (trackId) {
      tracksService.findOne(trackId).then((track) => {
        setTrack(track);
        audio.src = track.url;
      });
    }
  }, []);

  function changeTrack(track: ITrack) {
    setTrack(track);
    audio.src = track.url;
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
