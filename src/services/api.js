import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8050/api"
});

// Automatically attach token to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

// Fetch all templates
export const fetchTemplates = async () => {
  const res = await API.get("/templates");
  return res.data;
};

// Fetch template details
export const fetchTemplateById = async (id) => {
  const res = await API.get(`/templates/${id}`);
  return res.data;
};

// Add to favorites
export const addToFavorites = async (templateId) => {
  const res = await API.post(`/favorites/${templateId}`);
  return res.data;
};

// Fetch user favorites
export const fetchFavorites = async () => {
  const res = await API.get("/favorites");
  return res.data;
};
export const createTemplate = async (formData) => {
  const res = await API.post("/templates", formData);
  return res.data; // this will contain { message, template }
};

export default API;
