import React, { useState } from "react";

const EmailFolder = ({ folder }) => {
  const [isHovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        cursor: "pointer",
        width: "100%",
        fontVariant: "all-small-caps",
        userSelect: "none",
        transition: "background-color 0.3s", // Smooth transition for hover effect
        backgroundColor: isHovered ? "#495057" : "transparent", // Change background color on hover
        padding: 5,
        borderRadius: 5,
      }}
    >
      <div
        style={{
          marginRight: 5,
        }}
      >
        {folder.icon}
      </div>
      <div>{`${folder.alias}`}</div>
    </div>
  );
};

export default EmailFolder;
