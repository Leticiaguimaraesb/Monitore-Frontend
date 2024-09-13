import "./styles.scss";
import { ColumnProps } from "../../../types/itemTypes";

const Column = ({ title, text }: ColumnProps) => {
  return (
    <div className="columnContainer">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Column;
