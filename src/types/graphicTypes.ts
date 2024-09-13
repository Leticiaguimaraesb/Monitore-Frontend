export type GraphicProps = {
  farmID: number;
  chartData: "temp" | "rain" | "wind";
  backgroundColor: string;
  unit: string;
  minY: number;
  maxY: number;
  increment: number;
};
