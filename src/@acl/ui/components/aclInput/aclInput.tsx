import { ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { IDictionary } from "../../types/aclCore";
import { AclInputProps } from "../../types/aclInputEntity";

const getExposedProps = (props: AclInputProps): IDictionary<any> => {
  return {
    ...props,
    variant: props.variant ?? "standard",
  };
};

const AclInput = ({ children, ...props }: AclInputProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <TextField {...exposedProps}>{children}</TextField>
      </ThemeProvider>
    </>
  );
};

export default AclInput;
