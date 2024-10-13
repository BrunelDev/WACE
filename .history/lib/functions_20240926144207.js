import axios from "axios";

const url = "http://192.168.100.6:800";
const api = axios.create({
  baseURL: `${url}/`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    Accept: "application/json",
  },
});
