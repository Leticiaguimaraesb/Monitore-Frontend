import api from "./api";
import { User } from "../types/userDataTypes";

export const userById = async (userID: number): Promise<User> => {
  const response = await api.get(`/users/${userID}`);
  return response.data;
};
