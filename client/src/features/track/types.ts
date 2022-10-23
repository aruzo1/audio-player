export interface ITrack {
  id: number;
  title: string;
  author: string;
  trackUrl: string;
  coverUrl: string;
}

export interface ICrateTrack {
  title: string;
  author: string;
  track: File;
  cover: File;
}

export interface IUpdateTrack {
  title: string;
  author: string;
}
