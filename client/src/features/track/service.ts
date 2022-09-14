import axios from "axios";
import { ICrateTrackDTO, ITrack } from "./types";

export const tracksService = {
  async findAll() {
    return axios.get<ITrack[]>("tracks").then((res) => res.data);
  },
  async findOne(id: string) {
    return axios.get<ITrack>(`tracks/${id}`).then((res) => res.data);
  },
  async create(data: ICrateTrackDTO) {
    return axios
      .post<ITrack>("tracks", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data);
  },
};
