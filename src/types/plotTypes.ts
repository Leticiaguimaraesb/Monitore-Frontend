export type Plot = {
  plot_id: number;
  planting_id: number;
  date: string;
  saplings: number;
  active: boolean;
  harvests: string;
};

export type PlotWithFarm = {
  farm_id: number;
  plot_id: number;
  plot_name: string;
  planting_id: number;
  planting_date: string;
  saplings: number;
  stage: string;
  stage_order: number;
  harvests: string;
};

export type PlotInputProps = {
  onSearch: (plotName: string) => void;
};
