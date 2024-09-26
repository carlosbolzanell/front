import { api } from "./api";

export const loginUser = async (data: any) => {
  const response = await api.post("/auth/login", data);
  return response.data;
}

export const getUserByToken = async () => {
  const response = await api.get("/usuarios");
  return response.data;
}

export const createUser = async (data: any) => {
  const response = await api.post("/usuarios", data);
  return response.data;
}