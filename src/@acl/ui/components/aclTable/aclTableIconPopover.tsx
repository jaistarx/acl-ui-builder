import React from "react";
import { AclTableIconPopoverProps } from "../../types/aclTableEntity";
import AclPopover from "../aclPopover";

const AclTableIconPopover = ({
  id,
  index,
  open,
  anchorEl,
  handleClose,
  tableColDef,
}: AclTableIconPopoverProps) => {
  return (
    <>
      <AclPopover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}>
        {tableColDef?.iconPopoverContent ? (
          tableColDef?.iconPopoverContent({
            handleClose,
            id,
            index,
            open,
            anchorEl,
            tableColDef,
          })
        ) : (
          <></>
        )}
      </AclPopover>
    </>
  );
};

export default AclTableIconPopover;
