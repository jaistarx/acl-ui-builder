import { InputProps } from "@mui/material";

export declare type AclInputSuggestionProps = InputProps & {
  options: (number | string)[];
  children?: React.ReactNode;
  onChange?: (event: number | string) => void;
};
