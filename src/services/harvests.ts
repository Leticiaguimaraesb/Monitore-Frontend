import api from "./api";
import { AddHarvest, Harvest } from "../types/harvestsTypes";

export const getHarvestByPlantingID = async (
  planintgID: number
): Promise<Harvest[]> => {
  const response = await api.get(`/harvests/planting/${planintgID}`);
  return response.data;
};

export const postNewHarvest = (harvest: AddHarvest) => {
  return api.post("/harvests/", harvest);
};
