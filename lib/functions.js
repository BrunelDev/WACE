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

    const data = await response.json();
    if (!response.ok) {
      throw new Error(JSON.stringify(data));
    }

    // Récupérer les données JSON

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
  phone_number = 123,
  privileges = null,
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
    const data = await res.json();

    if (!res.ok) {
      throw new Error(JSON.stringify(data));
    }
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error registering client:", error);
    return null;
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

export const getProduits = async () => {
  try {
    const response = await api.get("/produits-fournisseur/en_stock/", {
      params: {
        search: "",
        page: "",
        page_size: "",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const getOrders = async () => {
  try {
    const response = await api.get("/commandes/");
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
  }
};
export const getStock = async () => {
  try {
    const response = await api.get("/stocks/");
    return response.data;
  } catch (error) {
    console.error("Error fetching stock:", error);
  }
};
export const deleteClient = async (clientId) => {
  try {
    const response = await api.delete(`/clients/${clientId}/`);
    return response.data;
  } catch (error) {
    console.error("Error deleting client:", error);
  }
};
export const deleteManyClient = async (clientList) => {
  try {
    for (const client of clientList) {
      await deleteClient(client.id);
    }
    return "Client deleted successfully";
  } catch (error) {
    console.error("Error deleting many clients:", error);
  }
};
export function rechercher(tableau, termeRecherche) {
  // Convertir le terme de recherche en minuscule pour rendre la recherche insensible à la casse
  const terme = termeRecherche.toLowerCase();

  return tableau.filter((item) => {
    return (
      item.nom.toLowerCase().includes(terme) ||
      item.telephone.toLowerCase().includes(terme) ||
      item.email.toLowerCase().includes(terme) ||
      item.organisation.nom.toLowerCase().includes(terme)
    );
  });
}

export const getCategories = async () => {
  try {
    const response = await api.get("/categories/");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};
