export type PlantingHistoryProps = {
  className?: string;
  plotID: number;
  update: number | undefined;
};

export type Planting = {
  plot_id: number;
  planting_id: number;
  date: string;
  saplings: number;
  active: boolean;
  harvests: string;
};

export type PlantingType = {
  date: string | undefined;
  saplings: number | undefined;
  plot: string;
  stage: string;
  user: string;
  farm: string;
  active?: boolean;
};

export type EndPlantingType = {
  date?: string;
  saplings?: number;
  plot?: string;
  stage?: string;
  user?: string;
  farm?: string;
  active?: boolean;
};
