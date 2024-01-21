import React from "react";
import { CgClose, CgMinimize, CgMaximize } from "react-icons/cg";

const ClosePane = ({ index, openWindows, setOpenWindows }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "left",
        height: "100%",
        alignItems: "center",
        paddingTop: 15,
        position: "absolute",
        right: 5,
        top: -9,
      }}
    >
      <div
        style={{
          padding: 3,
          cursor: "pointer",
        }}
      >
        <CgMinimize />
      </div>
      <div
        style={{
          padding: 3,
          cursor: "pointer",
        }}
      >
        <CgMaximize />
      </div>

      <div
        style={{
          padding: 3,
          cursor: "pointer",
        }}
        onClick={() => {
          setOpenWindows((prevWindows) => {
            const updatedWindows = [...prevWindows];
            updatedWindows[index] = { ...updatedWindows[index], open: false };
            return updatedWindows;
          });
        }}
      >
        <CgClose />
      </div>
    </div>
  );
};

export default ClosePane;
