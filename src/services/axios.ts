import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_BASE_URL,
});

api.defaults.timeout = 2500;
api.defaults.headers.post["Content-Type"] = "application/json";
axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
