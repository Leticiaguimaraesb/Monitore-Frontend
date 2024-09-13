export type ColumnProps = {
  title: string;
  text: string;
};

export type PlotItemProps = {
  className?: string;
  plotName: string;
  date: string;
  saplings: string;
  stage: string;
  harvests: string;
};

export type PlantingItemProps = {
  className?: string;
  startDate: string;
  finalDate: string;
  saplings: string;
  harvests: string;
};

export type HarvestsItemProps = {
  className?: string;
  date: string;
  bags: string;
};
