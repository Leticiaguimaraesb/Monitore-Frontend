import "./styles.scss";
import { DataProperties } from "../../types/dataTypes";

const DataTableRow = ({ title, text }: DataProperties) => {
  return (
    <tbody className="dataTableRowContainer">
      <tr>
        <td id="title">{title}</td>
        <td id="text">{text}</td>
      </tr>
    </tbody>
  );
};

export default DataTableRow;
