import { PlotWithFarm } from "../types/plotTypes";
import api from "./api";

export const getPlotgByFarmID = async (
  farmID: number
): Promise<Array<PlotWithFarm>> => {
  const response = await api.get(`/plots/planting/farm?farm=${farmID}`);
  return response.data;
};

export const getAPlotgByIdAndFarmID = async (
  plotID: number,
  farmID: number
): Promise<Array<PlotWithFarm>> => {
  const response = await api.get(`/plots/${plotID}/farm/${farmID}`);
  return response.data;
};

export const getPlotByNameAndFarmID = async (
  plotName: string,
  farmID: number
) => {
  const response = await api.get(
    `/plots/planting/farm?farm=${farmID}&plot=${plotName}`
  );
  return response.data;
};
