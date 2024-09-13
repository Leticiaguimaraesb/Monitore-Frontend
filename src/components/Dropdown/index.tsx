import { useState } from "react";
import iconArrowGray from "./../../assets/iconArrowGray.svg";
import iconArrowBrown from "./../../assets/iconArrowBrown.svg";
import { DropdownType } from "../../types/dropdownTypes";
import "./styles.scss";

const Dropdown = ({ options, selectedOption, onSelect }: DropdownType) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="containerDropdown">
      <div
        className={`dropdownSelect ${isOpen ? "open" : ""}`}
        onClick={handleSelectClick}
      >
        <span>{selectedOption}</span>
        {isOpen ? (
          <img src={iconArrowBrown} alt="Icone de seta para abrir" />
        ) : (
          <img src={iconArrowGray} alt="Icone de seta para abrir" />
        )}
      </div>
      {isOpen && (
        <div className="containerOptions">
          {options.map((option: string) => (
            <div
              key={option}
              className="option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
