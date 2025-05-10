import axios from "axios";
const TOKEN = import.meta.env.VITE_TOKEN;

const url = "https://develop-back-rota.rota361.com.br/recruitment/";

const api = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${TOKEN}`;
  return config;
});

export default api;
