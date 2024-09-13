import { TitleProps } from "../../types/titleTypes";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import iconArrow from "./../../assets/Title/icon_arrow.svg";

const Title = ({
  fontSize,
  fontWeight,
  text,
  hasLine = false,
  hasIcon = false,
}: TitleProps) => {
  return (
    <div className="containerTitle">
      <div className="containerButtonAndTitle">
        {hasIcon && (
          <NavLink to="/">
            <div className="containerArrow">
              <img src={iconArrow} alt="icone para voltar" />
            </div>
          </NavLink>
        )}
        <h1 style={{ fontSize: fontSize, fontWeight: fontWeight }}>{text}</h1>
      </div>

      {hasLine && <div className="lineTitle"></div>}
    </div>
  );
};

export default Title;
