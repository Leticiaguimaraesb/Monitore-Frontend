import "./styles.scss";
import { StageMarkerProps } from "../../../../types/progressBarTypes";

const StageMarker = ({ className, orderOfStage }: StageMarkerProps) => {
  return (
    <div className="StageMarkerContainer">
      {className === "StageMarkerInitalActive" && <div id="rightActive"></div>}

      {className === "StageMarkerInitalInactive" && (
        <div id="rightInactive"></div>
      )}

      {className === "StageMarkerInitalTransition" && (
        <div id="rightInactive"></div>
      )}

      {className === "StageMarkerMidActive" && (
        <>
          <div id="rightActive"></div>
          <div id="leftActive"></div>
        </>
      )}

      {className === "StageMarkerMidInactive" && (
        <>
          <div id="rightInactive"></div>
          <div id="leftInactive"></div>
        </>
      )}

      {className === "StageMarkerMidTransition" && (
        <>
          <div id="rightInactive"></div>
          <div id="leftActive"></div>
        </>
      )}

      {className === "StageMarkerEndInactive" && <div id="leftInactive"></div>}

      {className === "StageMarkerEndActive" && <div id="leftActive"></div>}

      <div className={className}>
        <p>{orderOfStage}</p>
      </div>
    </div>
  );
};

export default StageMarker;
