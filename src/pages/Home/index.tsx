/* eslint-disable react-hooks/exhaustive-deps */
import { getPlotByNameAndFarmID } from "../../services/plot";
import { useState, useEffect, useContext } from "react";
import { getPlotgByFarmID } from "../../services/plot";
import PlantingData from "../../components/PlantingData";
import { AuthContext } from "../../controllers/contextController";
import SideBar from "../../components/SideBar";
import PlotSearchInput from "../../components/PlotSearchInput";
import Title from "../../components/Title";
import SummaryTime from "../../components/SummaryTime";
import "./styles.scss";
import { PlotWithFarm } from "../../types/plotTypes";
import "./styles.scss";
import Button from "./../../components/Button";
import HomeLoading from "./../../screens/ExampleScreen/Home";
import welcome from "./../../assets/welcome.svg";
import { useNavigate } from "react-router-dom";
import mostRecentIcon from "../../assets/home/mostRecentIcon.svg";
import oldestIcon from "../../assets/home/oldestIcon.svg";

const Home = () => {
  const { userData } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dataPlot, setDataPlot] = useState<Array<PlotWithFarm>>();
  const [showAddPlanting, setShowAddPlanting] = useState(false);
  const [showBlurry, setShowBlurry] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchData, setSearchData] = useState("");
  const [filterIcon, setFilterIcon] = useState(true);

  useEffect(() => {
    if (!showBlurry) {
      fetchData();
    }
  }, [showBlurry]);

  const fetchData = () => {
    getPlotgByFarmID(userData.info.farm_id)
      .then((response) => {
        setDataPlot(
          response.sort((a, b) => {
            const aDate = new Date(a.planting_date);
            const bDate = new Date(b.planting_date);
            return bDate.getTime() - aDate.getTime();
          })
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const fetchPlotByName = (name: string) => {
    getPlotByNameAndFarmID(name, userData.info.farm_id)
      .then((response) => {
        setDataPlot(
          response.sort((a: PlotWithFarm, b: PlotWithFarm) => {
            const aDate = new Date(a.planting_date);
            const bDate = new Date(b.planting_date);
            return filterIcon
              ? bDate.getTime() - aDate.getTime()
              : aDate.getTime() - bDate.getTime();
          })
        );
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const filterHandler = () => {
    setFilterIcon(!filterIcon);
    dataPlot?.sort((a, b) => {
      const aDate = new Date(a.planting_date);
      const bDate = new Date(b.planting_date);
      return filterIcon
        ? aDate.getTime() - bDate.getTime()
        : bDate.getTime() - aDate.getTime();
    });
  };

  const handleNewPlanting = () => {
    setShowAddPlanting(true);
    setShowBlurry(true);
  };

  const handleBlurryClick = () => {
    setShowAddPlanting(false);
    setShowBlurry(false);
  };

  const handlePlantingAdd = () => {
    setShowAddPlanting(false);
    setShowBlurry(false);
  };

  if (isLoading) {
    return <HomeLoading />;
  }

  return (
    <div className="pageHomeContainer">
      <SideBar />
      <div className="homeDataContainer">
        <Title
          fontSize="48px"
          fontWeight="500"
          text={`Olá, ${userData.info.name}`}
        />
        <SummaryTime farmID={userData.info.farm_id} resume={true} />
        <Title fontSize="32px" fontWeight="700" text="Talhão" hasLine />
        <div className="searchContainer">
          <div className="filterContainer">
            <PlotSearchInput
              value={searchData}
              onChange={(event) => {
                setSearchData(event.target.value);
              }}
              onClick={() => {
                fetchPlotByName(searchData);
              }}
            />
            <Button
              iconRight={filterIcon ? mostRecentIcon : oldestIcon}
              text={filterIcon ? "Mais recente" : "Mais Antigo"}
              className="filterButton"
              onClick={() => {
                filterHandler();
              }}
            />
          </div>

          {dataPlot && dataPlot.length > 0 ? (
            <Button
              text="Adicionar Plantio"
              className="largeButton"
              onClick={handleNewPlanting}
            />
          ) : (
            <></>
          )}
        </div>

        {showAddPlanting && (
          <>
            <div className="blurry" onClick={handleBlurryClick}></div>
            <PlantingData add={true} cultureID={1} onAdd={handlePlantingAdd} />
          </>
        )}

        {dataPlot && dataPlot.length > 0 ? (
          <>
            {dataPlot.map((plot) => {
              return (
                <PlantingData
                  plotData={plot}
                  cultureID={1}
                  key={plot.plot_id}
                  fetchData={fetchData}
                  onButton={() => navigate(`/talhao/${plot.plot_id}`)}
                />
              );
            })}
          </>
        ) : searchData.length <= 0 ? (
          <div className="containerWelcome">
            <img src={welcome} alt="Imagem de boas vindas" />
            <h1>Boas-vindas ao Monitore!</h1>
            <p>Comece a monitorar sua fazenda adicionando plantios.</p>
            <Button
              text="Adicionar Plantio"
              className="largeButton"
              onClick={handleNewPlanting}
            />
          </div>
        ) : (
          <div className="containerNotFound">
            <h2>Não encontramos o talhão desejado!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
