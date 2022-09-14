import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { tracksService } from "./service";
import { ITrack, ITracksContext } from "./types";

const TracksContext = createContext<null | ITracksContext>(null);

export function TracksProvider({ children }: { children: ReactNode }) {
  const [tracks, setTracks] = useState<ITrack[]>([]);

  useEffect(() => {
    tracksService.findAll().then((tracks) => setTracks(tracks));
  }, []);

  function addTrack(track: ITrack) {
    setTracks([...tracks, track]);
  }

  return (
    <TracksContext.Provider value={{ tracks, addTrack }}>
      {children}
    </TracksContext.Provider>
  );
}

export function useTracks() {
  return useContext(TracksContext);
}
