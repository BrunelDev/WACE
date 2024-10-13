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
    console.log("credentials", credentials);

    // Effectuer la requête fetch et attendre la réponse
    const response = await fetch(`${url}/api/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    // Vérifier si la requête a échoué
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Récupérer les données JSON
    const data = await response.json();

    // Stocker les informations dans le localStorage
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("username", data.username);
    localStorage.setItem("first_name", data.first_name);
    localStorage.setItem("last_name", data.last_name);
    localStorage.setItem("profile_image", data.profile_image);
    localStorage.setItem("role", data.role);

    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // Renvoyer l'erreur pour une gestion ultérieure si nécessaire
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

export const getClients = async (page) => {
  try {
    const response = await api.get(`/clients/?page_size=${100}&page${page}`);
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
