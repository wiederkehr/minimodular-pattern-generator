/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const Root: React.FC = ({ children }) => (
  <div
    sx={{
      backgroundColor: "background",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    }}
  >
    {children}
  </div>
);

export default Root;
