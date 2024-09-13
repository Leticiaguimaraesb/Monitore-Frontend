export type HarvestHistoryProps = {
  className?: string;
  plantingID: number;
  plotID: number;
  stage: string | undefined;
  onAdd?: () => void;
};

export type Harvest = {
  id: number;
  date: string;
  bags: number;
  plot_id: number;
  user_id: number;
  farm_id: number;
  planting_id: number;
};

export type AddHarvest = {
  date: string;
  bags: number;
  plot_id: number;
  user_id: number;
  farm_id: number;
  planting_id: number;
};
