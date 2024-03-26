import { AccordionDetails, ThemeProvider } from "@mui/material";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { IAclAccordionDetailsProps } from "../../types/aclAccordionDetailsEntity";

const getExposedProps = (props: IAclAccordionDetailsProps) => {
  return {
    ...props,
  };
};

const AclAccordionDetails = ({ ...props }: IAclAccordionDetailsProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <AccordionDetails {...exposedProps}>{props.children}</AccordionDetails>
      </ThemeProvider>
    </>
  );
};

export default AclAccordionDetails;
