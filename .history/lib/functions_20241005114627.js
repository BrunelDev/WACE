import axios from "axios";

const url = "http://192.168.100.2:8000/api"; // Assurez-vous d'utiliser le bon port
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
    const response = await fetch(`${url}/login/`, {
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
    localStorage.setItem("user_id", data.id);
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

export const getClients = async () => {
  try {
    const response = await api.get(`/clients/`);
    return response.data; // Retourne les données de la réponse
  } catch (error) {
    console.error("Error fetching clients:", error);
  }
};

export const registerClient = async (
  username,
  email,
  password,
  role = "client",
  phone_number,
  privileges,
  image = null
) => {
  try {
    const res = await fetch(`${url}/users/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
        role: role,
        phone_number: phone_number,
        privileges: privileges,
        image: image,
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error registering client:", error);
  }
};
export const logOut = async () => {
  localStorage.removeItem("user_id");
  localStorage.removeItem("access_token");
  localStorage.removeItem("username");
  localStorage.removeItem("first_name");
  localStorage.removeItem("last_name");
  localStorage.removeItem("profile_image");
  localStorage.removeItem("role");
  console.log("Deconnexion");
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
