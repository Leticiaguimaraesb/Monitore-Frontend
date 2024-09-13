import "./styles.scss";
import { ButtonProps } from "../../types/buttonTypes";

const Button = ({
  className,
  text,
  iconLeft,
  iconRight,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      className={`defaultButton ${className}`}
      onClick={onClick}
      type={type}
    >
      {iconLeft && <img src={iconLeft} alt={iconLeft} />}
      {text}
      {iconRight && <img src={iconRight} alt={iconRight} />}
    </button>
  );
};

export default Button;
