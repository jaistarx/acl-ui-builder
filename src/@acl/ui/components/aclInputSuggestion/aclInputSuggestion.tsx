import {
  ClickAwayListener,
  Divider,
  InputBase,
  Popper,
  ThemeProvider,
} from "@mui/material";
import React, { useRef, useState } from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import {
  DIVIDER_CONTAINER,
  INPUT_OUTER_CONTAINER,
  OPTIONS_CONTAINER,
  OPTIONS_OUTER_CONTAINER,
  POPPER_CONTAINER,
  SEARCH_ICON,
  SEARCH_ICON_CONTAINER,
} from "../../constants/aclInputSuggestion";
import { AclInputSuggestionProps } from "../../types/aclInputSuggestionEntity";
import AclIcon from "../aclIcon";
import ClockIcon from "./icons/clock-icon.svg";
import CloseIcon from "./icons/close-icon.svg";
import SearchIcon from "./icons/search-icon.svg";

const getExposedProps = (props: AclInputSuggestionProps) => {
  const { onChange, ...restOfProps } = props;
  return {
    ...restOfProps,
  };
};

const AclInputSuggestion = ({ ...props }: AclInputSuggestionProps) => {
  const exposedProps = getExposedProps(props);
  const containerRef = useRef<any>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLDivElement>(null);
  const [value, setValue] = useState<string | number>("");

  const handleValueChange = (value: string | number) => {
    setValue(value);
    if (props.onChange) {
      props.onChange(value);
    }
    if (Boolean(value)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(containerRef.current);
    }
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <div
          onClick={(event) => setAnchorEl(event.currentTarget)}
          ref={containerRef}
          style={INPUT_OUTER_CONTAINER(open)}
        >
          <div style={SEARCH_ICON_CONTAINER}>
            <AclIcon src={SearchIcon} style={SEARCH_ICON}></AclIcon>
            <InputBase
              fullWidth
              value={value}
              onChange={(e) => handleValueChange(e.target.value)}
              {...exposedProps}
            ></InputBase>
            {Boolean(value) && (
              <AclIcon
                src={CloseIcon}
                onClick={() => handleValueChange("")}
              ></AclIcon>
            )}
          </div>
        </div>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <ClickAwayListener onClickAway={handleClickAway}>
            <div style={POPPER_CONTAINER(containerRef?.current?.offsetWidth)}>
              <div style={DIVIDER_CONTAINER}>
                <Divider></Divider>
              </div>
              <div style={OPTIONS_OUTER_CONTAINER}>
                {exposedProps.options.map(
                  (option: string | number, key: number) => (
                    <div
                      onClick={() => handleValueChange(option)}
                      key={key}
                      style={OPTIONS_CONTAINER}
                    >
                      <AclIcon src={ClockIcon}></AclIcon>
                      <span>{option}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </ClickAwayListener>
        </Popper>
      </ThemeProvider>
    </>
  );
};

export default AclInputSuggestion;
