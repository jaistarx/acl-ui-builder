import { AutocompleteProps } from "@mui/material";
import React from "react";

type OmittedAutocompleteProps = {
  // Omit the property to override it
  onChange?: any;
};

export declare type AclAutocompleteProps<T> = Omit<
  AutocompleteProps<
    T,
    boolean | undefined,
    boolean | undefined,
    boolean | undefined
  >,
  keyof OmittedAutocompleteProps
> & {
  children?: React.ReactNode;
  onChange?: (event: any[]) => void;
};
