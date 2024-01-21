import React from "react";
import { EmailFolders } from "../../data/EmailFolders";
import EmailFolder from "./EmailFolder";
import ClosePane from "../ClosePane";

const EmailHomepage = ({ open, index, openWindows, setOpenWindows }) => {
  if (open) {
    return (
      <div
        style={{
          height: 800,
          width: 800,
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
          }}
        >
          <div
            style={{
              width: "20%",
              height: "100%",
              padding: 10,
            }}
          >
            {" "}
            {EmailFolders.map((folder, index) => {
              return <EmailFolder key={index} folder={folder} />;
            })}
          </div>

          <div
            style={{
              width: "25%",
              height: "100%",
              backgroundColor: "#1b263b",
              border: "2px sold white",
              padding: 10,
            }}
          ></div>
          <div
            style={{
              height: "100%",
              width: "55%",
              border: "2px sold white",
              padding: 10,
            }}
          ></div>
        </div>
      </div>
    );
  }
};

export default EmailHomepage;
