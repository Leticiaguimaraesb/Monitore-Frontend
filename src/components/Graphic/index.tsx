import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import type { ChartData, ChartOptions } from "chart.js";
import "./styles.scss";
import { GraphicProps } from "../../types/graphicTypes";
import { useState, useEffect } from "react";
import { getWeatherByCity } from "../../services/weather";
import { getFarmById } from "../../services/weather";

Chart.register(...registerables);
Chart.register(ChartDataLabels);

const Graphic = ({
  farmID,
  chartData,
  backgroundColor,
  unit,
  minY,
  maxY,
  increment,
}: GraphicProps) => {
  const [hours, setHours] = useState<string[]>([]);
  const [dataWeather, setDataWeather] = useState<{
    temp?: number[];
    rain?: number[];
    wind?: number[];
  }>({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const farmResponse = await getFarmById(farmID);
        const weatherResponse = await getWeatherByCity(
          farmResponse?.address?.city
        );
        setDataWeather({
          temp: weatherResponse.list?.map((hour) =>
            Number(hour.main.temp.toFixed(1))
          ),
          rain: weatherResponse.list?.map((hour) =>
            Number((hour.pop * 100).toFixed(1))
          ),
          wind: weatherResponse.list?.map((hour) =>
            Number((hour.wind.speed * 3.6).toFixed(1))
          ),
        });
        if (weatherResponse.list) {
          const gruopHours = weatherResponse.list
            .filter((_, index) => index === 0 || index % 2 === 0)
            .map((hourData) => {
              const dtInMilliseconds = hourData.dt * 1000;
              const dtObject = new Date(dtInMilliseconds);
              return dtObject.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              });
            })
            .slice(0, 12);

          setHours(gruopHours);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [farmID]);

  const data: ChartData<"line"> = {
    labels: hours,

    datasets: [
      {
        data: dataWeather[chartData] || [],
        backgroundColor: backgroundColor,
        borderColor: backgroundColor,
        pointBorderColor: "#FFFFFF",
        tension: 0.0, //curva ou reto
        pointRadius: 5, //tamanho da bolinha
      },
    ],
  };

  function formatY(value: { toString: () => string }, unit: string) {
    return value.toString() + unit;
  }

  const options: ChartOptions<"line"> = {
    maintainAspectRatio: false, // Permite ajustar o tamanho do gráfico de acordo com o contêiner
    responsive: true, // Permite que o gráfico seja responsivo

    scales: {
      x: {
        grid: {
          display: false, // Remove a grade da escala x
        },
        offset: true, //Espaçamento entre a linha e a escala
        ticks: {
          font: {
            size: 10.593, // Define o tamanho da fonte do eixo y
          },
        },
      },
      y: {
        min: minY, // Valor mínimo da escala vertical
        max: maxY, // Valor máximo da escala vertical
        offset: true, //Espaçamento entre a linha e a escala // ver vini e ana
        ticks: {
          stepSize: increment, // Define o incremento para 10 em 10
          callback: (value: { toString: () => string }) => formatY(value, unit),
          font: {
            size: 12.106, // Define o tamanho da fonte do eixo y
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        align: "top",
        color: "#000000",
        font: {
          size: 12,
        },
      },
    },
    layout: { padding: 5 },
  };

  return (
    <div className="containerGraphic">
      <Line data={data} options={options} />
    </div>
  );
};

export default Graphic;
