import api from "./api";
import { UserLoginProps } from "../types/authTypes";

const loginUser = async (userData: UserLoginProps) => {
  try {
    const response = await api.post("users/login", userData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUserData = async (cpforcnpj: string) => {
  const response = await api.get(`users/cpforcnpj/${cpforcnpj}`);
  return response.data;
};

const validateToken = async (token: string) => {
  const response = await api.post("users/validatetoken", { token });
  return response.data;
};

export default { loginUser, getUserData, validateToken };
