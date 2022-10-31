import { IGenre } from "features/genres/types";
import { ITrack } from "features/tracks/types";
import server from "fetch/server";

const pagesPropsService = {
  async getHomeProps() {
    const latestTracks = await server
      .get<ITrack[]>("tracks?sort=createdAt&order=DESC")
      .then((res) => res.data);

    const genres = await server
      .get<IGenre[]>("genres?take=3")
      .then((res) => res.data);

    let genresTracks: ITrack[][] = [];

    for (const genre of genres) {
      const genreTrack = await server
        .get<ITrack[]>(`tracks?genreId=${genre.id}`)
        .then((res) => res.data);

      genresTracks.push(genreTrack);
    }

    return { latestTracks, genres, genresTracks };
  },

  async getSearchProps(term: string) {
    const tracks = await server
      .get<ITrack[]>(`tracks?term=${term}`)
      .then((res) => res.data);

    return { tracks, term };
  },

  async getTrackUploadProps() {
    const genres = await server.get<IGenre[]>("genres").then((res) => res.data);

    return { genres };
  },

  async getTrackEditProps(id: string) {
    const track = await server
      .get<ITrack>(`tracks/${id}`)
      .then((res) => res.data)
      .catch(() => null);

    if (!track) return null;

    const genres = await server.get<IGenre[]>("genres").then((res) => res.data);

    return { initialValues: track, genres };
  },
};

export default pagesPropsService;
