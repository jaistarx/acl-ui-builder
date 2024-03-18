import { InputBase, ThemeProvider } from "@mui/material";
import React from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { INPUT_SEARCH_WRAPPER } from "../../constants/aclInputSearchConstant";
import { AclInputSearchProps } from "../../types/aclInputSearchEntity";
import AclIcon from "../aclIcon";
import SearchIcon from "./icons/search-icon.svg";

const getExposedProps = (props: AclInputSearchProps) => {
  return {
    ...props,
  };
};

const AclInputSearch = ({ ...props }: AclInputSearchProps) => {
  const exposedProps = getExposedProps(props);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <div style={INPUT_SEARCH_WRAPPER}>
          <AclIcon src={SearchIcon}></AclIcon>
          <InputBase {...exposedProps}></InputBase>
        </div>
      </ThemeProvider>
    </>
  );
};

export default AclInputSearch;
