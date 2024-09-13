import "./styles.scss";
import { useState, useEffect } from "react";
import ProgressBar from "../ProgressBar";
import Button from "../Button";
import PlotItem from "../Item/PlotItem";
import { getStages } from "../../services/stages";
import { Stages } from "../../types/stageTypes";
import { PlantingDataProps } from "../../types/farmTypes";
import { makeDateOutput } from "../../utils/itemsFunctions";
import editIcon from "../../assets/button/editIcon.svg";
import EditCard from "../EditCard";
import { Skeleton } from "@mui/material";

const PlantingData = ({
  plotData,
  cultureID,
  add = false,
  onAdd,
  buttonText = "Mais detalhes",
  onButton,
  plotName,
  fetchData,
}: PlantingDataProps) => {
  const [stages, setStages] = useState<Stages[]>();
  const [mode, setMode] = useState("normal");
  const [showBlurry, setShowBlurry] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    getStages(cultureID)
      .then((result) => {
        setStages(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cultureID]);

  const handleModeForEdit = () => {
    setMode("edit");
    setShowBlurry(false);
    console.log(showBlurry);
  };

  const handleModeForNormal = () => {
    setMode("normal");
    fetchData?.();
    if (onAdd) {
      onAdd();
    }
    setShowBlurry(false);
  };

  const handleBlurryClick = () => {
    if (add) {
      setIsRendered(false);
    } else {
      setMode("normal");
      setShowBlurry(false);
    }
  };

  if (!isRendered) {
    return null;
  }

  if (add) {
    return (
      <>
        <div
          className={`plantingDataContainer ${
            mode === "normal" ? "emphasis" : ""
          }`}
        >
          <EditCard handleMode={handleModeForNormal} plotName={plotName} />
          <div className="infoStages">
            {stages && (
              <ProgressBar
                className="ProgressBarDefault"
                label="Progresso do plantio"
                stages={stages}
                actualStageOrder={0}
              />
            )}
          </div>
        </div>
      </>
    );
  }

  if (!add && plotData) {
    return (
      <>
        {mode === "edit" && (
          <div className="blurry" onClick={handleBlurryClick}></div>
        )}
        <div
          className={`plantingDataContainer ${
            mode === "edit" ? "emphasis" : ""
          }`}
        >
          {mode === "edit" ? (
            <EditCard
              plantingId={plotData.planting_id}
              handleMode={handleModeForNormal}
            />
          ) : (
            <div className="infoPlot">
              <PlotItem
                plotName={plotData.plot_name}
                date={makeDateOutput(plotData.planting_date)}
                saplings={String(plotData.saplings)}
                stage={plotData.stage}
                harvests={plotData.harvests}
              />
              <Button
                className="filterButton"
                text="Editar"
                iconRight={editIcon}
                onClick={handleModeForEdit}
              />
            </div>
          )}
          <div className="infoStages">
            {stages && (
              <ProgressBar
                className="ProgressBarDefault"
                label="Progresso do plantio"
                stages={stages}
                actualStageOrder={plotData.stage_order}
              />
            )}

            {mode !== "edit" && (
              <Button
                className="normalButton"
                text={buttonText}
                onClick={onButton}
              />
            )}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <Skeleton variant="rounded" sx={{ bgcolor: "grey.400" }} height={230} />
    );
  }
};

export default PlantingData;
