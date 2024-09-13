import "./styles.scss";
import { useState, useEffect } from "react";
import { PlantingHistoryProps } from "../../types/plantingTypes";
import { Plot } from "../../types/plotTypes";
import { getPlantingByPlotID } from "../../services/planting";
import PlantingItem from "../Item/PlantingItem";
import { makeDateOutput } from "../../utils/itemsFunctions";
import { Skeleton } from "@mui/material";

const PlantingHistory = ({
  className,
  plotID,
  update,
}: PlantingHistoryProps) => {
  const [plantings, setPlantings] = useState<Plot[]>([]);

  useEffect(() => {
    getPlantingByPlotID(plotID)
      .then((result) => {
        setPlantings(result);
      })
      .catch(console.log);
  }, [plotID, update]);

  const finalYear = 5;

  return (
    <div className={`plantingHistoryContainer ${className}`}>
      <h1>Histórico de plantios</h1>
      {plantings[0] ? (
        plantings.map((planting) => (
          <PlantingItem
            className="plantingHistoryItem"
            key={planting.planting_id}
            startDate={makeDateOutput(planting.date)}
            finalDate={makeDateOutput(planting.date, finalYear)}
            saplings={String(planting.saplings)}
            harvests={String(planting.harvests)}
          />
        ))
      ) : (
        <Skeleton variant="rounded" sx={{ bgcolor: "grey.400" }} height={450} />
      )}
    </div>
  );
};

export default PlantingHistory;
