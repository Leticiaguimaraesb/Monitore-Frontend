import { CustomCheckboxProps } from "../../types/customCheckboxTypes";
import "./styles.scss";

const CustomCheckbox = ({
  label,
  disabled,
  checked,
  onChange,
}: CustomCheckboxProps) => {
  const id = Math.random();
  return (
    <div className={disabled ? "checkboxDisabled" : "checkboxDefault"}>
      <input
        type="checkbox"
        id={`${id}`}
        onChange={onChange}
        disabled={disabled ? disabled : undefined}
        checked={checked ? checked : undefined}
      />
      <label htmlFor={`${id}`}>{label}</label>
    </div>
  );
};

export default CustomCheckbox;
