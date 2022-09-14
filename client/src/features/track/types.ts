export interface ITrack {
  id: number;
  url: string;
  title: string;
}

export interface ICrateTrackDTO {
  title: string;
  track: File;
}

export interface IAudioContext {
  audio: HTMLAudioElement;
  track: ITrack | undefined;
  changeTrack: (track: ITrack) => void;
}

export interface ITracksContext {
  tracks: ITrack[];
  addTrack: (track: ITrack) => void;
}
