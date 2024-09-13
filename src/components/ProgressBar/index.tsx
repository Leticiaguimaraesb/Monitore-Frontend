import { buildProgressBar } from "../../controllers/progressBarController";
import { ProgressBarComponentProps } from "../../types/progressBarTypes";
import { v4 as uuidv4 } from "uuid";
import "./styles.scss";

const ProgressBar = ({
  className = "ProgressBarDefault",
  label,
  stages,
  actualStageOrder,
}: ProgressBarComponentProps) => {
  const progressBarData = buildProgressBar(stages, actualStageOrder);
  return (
    <div className={className}>
      <div className="LabelBox">
        <label>{label}</label>
      </div>
      <div className="ProgressbarBox">
        {progressBarData[0].map((component) => component)}
      </div>
      <div className="StagesNamesBox">
        {progressBarData[1].map((stageName) => (
          <p key={uuidv4()}>{stageName}</p>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
