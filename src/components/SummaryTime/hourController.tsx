import { useEffect, useState } from "react";
import { getCurrentTime } from "./hourControollerLogic";
const HourController = () => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <>{currentTime}</>;
};
export default HourController;
