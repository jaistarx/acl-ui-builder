import { Popper, ThemeProvider } from "@mui/material";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { AclPopperProps } from "../../types/aclPopperEntity";

const getExposedProps = (props: AclPopperProps) => {
  return {
    ...props,
  };
};

const AclPopper = ({ children, ...props }: AclPopperProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Popper {...exposedProps}>{children}</Popper>
      </ThemeProvider>
    </>
  );
};

export default AclPopper;
