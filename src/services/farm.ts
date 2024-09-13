import api from "./api";

export const getFarmName = async (farmId: number): Promise<string> => {
  const response = await api.get(`/farms/${farmId}`);
  return response.data.name;
};
