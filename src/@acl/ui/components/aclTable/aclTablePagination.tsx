import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { IconButton } from "@mui/material";
// import React from "react";
import {
  PAGINATION_ICON_GROUP,
  PAGINATION_ITEMS_PER_PAGE_CONTAINER,
  PAGINATION_ITEMS_PER_PAGE_TEXT,
  PAGINATION_ROWS_OF_TOTAL,
  PAGINATION_ROW_OF_TOTAL_ICON_CONTAINER,
  PAGINATION_WRAPPER,
} from "../../constants/aclTableConstant";
import {
  OnChangePageEnum,
  RowsPerPageEnum,
} from "../../enums/aclTablePaginationEnum";
import { AclTablePaginationProps } from "../../types/aclTableEntity";

const AclTablePagination = ({
  pageRowCount,
  page,
  onChangePage,
  totalRowCount,
}: AclTablePaginationProps) => {
  return (
    <>
      <div style={PAGINATION_WRAPPER}>
        <div style={PAGINATION_ITEMS_PER_PAGE_CONTAINER}>
          <span style={PAGINATION_ITEMS_PER_PAGE_TEXT}>Items per page:</span>
          <span>{pageRowCount}</span>
        </div>
        <div style={PAGINATION_ROW_OF_TOTAL_ICON_CONTAINER}>
          <div style={PAGINATION_ROWS_OF_TOTAL}>{`${
            (page - 1) * RowsPerPageEnum.Ten + 1
          } - ${
            (page - 1) * RowsPerPageEnum.Ten + pageRowCount
          } of ${totalRowCount}`}</div>
          <div style={PAGINATION_ICON_GROUP}>
            <IconButton
              onClick={(event) => onChangePage(OnChangePageEnum.Initial, event)}
              disabled={page - 1 === 0}
            >
              <FirstPageIcon />
            </IconButton>
            <IconButton
              onClick={(event) =>
                onChangePage(OnChangePageEnum.Previous, event)
              }
              disabled={page - 1 === 0}
            >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton
              onClick={(event) => onChangePage(OnChangePageEnum.Next, event)}
              disabled={
                page - 1 >= Math.ceil(totalRowCount / RowsPerPageEnum.Ten) - 1
              }
            >
              <KeyboardArrowRightIcon />
            </IconButton>
            <IconButton
              onClick={(event) => onChangePage(OnChangePageEnum.Final, event)}
              disabled={
                page - 1 >= Math.ceil(totalRowCount / RowsPerPageEnum.Ten) - 1
              }
            >
              <LastPageIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default AclTablePagination;
