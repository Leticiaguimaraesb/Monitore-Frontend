import { PlantingItemProps } from "../../../types/itemTypes";
import Column from "../Column";
import "../styles.scss";

const PlantingItem = ({
  className,
  startDate,
  finalDate,
  saplings,
  harvests,
}: PlantingItemProps) => {
  return (
    <>
      <div className={`itemContainer ${className}`}>
        <Column title="Data Inicial" text={startDate} />
        <Column title="Data Final" text={finalDate} />
        <Column title="Mudas" text={saplings} />
        <Column title="Colheitas" text={harvests} />
      </div>
    </>
  );
};

export default PlantingItem;
