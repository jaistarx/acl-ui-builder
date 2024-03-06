import { Popover, ThemeProvider } from "@mui/material";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { IDictionary } from "../../types/aclCore";
import { AclPopoverProps } from "../../types/aclPopoverEntity";

const getExposedProps = (props: AclPopoverProps): IDictionary<any> => {
  return {
    ...props,
    anchorOrigin: props.anchorOrigin ?? {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: props.transformOrigin ?? {
      vertical: "top",
      horizontal: "left",
    },
  };
};

const AclPopover = ({ children, ...props }: AclPopoverProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <Popover open={props.open} {...exposedProps}>
          {children}
        </Popover>
      </ThemeProvider>
    </>
  );
};

export default AclPopover;
