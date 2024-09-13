export type TextInputProps = {
  className: string;
  type?: string;
  label: string;
  placeHolder: string;
  value?: string | number | readonly string[] | undefined;
  icon?: string;
  errorMessage?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
  readOnly?: boolean;
};

export type SearchInput = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: () => void;
};
