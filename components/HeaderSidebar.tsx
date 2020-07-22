/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const HeaderSidebar: React.FC = ({ children }) => (
  <section
    sx={{
      alignItems: "center",
      backgroundColor: "surface",
      borderRight: ["none", "1px solid"],
      borderBottom: ["1px solid"],
      borderColor: ["border", "border"],
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
