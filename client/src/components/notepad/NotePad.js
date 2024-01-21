import React from "react";
import ClosePane from "../ClosePane";

const NotePad = ({ open, index, openWindows, setOpenWindows }) => {
  if (open) {
    return (
      <div
        style={{
          height: 800,
          width: 1200,
          minWidth: 500,
          backgroundColor: "#0d1b2a",
          color: "white",
          borderRadius: 8,
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 10,
          paddingTop: 30,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: 30,
            backgroundColor: "#000814",
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            left: 0,
            cursor: "move",
          }}
        >
          <ClosePane
            index={index}
            openWindows={openWindows}
            setOpenWindows={setOpenWindows}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              width: 300,
              height: "100%",
              alignItems: "center",
              paddingTop: 15,
            }}
          >
            <p style={{ marginLeft: 15 }}>File</p>
            <p style={{ marginLeft: 15 }}>Options</p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            padding: 20,
          }}
        >
          <input
            style={{
              width: "100%",
              background: "transparent",
              border: "none",
              color: "#fff",
              textAlign: "left",
            }}
          ></input>
        </div>
      </div>
    );
  }
};

export default NotePad;
