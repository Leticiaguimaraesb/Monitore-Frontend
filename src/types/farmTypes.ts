import { PlotWithFarm } from "./plotTypes";

export type Farm = {
  id: number;
  cnpj: string;
  name: string;
  phone: string;
  address: {
    id: number;
    street: string;
    number: number;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
    reference_point: string;
  };
};

export type PlantingDataProps = {
  plotData?: PlotWithFarm;
  cultureID: number;
  add?: boolean;
  onAdd?: () => void;
  buttonText?: string;
  onButton?: () => void;
  plotName?: string;
  fetchData?: () => void;
};
