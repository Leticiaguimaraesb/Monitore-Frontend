import "./styles.scss";
import Graphic from "../Graphic";
import { useState } from "react";

const SelectGraphic = ({ farmID }: { farmID: number }) => {
  const [selectedGraphic, setSelectedGraphic] = useState<string>("chuva");

  const handleGraphicChange = (graphicType: string): void => {
    setSelectedGraphic(graphicType);
  };

  return (
    <div className="containerSelectGraphic">
      <div className="containerButtonsSelectGraphic">
        <button
          onClick={() => handleGraphicChange("temperatura")}
          className={selectedGraphic === "temperatura" ? "selectedTemp" : ""}
        >
          Temperatura
        </button>
        <button
          onClick={() => handleGraphicChange("chuva")}
          className={selectedGraphic === "chuva" ? "selectedRain" : ""}
        >
          Chuva
        </button>
        <button
          onClick={() => handleGraphicChange("vento")}
          className={selectedGraphic === "vento" ? "selectedWind" : ""}
        >
          Vento
        </button>
      </div>
      <div className="selectedGraphic">
        {selectedGraphic === "temperatura" && (
          <Graphic
            farmID={farmID}
            chartData={"temp"}
            backgroundColor="#ECA900"
            unit="°C"
            minY={0}
            maxY={40}
            increment={8}
          />
        )}
        {selectedGraphic === "chuva" && (
          <Graphic
            farmID={farmID}
            chartData={"rain"}
            backgroundColor="#004CBD"
            unit="%"
            minY={0}
            maxY={100}
            increment={20}
          />
        )}
        {selectedGraphic === "vento" && (
          <Graphic
            farmID={farmID}
            chartData={"wind"}
            backgroundColor="#027A00"
            unit="km/h"
            minY={0}
            maxY={40}
            increment={10}
          />
        )}
      </div>
    </div>
  );
};

export default SelectGraphic;
