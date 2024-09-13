import "./styles.scss";
import { DataWeather } from "./controller";
import { SummaryTimeType } from "../../types/weatherTypes";

const SummaryTime = ({ farmID, resume }: SummaryTimeType) => {
  return (
    <>
      <DataWeather resume={resume} farmID={farmID} />
    </>
  );
};

export default SummaryTime;
