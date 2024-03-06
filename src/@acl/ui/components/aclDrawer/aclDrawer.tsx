/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, ThemeProvider } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { CSSObject, styled, Theme } from "@mui/material/styles";
import React, { useEffect } from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import { ICON_CONTAINER } from "../../constants/aclDrawerConstant";
import { IDictionary } from "../../types/aclCore";
import {
  IAclDrawerPassedProps,
  IAclDrawerProps,
} from "../../types/aclDrawerEntity";

const openedMixinDrawer = (
  theme: Theme,
  openWidth: string | undefined
): CSSObject => ({
  width: openWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixinDrawer = (
  theme: Theme,
  closeWidth: string | undefined
): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: closeWidth,
});

const openedMixinContainerBox = (
  theme: Theme,
  openWidth: string | undefined
): CSSObject => ({
  width: openWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixinContainerBox = (
  theme: Theme,
  closeWidth: string | undefined
): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: closeWidth,
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<IAclDrawerPassedProps>((props) => ({
  width: props["open-width"],
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(props.open && {
    ...openedMixinDrawer(props.theme, props["open-width"]),
    "& .MuiDrawer-paper": openedMixinDrawer(props.theme, props["open-width"]),
  }),
  ...(!props.open && {
    ...closedMixinDrawer(props.theme, props["close-width"]),
    "& .MuiDrawer-paper": closedMixinDrawer(props.theme, props["close-width"]),
  }),
}));

const ContainerBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<IAclDrawerPassedProps>((props) => ({
  width: props["open-width"],
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  position: "relative",
  height: "100%",
  ...(props.open && {
    ...openedMixinContainerBox(props.theme, props["open-width"]),
  }),
  ...(!props.open && {
    ...closedMixinContainerBox(props.theme, props["close-width"]),
  }),
}));

const getExposedProps = (props: IAclDrawerProps): IDictionary<any> => {
  const {
    openWidth,
    closeWidth,
    toggleDrawer,
    isOpen,
    iconComponent,
    iconPosition,
    ...restOfProps
  } = props;
  return {
    ...restOfProps,
    open: props.toggleDrawer ?? false,
    "open-width": props.openWidth ?? "240px",
    "close-width": props.closeWidth ?? "122px",
    "icon-component": props.iconComponent,
    "icon-position": props.iconPosition ?? { bottom: "5%", right: "-10px" },
  };
};

const AclDrawer = ({ children, ...props }: IAclDrawerProps) => {
  const exposedProps = getExposedProps(props);

  useEffect(() => {
    if (props.isOpen) {
      props.isOpen(props.toggleDrawer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.toggleDrawer]);

  return (
    <>
      <ThemeProvider theme={AclThemeProvider}>
        <ContainerBox {...exposedProps}>
          <Box sx={ICON_CONTAINER(exposedProps["icon-position"])}>
            {exposedProps["icon-component"]}
          </Box>
          <Drawer variant="permanent" {...exposedProps}>
            {children}
          </Drawer>
        </ContainerBox>
      </ThemeProvider>
    </>
  );
};

export default AclDrawer;
