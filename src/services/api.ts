import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-rebel-alliance.vercel.app/",
  // baseURL: "http://localhost:3000/",
});

export default api;
