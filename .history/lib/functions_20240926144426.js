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

export const login = async () => {
  try {
    const reponse = await fetch(`${url}/api/login`);
    const data = await reponse.json();
  } catch (error) {}
};
