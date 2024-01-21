import React, { useState } from "react";
import EmailHomepage from "./components/email/EmailHomepage";
import WindowsBackground from "./windows.jpg";
import WindowModule from "./components/WindowModule";
import NotePad from "./components/notepad/NotePad";

const App = () => {
  const [bgColor1, setBgColor1] = useState("#9A8C98");
  const [txtColor1, setTxtColor1] = useState("#000");
  const [emailOpen, setEmailOpen] = useState(false);
  const [installedApplications, setInstalledApplications] = useState([
    {
      name: "Email",
      icon: null,
      description: ``,
      installed: true,
      program: <EmailHomepage />,
    },
    {
      name: "File Explorer",
      icon: null,
      description: ``,
      installed: true,
      program: <EmailHomepage />,
    },
    {
      name: "Notepad",
      icon: null,
      description: ``,
      installed: true,
      program: <NotePad />,
    },
  ]);
  const [openWindows, setOpenWindows] = useState([
    {
      program: <EmailHomepage />,
      open: false,
      minimized: false,
    },
  ]);

  document.body.style.background = bgColor1;
  document.body.style.color = txtColor1;
  return (
    <div
      style={{
        height: "100vh",
        width: "100wh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${WindowsBackground})`,
        backgroundSize: "cover",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0,
          width: 430,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {installedApplications.map((app, idx) => {
          return (
            <div
              key={idx}
              style={{
                width: 100,
                height: 120,
                border: "1px dotted #d9d9d9",
                cursor: "pointer",
                margin: 10,
                borderRadius: 10,
              }}
              onClick={() => {
                setOpenWindows((prevWindows) => [
                  ...prevWindows,
                  {
                    program: app.program,
                    open: true,
                    minimized: false,
                  },
                ]);
              }}
            >
              <div
                style={{
                  height: 90,
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontVariant: "all-small-caps",
                }}
              >
                {app.name}
              </div>
            </div>
          );
        })}
      </div>
      {openWindows.map((window, index) => {
        return (
          <WindowModule
            key={index}
            program={window.program}
            open={window.open}
            openWindows={openWindows}
            setOpenWindows={setOpenWindows}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default App;
