export type DropdownType = {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
};
