import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import AclThemeProvider from "../../common/aclThemeProvider/aclThemeProvider";
import {
  TABLE_BODY_FIRST_CELL,
  TABLE_BODY_FIRST_CELL_VALUE,
  TABLE_BODY_ROW_CELL,
  TABLE_BODY_ROW_VALUE,
  TABLE_HEADER_CELL,
  TABLE_HEADER_FIRST_CELL,
  TABLE_HEADER_FIRST_CELL_WRAPPER,
  TABLE_HEAD_ROW_NAME,
  TABLE_HEAD_ROW_VALUE,
  TABLE_ROW,
  TABLE_BODY_FIRST_CELL_WRAPPER,
  TABLE_BOX,
  TABLE_HEAD_NAME_ICON_GROUP,
  TABLE_PAGINATION_WRAPPER,
} from "../../constants/aclTableConstant";
import { IDictionary } from "../../types/aclCore";
import {
  EnhancedTableHeadProps,
  IAclTableProps,
  ITableColDef,
} from "../../types/aclTableEntity";
import AclIcon from "../aclIcon";
import AclTableIconPopover from "./aclTableIconPopover";
import AclTablePagination from "./aclTablePagination";
import FunnelIconApplied from "./icons/funnel-icon-applied.svg";
import FunnelIconDefault from "./icons/funnel-icon-default.svg";

const getExposedProps = (props: IAclTableProps) => {
  return {
    rows: props.rows,
    columns: props.columns,
    rowsPerPageNumber: props.rowsPerPageNumber ?? undefined,
    selectedRows: props.selectedRows ?? undefined,
    hideCheckbox: props.hideCheckbox ?? false,
    hidePagination: props.hidePagination ?? false,
    hideHeaderIcon: props.hideHeaderIcon ?? false,
    hideRowBottomBorder: props.hideRowBottomBorder ?? false,
    hideHeaderBottomBorder: props.hideHeaderBottomBorder ?? false,
    page: props.page ?? 1,
    totalRowCount: props.totalRowCount ?? -1,
    onChangePage: props.onChangePage ?? undefined,
    onRowClick: props.onRowClick ?? undefined,
  };
};

function EnhancedTableHead(tabelHeadProps: EnhancedTableHeadProps) {
  const {
    onSelectAllClick,
    numSelected,
    rowCount,
    formattedColumns,
    exposedProps,
    hideHeaderBottomBorder,
  } = tabelHeadProps;

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const [popoverIndex, setPopoverIndex] = useState<number>(-1);

  const handleIconPopoverClick = (
    event: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    event?.preventDefault();
    event?.stopPropagation();
    setAnchorEl(event?.currentTarget);
    setPopoverIndex(index);
  };

  const handleIconPopoverClose = (event: React.MouseEvent<HTMLDivElement>) => {
    event?.preventDefault();
    event?.stopPropagation();
    setAnchorEl(null);
    setPopoverIndex(-1);
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell sx={TABLE_HEADER_FIRST_CELL(hideHeaderBottomBorder)}>
          <div
            style={TABLE_HEADER_FIRST_CELL_WRAPPER(
              formattedColumns.firstColumn
            )}
          >
            {!exposedProps.hideCheckbox && (
              <Checkbox
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                  "aria-label": "select all items",
                }}
              />
            )}
            <div
              style={TABLE_HEAD_ROW_VALUE}
              onClick={(event: React.MouseEvent<HTMLDivElement>) =>
                handleIconPopoverClick(event, 0)
              }
            >
              <div style={TABLE_HEAD_ROW_NAME}>
                {formattedColumns.firstColumn?.headerName}
              </div>
              {!exposedProps.hideHeaderIcon && (
                <div>
                  <AclIcon src={FunnelIconDefault} alt="funnel" />
                  {popoverIndex === 0 && (
                    <AclTableIconPopover
                      id={`table-popover-${0}`}
                      index={0}
                      open={Boolean(anchorEl)}
                      handleClose={handleIconPopoverClose}
                      anchorEl={anchorEl}
                      tableColDef={formattedColumns.firstColumn}
                    ></AclTableIconPopover>
                  )}
                </div>
              )}
            </div>
          </div>
        </TableCell>
        {formattedColumns.splittedColumns?.map(
          (headCell: ITableColDef, index: number) => (
            <TableCell
              padding="none"
              key={headCell.field + "-" + (index + 1)}
              sx={TABLE_HEADER_CELL(hideHeaderBottomBorder)}
            >
              <div
                style={TABLE_HEAD_NAME_ICON_GROUP(headCell)}
                onClick={(event: React.MouseEvent<HTMLDivElement>) =>
                  handleIconPopoverClick(event, index + 1)
                }
              >
                <div style={TABLE_HEAD_ROW_NAME}>{headCell.headerName}</div>
                {!exposedProps.hideHeaderIcon && (
                  <div>
                    {[-1].includes(index + 1) ? (
                      <AclIcon
                        src={FunnelIconApplied}
                        alt="funnel-default"
                        aria-owns={
                          anchorEl ? `table-popover-${index + 1}` : undefined
                        }
                        aria-haspopup="true"
                        onClick={handleIconPopoverClick}
                      />
                    ) : (
                      <AclIcon
                        src={FunnelIconDefault}
                        alt="funnel-applied"
                        aria-owns={
                          anchorEl ? `table-popover-${index + 1}` : undefined
                        }
                        aria-haspopup={true}
                      />
                    )}

                    {popoverIndex === index + 1 && (
                      <AclTableIconPopover
                        id={`table-popover-${index + 1}`}
                        index={index + 1}
                        open={Boolean(anchorEl)}
                        handleClose={handleIconPopoverClose}
                        anchorEl={anchorEl}
                        tableColDef={headCell}
                      ></AclTableIconPopover>
                    )}
                  </div>
                )}
              </div>
            </TableCell>
          )
        )}
      </TableRow>
    </TableHead>
  );
}

