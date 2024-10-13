const url = "http://192.168.100.6:800";
const api = axios.create({
  baseURL: `${url}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("acces_token")}`,
    Accept: "application/json",
  },
});

export const login = async () => {
  try {
    const reponse = await fetch(`${url}/api/login`);
    const data = await reponse.json();
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("username", data.username);
    localStorage.setItem("first_name", data.first_name);
    localStorage.setItem("last_name", data.last_name);
    localStorage.setItem("progile_image", data.profile_image);
    localStorage.setItem("role", data.role);
    return data;
  } catch (error) {
    console.error("Error during login:", error);
  }
};
export const register = async () => {
  try {
    const response = await fetch(`${url}/api/register`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error during registration:", error);
  }
};

// Clients

export const getClients = async () => {
  try {
    const response = await api.get("/clients/");
    return response;
  } catch (error) {
    console.error("Error fetching clients:", error);
  }
};
getClients();
export const addClients = (organisation, name, address, phone) => {
  try {
    const response = api.post("/clients/", {});
  } catch (error) {}
};
