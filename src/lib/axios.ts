import axios from "axios";

export const nasaApi = axios.create({
  baseURL: "https://api.nasa.gov",
});

export const mockApi = axios.create({
  baseURL: "https://63591fd1c27556d2894c52f2.mockapi.io",
});
