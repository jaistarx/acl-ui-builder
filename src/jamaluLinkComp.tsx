import { AclLinkProps } from "jamaluLinkType";
import React from "react";

const AclLink = ({ children, ...props }: AclLinkProps) => {
  return (
    <>
      <a {...props}>{children}</a>
    </>
  );
};

export default AclLink;
