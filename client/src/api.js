import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000", // 로컬 서버(Express)
});
