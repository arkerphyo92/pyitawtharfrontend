import axios, { AxiosInstance, AxiosError } from "axios";
import { ApiErrorResponse } from "@/app/_types/axios";

// instance with base configuration
const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// To add this when api need authentication tokens (Requeing Process)
api.interceptors.request.use(
  (config) => {
    // I will add this if auth requires
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

// Global Error Configuration
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorResponse>) => {
    console.log("API Error: " + error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
