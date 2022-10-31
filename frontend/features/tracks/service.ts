import client from "fetch/client";
import { ICrateTrack, ITrack, IUpdateTrack } from "./types";

export const tracksService = {
  async findOne(id: string) {
    return client.get<ITrack>(`tracks/${id}`).then((res) => res.data);
  },

  async findPrev(id: number) {
    return client.get<ITrack>(`tracks/${id}/prev`).then((res) => res.data);
  },

  async findNext(id: number) {
    return client.get<ITrack>(`tracks/${id}/next`).then((res) => res.data);
  },

  async update(id: number, data: IUpdateTrack) {
    return client.put<void>(`tracks/${id}`, data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },

  async create(data: ICrateTrack) {
    return client
      .post<ITrack>("tracks", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => res.data);
  },

  async delete(id: number) {
    return client.delete<void>(`tracks/${id}`);
  },
};
