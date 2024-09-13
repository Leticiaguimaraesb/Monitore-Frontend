import { HarvestsItemProps } from "../../../types/itemTypes";
import Column from "../Column";
import "../styles.scss";

const HarvestItem = ({ className, date, bags }: HarvestsItemProps) => {
  return (
    <>
      <div className={`itemContainer ${className}`}>
        <Column title="Data" text={date} />
        <Column title="Sacas" text={bags} />
      </div>
    </>
  );
};

export default HarvestItem;
