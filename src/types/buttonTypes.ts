export type ButtonProps = {
  className?: string;
  text: string;
  iconLeft?: string;
  iconRight?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
};
