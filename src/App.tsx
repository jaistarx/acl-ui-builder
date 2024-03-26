import {
  AclToggleButton,
  AclCard,
  AclDrawer,
  AclButton,
  AclIcon,
  AclModal,
  AclInputBase,
  AclPopover,
  AclInput,
  AclInputSuggestion,
  AclPopper,
  AclInputSearch,
  AclAccordion,
  AclAccordionSummary,
  AclAccordionDetails,
  AclLink,
} from "@acl/ui";
import AclThemeProvider from "@acl/ui/common/aclThemeProvider/aclThemeProvider";
import {
  Autocomplete,
  Backdrop,
  Box,
  CircularProgress,
  Divider,
  Input,
  Popper,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { HTMLAttributes, useEffect, useRef, useState } from "react";
import AxiosComponent from "utils/hooks/useAxios/exampleAxiosComponent";
import AppStyles from "./App.module.css";
import AclBox from "./@acl/ui/components/aclBox";
import Logo from "./logo.svg";
import Vector from "./Vector.svg";
import ClickOutsideComponent from "utils/hooks/useClickOutside/exampleClickOutsideComponent";
import { useClickOutside } from "utils";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navig from "./side-menu-option-line-middle.svg";
import LastNavig from "./side-menu-option-line-end.svg";
import CDown from "./chevron-down-icon.svg";

const IconPopoverContent = (props: any) => {
  return (
    <>
      <AclBox style={{ width: "219px" }}></AclBox>
    </>
  );
};
const tOptions = ["1", "2", "3", "4", "5", "6", "7"];
const options = [
  {
    id: 1,
    label: "All Reports an huhih salnv sdsdv kaksd hvh",
  },
  {
    id: 1,
    label: "Starred",
  },
  {
    id: 3,
    label: "asdv asdvasd vasdvasdv",
  },
  {
    id: 3,
    label: "asdvasd vasdvasdv",
  },
  // {
  //   id: 3,
  //   label: "3",
  // },
  // {
  //   id: 4,
  //   label: "4",
  // },
];

const columns: Array<any> = [
  {
    field: "chaseId",
    headerName: "Chase ID",
    minWidth: "330px ",
    iconPopoverContent: IconPopoverContent,
  },
  {
    field: "sampleId",
    headerName: "Sample ID",
    iconPopoverContent: IconPopoverContent,
  },
  {
    field: "measure",
    headerName: "Measure",
    id: "hedisMeasure",
    partitionKey: "hedispredefineddata",
    iconPopoverContent: IconPopoverContent,
  },
  {
    field: "chaseStatus",
    headerName: "Chase Status",
    id: "chaseStatus",
    partitionKey: "hedispredefineddata",
    iconPopoverContent: IconPopoverContent,
  },
  {
    field: "memberId",
    headerName: "Member ID",
    iconPopoverContent: IconPopoverContent,
  },
  {
    field: "memberName",
    headerName: "Member Name",
    iconPopoverContent: IconPopoverContent,
  },
  {
    field: "provider",
    headerName: "Provider Name",
    iconPopoverContent: IconPopoverContent,
  },
  {
    field: "abstractor",
    headerName: "Abstractor",
    iconPopoverContent: IconPopoverContent,
  },
  {
    field: "overreader",
    headerName: "Overreader",
    iconPopoverContent: IconPopoverContent,
  },
  {
    field: "workflowStatus",
    headerName: "Workflow Status",
    id: "workflowStatus",
    partitionKey: "hedispredefineddata",
    iconPopoverContent: IconPopoverContent,
  },
  {
    field: "chaseSource",
    headerName: "Chase Source",
    id: "chaseSource",
    partitionKey: "hedispredefineddata",
    iconPopoverContent: IconPopoverContent,
  },
  {
    field: "compliant",
    headerName: "Compliant",
    id: "complianceStatus",
    partitionKey: "hedispredefineddata",
    iconPopoverContent: IconPopoverContent,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const VereButton = (props: HTMLAttributes<HTMLButtonElement>) => {
  const a = 12;
  const { style, children, ...restOfProps } = props;
  const b = 12;
  return (
    <button style={{ backgroundColor: "red", color: "green" }} {...restOfProps}>
      {children}
    </button>
  );
};

function App() {
  const [a, setA] = useState<any>(false);
  const [b, setB] = useState<any>(false);
  const [val, ivalue] = useState<any>("false");
  const [error, setError] = useState<any>();
  const [selected, setSelected] = useState<any>([]);

  const [openmodal, setOpenModal] = useState(false);

  const handleValueChange = (value: any) => {
    ivalue(value);
    if (!!value) {
      setA(false);
    } else {
      setA(true);
    }
  };
  const [clientDropdownAnchorEl, setClientDropdownAnchorEl] =
    useState<HTMLDivElement | null>(null);
  const clientDropdownRef = useRef<HTMLDivElement>(null);
  const clientSelectionInputRef = useRef<HTMLInputElement>(null);
  const clientDropdownOpen = Boolean(clientDropdownAnchorEl);
  const clientDropdownId = clientDropdownOpen
    ? "client-dropdown-popper"
    : undefined;
  useClickOutside(clientDropdownRef, () => {
    setClientDropdownAnchorEl(null);
  });

  const handleClientSelect = () => {
    setClientDropdownAnchorEl(clientDropdownRef.current);
    // clientSelectionInputRef?.current?.focus();
  };

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    // <>
    //   <div className={Styles["header"]}>header</div>
    //   <div className={Styles["main"]}>
    //     <div className={Styles["left-main"]}>
    //       <div className={Styles["div-left-top"]}>div left top</div>
    //       <div className={Styles["div-left-bottom"]}>div left bottom</div>
    //     </div>
    //     <div className={Styles["right-main"]}>div2</div>
    //   </div>
    //   <div style={{ display: "flex" }}>
    //     <AclCard
    //       style={{
    //         borderTopRightRadius: "0px",    //         borderBottomRightRadius: "0px",    //         border: "solid black 1px",    //         borderRight: "none",    //       }}
    //     >
    //       {/* <header>header</header> */}
    //       <body>body1</body>
    //     </AclCard>
    //     <AclCard
    //       style={{
    //         borderTopLeftRadius: "0px",    //         borderBottomLeftRadius: "0px",    //         border: "solid black 1px",    //       }}
    //     >
    //       {/* <header>header</header> */}
    //       <body>body2</body>
    //     </AclCard>
    //   </div>
    //   has context menu
    // </>
    <>
      {/* <Collapse in={b} unmountOnExit>
        <AclDrawer openWidth="240px" closeWidth="122px">
          <div
            style={{ backgroundColor: "gray",width: "100%",height: "100%" }}
          >
            {UserProfile["Admin" as keyof typeof UserProfile]}
            <AclButton onClick={() => setOpenModal(true)}>open modal</AclButton>
            <AclModal openModal={openmodal} toggleOpenModal={setOpenModal}>
              <h1>This is modal</h1>
            </AclModal>
          </div>
        </AclDrawer>
      </Collapse> */}
      {/* <div style={{ position: "absolute",top: "50%",left: "50%" }}>
        <AclButton onClick={() => setB(!b)} variant="outlined">
          click
        </AclButton>
      </div>
      {b && <AxiosComponent></AxiosComponent>}
      <div>{error?.message}</div> */}
      {/* <div>
        {true && <div className={Styles["cssload-container"]}>
          <div className={Styles["cssload-speeding-wheel"]}></div>
        </div>}
      </div> */}

      {/* <div
        style={{
          display: "flex",          justifyContent: "center",          alignItems: "center",          height: "100vh",        }}
      >
        <div style={{ width: "100%",height: "90vh" }}>
          <AclDropzone uploadedFiles={(e: any) => console.log(e)}></AclDropzone>
        </div>
        <AclCard>
          <header>hi</header>
         hello
        </AclCard>
      </div> */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "lightblue",
        }}
      >
        {/* <Autocomplete
            freeSolo
            open={a}
            value={val}
            options={tOptions}
            onFocus={(e: any) => handleValueChange(e.target.value)}
            onBlur={() => setA(false)}
            onInputChange={(_, value) => handleValueChange(value)}
            getOptionLabel={(option: any) => `${option}`}
            renderInput={(params) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                <AclIcon
                  src={Logo}
                  style={{ width: "24px", height: "24px" }}
                ></AclIcon>
                <AclInput {...params} />
                <AclIcon
                  src={Logo}
                  style={{ width: "24px", height: "24px" }}
                ></AclIcon>
              </div>
            )}
          ></Autocomplete> */}
        {/* <AclAutocomplete
            renderInput={(params) => (
              <div style={{ display: "flex", alignItems: "center" }}>
                <AclIcon
                  src={Logo}
                  style={{ width: "24px", height: "24px" }}
                ></AclIcon>
                <AclInput {...params} />
              </div>
            )}
            options={tOptions}
            onChange={(value) => console.log(value)}
          ></AclAutocomplete> */}
        {/* <div> */}
        <AclDrawer openWidth="300px" toggleDrawer={true}>
          <div
            style={{
              padding: "10px",
              height: "100%",
              // backgroundColor: "green",
              display: "flex",
              flexDirection: "column",
              rowGap: "8px",
            }}
          >
            {[
              "1asasdc sdcasd",
              "2sdac sdcasd",
              "3asdca sd csd",
              "4sdc asd sadc",
            ].map((a) => (
              <AclAccordion
                disableGutters
                expanded={expanded === a}
                onChange={handleChange(a)}
              >
                <AclAccordionSummary
                  aria-controls={a + "-panel-content"}
                  id={a + "-panel-header"}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <div>{a}</div>
                    <AclIcon
                      src={CDown}
                      style={{
                        transform: expanded === a ? "rotate(180deg)" : "none",
                        transition: "0.3s",
                      }}
                    />
                  </div>
                </AclAccordionSummary>
                <AclAccordionDetails>
                  <>
                    {["Encounter 1", "Encounter 2", "Encounter 3"].map(
                      (b, index) => (
                        <div
                          style={{
                            padding: "0px",
                            display: "flex",
                            columnGap: "8px",
                            alignItems: "center",
                            height: "37px",
                          }}
                        >
                          <AclIcon
                            src={index < 2 ? Navig : LastNavig}
                            style={{
                              height: "100%",
                              width: "14px",
                            }}
                          ></AclIcon>
                          <div>{b}</div>
                        </div>
                      )
                    )}
                  </>
                </AclAccordionDetails>
              </AclAccordion>
            ))}
          </div>
        </AclDrawer>
      </div>
    </>
  );
}

export default App;
