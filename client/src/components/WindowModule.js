import React from "react";

const WindowModule = ({
  program,
  open,
  openWindows,
  index,
  setOpenWindows,
}) => {
  const arrayLen = openWindows.filter((w, i) => {
    return w.open === true && i <= index;
  }).length;
  return (
    <div
      style={{
        position: "absolute",
        top: arrayLen * 100,
        left: arrayLen * 50,
      }}
    >
      {open &&
        React.cloneElement(program, {
          open,
          index,
          openWindows,
          setOpenWindows,
        })}
    </div>
  );
};

export default WindowModule;
