import { PlantingType } from "../types/plantingTypes";
import { Plot } from "../types/plotTypes";
import api from "./api";

export const getPlantingById = async (
  plantingID: number
): Promise<PlantingType[]> => {
  const response = await api.get(`/plantings/${plantingID}`);
  return response.data;
};

export const getPlantingByPlotID = async (plotID: number): Promise<Plot[]> => {
  const response = await api.get(`/plantings/plot/${plotID}`);
  return response.data;
};

export const putPlanting = (plantingID: number, planting: PlantingType) =>
  api.put(`/plantings/${plantingID}`, planting);
