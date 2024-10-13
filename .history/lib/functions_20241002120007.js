import axios from "axios";

const url = "http://192.168.100.2:8000"; // Assurez-vous d'utiliser le bon port
const api = axios.create({
  baseURL: `${url}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    Accept: "application/json",
  },
});

export const login = async (credentials) => {
  try {
    const response = await api.post("/api/login", credentials); // Envoi des informations de connexion
    const data = response.data; // Récupère les données de la réponse

    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("username", data.username);
    localStorage.setItem("first_name", data.first_name);
    localStorage.setItem("last_name", data.last_name);
    localStorage.setItem("profile_image", data.profile_image);
    localStorage.setItem("role", data.role);

    return data;
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export const register = async () => {
  try {
    const response = await api.post("/api/register"); // Exemple d'utilisation d'Axios pour l'enregistrement
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
  }
};

// Clients

export const getClients = async () => {
  try {
    const response = await api.get("/clients/");
    return response.data; // Retourne les données de la réponse
  } catch (error) {
    console.error("Error fetching clients:", error);
  }
};

export const addClients = async (organisation, name, address, phone) => {
  try {
    const response = await api.post("/clients/", {
      organisation,
      name,
      address,
      phone,
    });
    return response.data; // Retourne les données de la réponse
  } catch (error) {
    console.error("Error adding client:", error);
  }
};