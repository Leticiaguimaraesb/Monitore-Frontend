import "./styles.scss";
import SideBar from "../../components/SideBar";
import Title from "../../components/Title";
import SummaryTime from "../../components/SummaryTime";
import WeatherWeek from "../../components/WeatherWeek";
import SelectGraphic from "../../components/SelectGraphic";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../controllers/contextController";

const Climate = () => {
  const { userData } = useContext(AuthContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (userData?.token) {
    return (
      <div className="pageClimateContainer">
        <SideBar />
        <div className="climateDataContainer">
          <div className="climateTitle">
            <Title
              fontSize="32px"
              fontWeight="700"
              text="Clima"
              hasIcon={true}
              hasLine={true}
            />
          </div>

          <div className="climateData">
            <div className="mainInfos">
              <SummaryTime resume={false} farmID={userData.info.farm_id} />
              <SelectGraphic farmID={userData.info.farm_id} />
            </div>
            <WeatherWeek
              className="weekData"
              farmID={userData.info.farm_id}
              days={8}
            />
          </div>
        </div>
      </div>
    );
  } else {
    window.location.href = "/";
  }
};

export default Climate;
