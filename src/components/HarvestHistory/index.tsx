import "./styles.scss";
import { useState, useEffect } from "react";
import { AddHarvest, HarvestHistoryProps } from "../../types/harvestsTypes";
import {
  getHarvestByPlantingID,
  postNewHarvest,
} from "../../services/harvests";
import { Harvest } from "../../types/harvestsTypes";
import HarvestItem from "../Item/HarvestItem";
import { makeDateOutput } from "../../utils/itemsFunctions";
import Button from "../Button";
import addIcon from "../../assets/addIcon.svg";
import TextInput from "../Input";
import { useContext } from "react";
import { AuthContext } from "../../controllers/contextController";

const getTodayDate = () => {
  const todayDate = new Date();
  return `${todayDate.getFullYear()}-${
    Number(todayDate.getMonth()) < 9 ? 0 : ""
  }${Number(todayDate.getMonth()) + 1}-${todayDate.getDate()}`;
};

const HarvestHistory = ({
  className,
  plantingID,
  plotID,
  stage,
  onAdd,
}: HarvestHistoryProps) => {
  const { userData } = useContext(AuthContext);
  const [harvests, setHarvests] = useState<Harvest[]>([]);
  const [newHarvest, setNewHarvest] = useState<boolean>(false);
  const [newHarvestData, setNewHarvesData] = useState<AddHarvest>({
    bags: 0,
    date: getTodayDate(),
    farm_id: userData.info.farm_id,
    user_id: userData.info.id,
    planting_id: plantingID,
    plot_id: plotID,
  });

  useEffect(() => {
    getHarvestByPlantingID(plantingID)
      .then((response) => {
        setHarvests(response);
      })
      .catch(console.log);

    setNewHarvesData((prev) => ({ ...prev, planting_id: plantingID }));
  }, [plantingID, newHarvest]);

  const handleNewHarvest = () => setNewHarvest((prev) => !prev);

  const handleSaveHarvest = (event: React.FormEvent) => {
    event.preventDefault();

    postNewHarvest(newHarvestData)
      .then(() => {
        handleNewHarvest();
        if (onAdd) onAdd();
      })
      .catch((error) => {
        console.log("Erro ao salvar os dados", error);
        handleNewHarvest();
      });
  };

  const handleInputChange = (value: string, key: string) => {
    if (key === "bags") {
      setNewHarvesData((prevData) => ({
        ...prevData,
        [key]: Number(value),
      }));
    } else {
      setNewHarvesData((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    }
  };

  if (newHarvest) {
    return (
      <>
        <div className="blurry" onClick={handleNewHarvest}></div>
        <div
          className={`harvestHistoryContainer addNewHarvestContainer emphasisHarvest ${className}`}
        >
          <form
            className={"harvestHistoryContent"}
            onSubmit={handleSaveHarvest}
          >
            <div className="formsContent">
              <h2>Histórico de Colheitas</h2>
              <div className="containerAddNewHarvest">
                <TextInput
                  className="inputNewHarvest"
                  label="Data"
                  value={newHarvestData.date}
                  placeHolder="Data"
                  type="date"
                  required={true}
                  onChange={(event) =>
                    handleInputChange(event.target.value, "date")
                  }
                />
                <TextInput
                  className="inputNewHarvest"
                  label="Sacas"
                  placeHolder="Quantidade"
                  type="number"
                  required={true}
                  onChange={(event) =>
                    handleInputChange(event.target.value, "bags")
                  }
                />
              </div>
            </div>
            <Button
              className="buttonSaveHarvest normalButton"
              text="Salvar"
              type="submit"
            />
          </form>
        </div>
      </>
    );
  } else {
    return (
      <div className={`harvestHistoryContainer ${className}`}>
        <div className="harvestHistoryContent">
          <h2>Histórico de Colheitas</h2>
          {harvests.map((harvest) => (
            <HarvestItem
              className="harvestHistoryItem"
              key={harvest.id}
              date={makeDateOutput(harvest.date)}
              bags={String(harvest.bags)}
            />
          ))}
        </div>
        {stage && stage.toLowerCase() === "colheita" && (
          <Button
            className="buttonAddHarvest normalButton"
            text="Adicionar colheita"
            iconRight={addIcon}
            onClick={handleNewHarvest}
          />
        )}
      </div>
    );
  }
};

export default HarvestHistory;
