import React, { useRef } from "react";
import useClickOutside from "./useClickOutside";

export default function ClickOutsideComponent() {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, () => {
    console.log("clicked outside");
  });

  return (
    <>
      <div
        ref={modalRef}
        style={{
          display: "block",
          backgroundColor: "blue",
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "calc(50% - 50px)",
          left: "calc(50% - 50px)",
        }}
      ></div>
    </>
  );
}
