import { getDateObject } from "../../utils/weatherFunctions";

const DayController = ({ resume = false }) => {
  const { dayOfWeekText, day, monthText, year } = getDateObject();

  if (resume) {
    const date = new Date();
    const formatDate = date.toLocaleString("pt-BR", { timeZone: "UTC" });

    return (
      <>
        {dayOfWeekText}, {formatDate.slice(0, 10)}
      </>
    );
  }

  return (
    <>
      {dayOfWeekText}, {day} de {monthText} de {year}
    </>
  );
};

export default DayController;
