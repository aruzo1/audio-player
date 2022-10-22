export interface ITrack {
  id: number;
  title: string;
  author: string;
  trackUrl: string;
  coverUrl: string;
}

export interface ICrateTrackDTO {
  title: string;
  author: string;
  track: File;
  cover: File;
}
