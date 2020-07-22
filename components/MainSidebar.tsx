/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const MainSidebar: React.FC = ({ children }) => (
  <section
    sx={{
      backgroundColor: "surface",
      borderColor: "#000",
      borderRight: ["none", "1px solid"],
      borderTop: ["1px solid", "none"],
      flexGrow: 1,
      flexBasis: "sidebar",
      p: 3,
    }}
  >
    {children}
  </section>
);

export default MainSidebar;
