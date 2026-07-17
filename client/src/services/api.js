import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5000/api",
});

// Automatically attach JWT token
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// =======================
// DNA APIs
// =======================

export const encodeDNA = (data) =>
  API.post("/dna/encode", data);

export const decodeDNA = (data) =>
  API.post("/dna/decode", data);

export const getHistory = () =>
  API.get("/dna/history");

export const getStats = () =>
  API.get("/dna/stats");

export const deleteRecord = (id) =>
  API.delete(`/dna/${id}`);

// =======================
// Upload API
// =======================

export const uploadFile = (formData) =>
  API.post("/dna/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

// =======================
// Report APIs
// =======================

export const getReport = (id) =>
  API.get(`/report/${id}`);

export default API;