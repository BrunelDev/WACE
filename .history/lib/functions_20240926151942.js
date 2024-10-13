import axios from "axios";

// Base URL pour l'API
const url = "http://192.168.100.6:8000";

const api = axios.create({
  baseURL: `${url}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = async (credentials) => {
  try {
    const response = await fetch(`${url}/api/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();

    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("username", data.username);
    localStorage.setItem("first_name", data.first_name);
    localStorage.setItem("last_name", data.last_name);
    localStorage.setItem("profile_image", data.profile_image);
    localStorage.setItem("role", data.role);

    return data;
  } catch (error) {
    console.error("Error during login:", error);}
