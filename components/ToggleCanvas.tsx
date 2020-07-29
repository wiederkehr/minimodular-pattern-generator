/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const ToggleCanvas: React.FC = () => {
  return (
    <a
      sx={{
        p: 2,
        cursor: "pointer",
        "&:hover": { textDecoration: "underline" },
      }}
      onClick={(event: React.MouseEvent) => {
        event.preventDefault();
        console.log("Toggle Canvas");
      }}
    >
      See {true === true ? "Instructions" : "Pattern"}
    </a>
  );
};

export default ToggleCanvas;
