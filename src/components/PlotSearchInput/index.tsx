import "./styles.scss";
import { SearchInput } from "../../types/InputTypes";
import searchIcon from "../../assets/searchIcon.svg";
import "./styles.scss";

const PlotSearchInput = ({ value, onChange, onClick }: SearchInput) => {
  return (
    <div className="searchPlotInputContainer">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Pesquisar talhão"
      />
      <button className="icon-button" onClick={onClick}>
        <img src={searchIcon} alt="Ícone do talhão" />
      </button>
    </div>
  );
};

export default PlotSearchInput;
