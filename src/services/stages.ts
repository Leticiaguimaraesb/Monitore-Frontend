import { Stages } from "../types/stageTypes";
import api from "./api";

export const getStages = async (cultureID: number): Promise<Stages[]> => {
  const response = await api.get(`/stages/${cultureID}`);
  return response.data;
};