export default function AclTable(props: IAclTableProps) {
  const exposedProps = getExposedProps(props);
  const [formattedColumns, setFormattedColumns] = useState<IDictionary<any>>({
    firstColumn: {},
    splittedColumns: [],
  });
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSelected = event.target.checked
      ? exposedProps?.rows?.map((row: IDictionary<any>) => JSON.stringify(row))
      : [];
    setSelected(newSelected);
    setParseSelectedRows(newSelected);
  };

  const handleRowClick = (event: React.MouseEvent<any>, row: string) => {
    const selectedIndex = selected.indexOf(row);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setParseSelectedRows(newSelected as Array<string>);
    setSelected(newSelected);
  };

  const setParseSelectedRows = (selected: Array<string>) => {
    const parsedSelectedRows = selected.map((rowString: string) =>
      JSON.parse(rowString)
    );
    if (exposedProps?.selectedRows) {
      exposedProps?.selectedRows(parsedSelectedRows);
    }
  };

  const isSelected = (row: string) => selected.indexOf(row) !== -1;

  useEffect(() => {
    const [firstColumnInHead, ...splittedColumnsInHead] = exposedProps?.columns;
    setFormattedColumns({
      firstColumn: firstColumnInHead,
      splittedColumns: splittedColumnsInHead,
    });
  }, [exposedProps?.rows, exposedProps?.columns]);

  return (
    <>
      <Box>
        <ThemeProvider theme={AclThemeProvider}>
          <Box sx={TABLE_BOX(props.containerStyle)}>
            <TableContainer>
              <Table stickyHeader aria-labelledby="tableTitle" size="small">
                <EnhancedTableHead
                  numSelected={selected.length}
                  onSelectAllClick={handleSelectAllClick}
                  rowCount={exposedProps?.rows.length}
                  formattedColumns={formattedColumns}
                  exposedProps={exposedProps}
                  hideHeaderBottomBorder={props.hideHeaderBottomBorder}
                />
                <TableBody>
                  {exposedProps?.rows?.map(
                    (row: IDictionary<any>, rowIndex: number) => {
                      const isItemSelected = isSelected(JSON.stringify(row));
                      const labelId = `enhanced-table-${rowIndex}`;

                      return (
                        <TableRow
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={JSON.stringify(row)}
                          selected={isItemSelected}
                          sx={TABLE_ROW(isItemSelected)}
                        >
                          <TableCell
                            sx={TABLE_BODY_FIRST_CELL(
                              isItemSelected,
                              exposedProps.hideRowBottomBorder
                            )}
                            className="mui-table-first-row-cell"
                          >
                            <div
                              style={TABLE_BODY_FIRST_CELL_WRAPPER(
                                formattedColumns.firstColumn
                              )}
                            >
                              {!exposedProps.hideCheckbox && (
                                <Checkbox
                                  checked={isItemSelected}
                                  inputProps={{
                                    "aria-labelledby": labelId,
                                  }}
                                  onClick={(event: React.MouseEvent<any>) =>
                                    handleRowClick(event, JSON.stringify(row))
                                  }
                                />
                              )}
                              <div
                                onClick={() =>
                                  exposedProps?.onRowClick
                                    ? exposedProps?.onRowClick(row)
                                    : null
                                }
                                style={TABLE_BODY_FIRST_CELL_VALUE}
                              >
                                {row[formattedColumns?.firstColumn?.field]}
                              </div>
                            </div>
                          </TableCell>
                          {formattedColumns?.splittedColumns?.map(
                            (value: ITableColDef, index: number) => (
                              <TableCell
                                key={index}
                                scope="row"
                                padding="none"
                                sx={TABLE_BODY_ROW_CELL(
                                  isItemSelected,
                                  exposedProps.hideRowBottomBorder
                                )}
                                onClick={() =>
                                  exposedProps?.onRowClick
                                    ? exposedProps?.onRowClick(row)
                                    : null
                                }
                              >
                                <div style={TABLE_BODY_ROW_VALUE(value)}>
                                  {row[value.field]}
                                </div>
                              </TableCell>
                            )
                          )}
                        </TableRow>
                      );
                    }
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            {!exposedProps.hidePagination && (
              <div style={TABLE_PAGINATION_WRAPPER}>
                <AclTablePagination
                  pageRowCount={exposedProps.rows.length}
                  page={exposedProps.page}
                  onChangePage={(e: any, event: any) => console.log(e, event)}
                  totalRowCount={exposedProps.totalRowCount}
                ></AclTablePagination>
              </div>
            )}
          </Box>
        </ThemeProvider>
      </Box>
    </>
  );
}
