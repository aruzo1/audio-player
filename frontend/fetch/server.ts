import axios from "axios";

const server = axios.create({
  baseURL: "http://nginx:80/api",
});

export default server;
