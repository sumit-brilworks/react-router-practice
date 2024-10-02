import axios from "axios";

export const superAxiosInstance = axios.create({
  baseURL: "http://localhost:5555/api/",
});
