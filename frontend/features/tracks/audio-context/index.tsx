import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import useAudioValue from "./use-audio-value";

type Context = ReturnType<typeof useAudioValue> | null;

export const AudioContext = createContext<Context>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [audio, setAudio] = useState<HTMLAudioElement>();
  const value = useAudioValue(audio);

  useEffect(() => setAudio(new Audio()), []);

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  );
}

export default function useAudio() {
  return useContext(AudioContext);
}
