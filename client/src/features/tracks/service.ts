import axios from "axios";
import { ICrateTrack, ITrack, IUpdateTrack } from "./types";

export const tracksService = {
  async findOne(id: string) {
    return axios.get<ITrack>(`tracks/${id}`).then((res) => res.data);
  },

  async findPrev(id: number) {
    return axios.get<ITrack>(`tracks/${id}/prev`).then((res) => res.data);
  },

  async findNext(id: number) {
    return axios.get<ITrack>(`tracks/${id}/next`).then((res) => res.data);
  },

  async update(id: string, data: IUpdateTrack) {
    return axios.put<void>(`tracks/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  async create(data: ICrateTrack) {
    return axios
      .post<ITrack>("tracks", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data);
  },

  async delete(id: string) {
    return axios.delete<void>(`tracks/${id}`);
  },
};
