import { createTheme } from "@mui/material/styles";
import type {} from "@mui/x-date-pickers/themeAugmentation";

const AclThemeProvider = createTheme({
  palette: {
    primary: {
      main: "#262B68",
    },
    // TODO: Change color from palette
    secondary: {
      main: "#b012d4",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "Poppins, Arial, sans-serif",
    body1: {
      color: "#323c47",
      fontWeight: 400,
      fontSize: 14,
      letterSpacing: 0,
    },
    body2: {
      color: "#9FA2B4",
      fontWeight: 700,
      fontSize: 14,
    },
  },
  components: {
    // MuiBase
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "Poppins, Arial, sans-serif",
        },
      },
    },
    // MuiCheckbox
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#CACACA",
        },
      },
    },
    // MuiTable
    MuiTableContainer: {
      styleOverrides: {
        root: {
          border: "none",
          background: "#FFFFFF",
          overflow: "auto",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          ".MuiTableCell-root": {
            color: "#9FA2B4",
            fontWeight: 700,
            fontSize: 14,
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          ".MuiTableRow-root": {
            ".MuiTableCell-root": {
              color: "#323c47",
              fontWeight: 400,
              fontSize: 14,
              letterSpacing: 0,
            },
            // ":last-child td": {
            //   borderBottom: "none",
            // },
            ":hover": {
              cursor: "pointer",
              // TODO: integrate hover
              // backgroundColor: "#F4F6FA",
            },
            ":hover .mui-table-first-row-cell": {
              // TODO: integrate hover
              // backgroundColor: "#F4F6FA",
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          minWidth: 148,
          maxHeight: 24,
          padding: "0px 8px",
        },
      },
    },
    // MuiButton
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
          minHeight: "0px",
          minWidth: "0px",
          fontWeight: 700,
          position: "relative",
          overflow: "hidden",
          whiteSpace: "nowrap",
          // fontFamily: "Roboto",
          fontSize: "14px",
        },
        contained: {
          color: "#FCFCFC",
        },
        outlined: {
          border: "solid 1px",
        },
      },
    },
    // MuiLink
    MuiLink: {
      styleOverrides: {
        root: {
          textDecorationColor: "#0097AC",
          fontWeight: 500,
          fontSize: "14px",
          fontFamily: "Poppins, Arial, sans-serif",
          letterSpacing: "-0.022em",
          ":hover": {
            cursor: "pointer",
          },
          ":disabled": {
            opacity: "40%",
            cursor: "default",
          },
        },
      },
    },
    // MuiSwitch
    MuiSwitch: {
      styleOverrides: {
        root: {
          // NOTE: Use this code for direct color change
          // "& .MuiSwitch-switchBase.Mui-checked": {
          //   color: "#FFFFFF",
          // },
          // "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
          //   backgroundColor: "#D1ECF0",
          // },
        },
      },
    },
    // MuiTextField
    MuiTextField: {
      styleOverrides: {
        root: {
          padding: "0px",
          margin: "0px",
          ".MuiInputLabel-root, .MuiInputLabel-root.Mui-focused, .MuiInputLabel-root.Mui-error":
            {
              color: "#818E9B",
            },
        },
      },
    },
    // MuiCard
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#FCFCFC",
          boxShadow: "0px 4px 11px 2px #262B6808",
          borderRadius: "16px",
        },
      },
    },
    // MuiDivider
    MuiDivider: {
      styleOverrides: {
        root: {
          color: "#9FA2B459",
          border: "1px solid #9FA2B459",
        },
      },
    },
    // MuiGrid
    MuiGrid: {
      styleOverrides: {
        container: {
          alignItems: "end",
        },
      },
    },
    // MuiPopover
    MuiPopover: {
      styleOverrides: {
        root: {
          ".MuiPopover-paper": {
            boxShadow: "4px 7px 16px 0px #00000014",
            borderRadius: "0px 0px 8px 8px",
            border: "solid #E6E8F0 1px",
          },
        },
      },
    },
    // MuiToggleButtonGroup
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          border: "solid 3px #F4F4F7",
          borderRadius: "8px",
          backgroundColor: "#F4F4F7",
          gap: "4px",
          height: "32px",
        },
      },
    },
    // MuiToggleButton
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: "#262B68 !important",
          textTransform: "none",
          border: "none !important",
          borderRadius: "5px !important",
          padding: "0px 10px",
          position: "relative",
          "&.Mui-selected": {
            background: "linear-gradient(90deg, #D1DAFF 0%, #FFD8D8 96.28%)",
            fontWeight: 700,
            letterSpacing: "-0.5px",
          },
        },
      },
    },
    // MuiDatePicker
    MuiDatePicker: {
      defaultProps: {
        // use if needed
      },
    },
    // Add other theme settings as needed
  },
});

export default AclThemeProvider;
