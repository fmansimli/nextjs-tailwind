import axios, { AxiosError, AxiosInstance } from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST_URL,
  headers: {
    Authorization: "Bearer " + " ",
    "Content-Type": "application/json",
  },
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    return error;
  }
);
