import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:3002", // Default base URL
// });

// // Dynamically set baseURL for specific requests
// API.interceptors.request.use((config) => {
//   if (config.url.startsWith("/brands")) {
//     config.baseURL = "http://localhost:3002/brands";
//   } else if (config.url.startsWith("/products")) {
//     config.baseURL = "http://localhost:3002/products";
//   }
//   return config;
// });

const API = axios.create({
  baseURL: "http://localhost:3002",
});

export default API;
