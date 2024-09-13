import { useParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import HarvestHistory from "../../components/HarvestHistory";
import PlantingHistory from "../../components/PlantingHistory";
import SideBar from "../../components/SideBar";
import Title from "../../components/Title";
import "./styles.scss";
import { Planting } from "../../types/plantingTypes";
import { getPlantingByPlotID } from "../../services/planting";
import PlantingData from "../../components/PlantingData";
import { PlotWithFarm } from "../../types/plotTypes";
import { getAPlotgByIdAndFarmID } from "../../services/plot";
import { AuthContext } from "../../controllers/contextController";

const getLastActivePlanting = (
  allPlantings: Planting[] | undefined
): number => {
  if (allPlantings) {
    const lastActivePlanting = allPlantings.filter(
      (planting) => planting.active
    );
    if (lastActivePlanting.length) {
      return lastActivePlanting[0].planting_id;
    } else {
      const plantingID = Math.max(
        ...allPlantings.map((planting) => planting.planting_id)
      );
      return plantingID;
    }
  } else {
    return 0;
  }
};

const Plot = () => {
  const { userData } = useContext(AuthContext);
  const { id } = useParams();
  const [plantings, setPlantings] = useState<Planting[]>();
  const [activePlantingID, setActivePlatingID] = useState<number>(0);
  const [plotInfo, setPlotInfo] = useState<PlotWithFarm>();
  const [addNewPlanting, setAddNewPlanting] = useState<boolean>(false);
  const [updatePage, setUpdatePage] = useState<number>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    getAPlotgByIdAndFarmID(Number(id), userData.info.farm_id)
      .then((response) => setPlotInfo(response[0]))
      .catch(console.log);

    getPlantingByPlotID(Number(id))
      .then((response) => {
        setPlantings(plantings);
        setActivePlatingID(getLastActivePlanting(response));
      })
      .catch(console.log);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, addNewPlanting, updatePage]);

  const handleAddNewPlanting = () => {
    setAddNewPlanting((prev) => !prev);
    handleUpdatePage();
  };

  const handleUpdatePage = () => setUpdatePage((prev) => prev + 1);

  if (userData?.token) {
    return (
      <div className="containerPagePLot">
        <SideBar />
        <div className="containerPlot">
          <div className="plotTitle">
            <Title
              fontSize="32px"
              fontWeight="700"
              text="Plantios e Colheitas"
              hasIcon={true}
              hasLine={true}
            />
          </div>
          <div className="plotInfos">
            <div className="plotData">
              {addNewPlanting ? (
                <>
                  <div className="blurry" onClick={handleAddNewPlanting}></div>
                  <PlantingData
                    cultureID={1}
                    add={true}
                    onAdd={handleAddNewPlanting}
                    plotName={plotInfo?.plot_name}
                  />
                </>
              ) : (
                <PlantingData
                  cultureID={1}
                  plotData={plotInfo}
                  buttonText="Novo plantio"
                  onButton={handleAddNewPlanting}
                  onAdd={handleUpdatePage}
                />
              )}
            </div>
            <div className="plotHistorys">
              <HarvestHistory
                className="harvestHistory"
                plantingID={activePlantingID}
                plotID={Number(id)}
                stage={plotInfo?.stage}
                onAdd={handleUpdatePage}
              />
              <PlantingHistory
                className="plantingHistory"
                plotID={Number(id)}
                update={updatePage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    window.location.href = "/";
  }
};

export default Plot;
