import { IDictionary } from "../types";
import { ITableColDef } from "../types/aclTableEntity";

const getEachCellStyle = (column: ITableColDef) => {
  return {
    justifyContent: column.align ?? "left",
    width: column.width ?? 148,
    minWidth: column.minWidth ?? 0,
    height: column.height ?? 48,
    minHeight: column.minHeight ?? 0,
    padding: column.padding ?? "0px",
  };
};

export const TABLE_HEADER_FIRST_CELL = (
  hideHeaderBottomBorder: boolean | undefined
) => {
  return {
    padding: "0px",
    position: "sticky",
    left: 0,
    zIndex: 50,
    backgroundColor: "#FFFFFF",
    borderBottom: hideHeaderBottomBorder ? "none" : "",
  };
};

export const TABLE_HEADER_CELL = (
  hideHeaderBottomBorder: boolean | undefined
) => {
  return {
    borderBottom: hideHeaderBottomBorder ? "none" : "",
  };
};

export const TABLE_HEADER_FIRST_CELL_WRAPPER = (firstColumn: ITableColDef) => {
  return (
    //   boxShadow: "0px 10px 5px 1px #00000080",
    {
      display: "flex",
      alignItems: "center",
      ...getEachCellStyle(firstColumn),
    }
  );
};

export const TABLE_HEAD_NAME_ICON_GROUP = (column: ITableColDef) => {
  return (
    //   boxShadow: "0px 10px 5px 1px #00000080",
    {
      display: "flex",
      columnGap: "22px",
      alignItems: "center",
      cursor: "pointer",
      ...getEachCellStyle(column),
    }
  );
};

export const TABLE_ROW = (isItemSelected: boolean) => {
  return {
    "&:hover": {
      //   backgroundColor: "#9FA2B4",
    },
    zIndex: 3,
    backgroundColor: isItemSelected ? "#D1ECF0" : "",
  };
};

export const TABLE_BODY_FIRST_CELL = (
  isItemSelected: boolean,
  hideRowBottomBorder: boolean
) => {
  return {
    padding: "0px",
    position: "sticky",
    borderBottom: hideRowBottomBorder ? "none" : "",
    left: 0,
    zIndex: 2,
    backgroundColor: isItemSelected ? "#D1ECF0" : "#FFFFFF",
  };
};

export const TABLE_BODY_FIRST_CELL_WRAPPER = (firstColumn: ITableColDef) => {
  return {
    display: "flex",
    alignItems: "center",
    ...getEachCellStyle(firstColumn),
  };
  // boxShadow: "4px 0px 8px 0px #00000080",
  //   clipPath: "inset(0px -5px 0px 0px)",
};

export const TABLE_BODY_ROW_CELL = (
  isItemSelected: boolean,
  hideRowBottomBorder: boolean
) => {
  return {
    backgroundColor: isItemSelected ? "#D1ECF0" : "",
    borderBottom: hideRowBottomBorder ? "none" : "",
    zIndex: 1,
  };
};

export const TABLE_HEAD_ROW_VALUE = {
  marginLeft: "8px",
  display: "flex",
  alignItems: "center",
  columnGap: "22px",
  cursor: "pointer",
};

export const TABLE_HEAD_ROW_NAME = {
  whiteSpace: "nowrap",
  fontWeight: 600,
  fontSize: "14px",
} as IDictionary<string | number>;

export const TABLE_BODY_FIRST_CELL_VALUE = { ...TABLE_HEAD_ROW_VALUE };

export const TABLE_BODY_ROW_VALUE = (column: ITableColDef) => {
  return {
    display: "flex",
    alignItems: "center",
    ...getEachCellStyle(column),
  };
};

export const TABLE_BOX = (
  containerStyle: IDictionary<string | number> | undefined
) => {
  return {
    border: "1px solid #E6E8F0",
    borderBottom: "none",
    background: "#FFFFFF",
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    ...containerStyle,
  };
};

// Pagination constants

export const PAGINATION_WRAPPER = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

export const PAGINATION_ROW_OF_TOTAL_ICON_CONTAINER = {
  display: "flex",
  alignItems: "center",
  columnGap: "32px",
};

export const PAGINATION_ITEMS_PER_PAGE_CONTAINER = {
  display: "flex",
  alignItems: "center",
  columnGap: "4px",
  fontSize: "14px",
  fontWeight: 400,
};

export const PAGINATION_ITEMS_PER_PAGE_TEXT = {
  color: "#9FA2B4",
};

export const PAGINATION_ROWS_OF_TOTAL = {
  fontSize: "14px",
  fontWeight: 400,
  color: "#9FA2B4",
};

export const PAGINATION_ICON_GROUP = { display: "flex", alignItems: "center" };

export const TABLE_PAGINATION_WRAPPER = { padding: "10px 22px" };
