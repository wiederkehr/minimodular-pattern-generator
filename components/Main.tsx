/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const Main: React.FC = ({ children }) => (
  <main
    sx={{
      width: "100%",
      display: "flex",
      flex: "1 1 auto",
      flexDirection: "row-reverse",
      flexWrap: "wrap",
      position: "relative",
      zIndex: 100,
    }}
  >
    {children}
  </main>
);

export default Main;
