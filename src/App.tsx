import {
  AclToggleButton,
  AclCard,
  AclTable,
  ITableColDef,
  AclDrawer,
  AclButton,
  AclIcon,
  AclModal,
} from "@acl/ui";
import AclThemeProvider from "@acl/ui/common/aclThemeProvider/aclThemeProvider";
import { Backdrop, CircularProgress, ThemeProvider } from "@mui/material";
import React, { HTMLAttributes, useEffect, useState } from "react";
import AxiosComponent from "utils/hooks/useAxios/exampleAxiosComponent";
import Styles from "./App.module.css";
import AclBox from "./@acl/ui/components/aclBox";
import Logo from "./logo.svg";

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
    label: "All Reports",
  },
  {
    id: 2,
    label: "Starred",
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

const columns: Array<ITableColDef> = [
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
  const [a, setA] = useState<any>(true);
  const [b, setB] = useState<any>(false);
  const [error, setError] = useState<any>();
  const [selected, setSelected] = useState<any>([]);

  const [openmodal, setOpenModal] = useState(false);

  enum UserProfile {
    Admin = "Ad",
    Manager = "Manager",
    Overreader = "Overreader",
    Abstractor = "Abstractor",
    Guest = "Guest",
  }

  useEffect(() => {
    // console.log(error);
  }, [error]);

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
          // display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#eff1f7",
        }}
      >
        <AclButton onClick={()=>setA(true)}>press</AclButton>
        <AclModal openModal={a} toggleOpenModal={setA}>Thhs</AclModal>
      </div>
    </>
  );
}

export default App;
