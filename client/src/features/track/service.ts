import axios from "axios";
import { ICrateTrackDTO, ITrack, IUpdateTrackDTO } from "./types";

export const tracksService = {
  async findAll() {
    return axios.get<ITrack[]>("tracks").then((res) => res.data);
  },

  async findOne(id: string) {
    return axios.get<ITrack>(`tracks/${id}`).then((res) => res.data);
  },

  async findPrev(id: number) {
    return axios.get<ITrack>(`tracks/${id}/prev`).then((res) => res.data);
  },

  async findNext(id: number) {
    return axios.get<ITrack>(`tracks/${id}/next`).then((res) => res.data);
  },

  async update(id: string, data: IUpdateTrackDTO) {
    return axios.put<void>(`tracks/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  async create(data: ICrateTrackDTO) {
    return axios
      .post<ITrack>("tracks", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data);
  },
};
