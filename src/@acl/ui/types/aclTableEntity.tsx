import { IDictionary } from "./aclCore";

export declare type ITableColDef = {
  field: string | number;
  headerName: string;
  id?: number | string | undefined;
  partitionKey?: number | string | undefined;
  width?: number | string | undefined;
  minWidth?: number | string | undefined;
  height?: number | string | undefined;
  minHeight?: number | string | undefined;
  align?: "left" | "right" | "center" | undefined;
  padding?: number | string;
  iconPopoverContent?: IconPopoverContent;
};

export declare type EnhancedTableHeadProps = {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
  formattedColumns: IDictionary<ITableColDef & ITableColDef[]>;
  exposedProps: IAclTableProps;
  hideHeaderBottomBorder: boolean | undefined;
};

export declare type IAclTableProps = {
  rows: Array<IDictionary<any>>;
  columns: Array<ITableColDef>;
  rowsPerPageNumber?: number;
  selectedRows?: (event: Array<IDictionary<any>>) => void;
  containerStyle?: IDictionary<string | number>;
  hideCheckbox?: boolean;
  hidePagination?: boolean | undefined;
  hideRowBottomBorder?: boolean | undefined;
  hideHeaderBottomBorder?: boolean | undefined;
  page?: number;
  onChangePage?: (
    changePageEnum: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  totalRowCount?: number;
  onRowClick?: (event: IDictionary<any>) => void;
  hideHeaderIcon?: boolean;
};

// Pagination types

export declare type AclTablePaginationProps = {
  pageRowCount: number;
  page: number;
  onChangePage: (
    changePageEnum: string,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  totalRowCount: number;
};

export declare type AclTableIconPopoverProps = {
  id: string | undefined;
  index: number;
  open: boolean;
  anchorEl: HTMLDivElement | null;
  tableColDef: ITableColDef;
  handleClose: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export declare type IconPopoverContent = (
  props: AclTableIconPopoverProps
) => JSX.Element;
