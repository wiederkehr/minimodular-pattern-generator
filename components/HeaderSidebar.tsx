/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const HeaderSidebar: React.FC = ({ children }) => (
  <section
    sx={{
      alignItems: "center",
      backgroundColor: "surface",
      borderColor: "#000",
      borderRight: ["none", "1px solid"],
      borderBottom: ["1px solid"],
      display: "flex",
      flexGrow: 1,
      flexBasis: "sidebar",
      minHeight: "header",
    }}
  >
    {children}
  </section>
);

export default HeaderSidebar;
