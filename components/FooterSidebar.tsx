/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const FooterSidebar: React.FC = ({ children }) => (
  <section
    sx={{
      alignItems: "center",
      backgroundColor: "surface",
      borderRight: ["none", "1px solid"],
      borderTop: ["1px solid"],
      borderColor: ["border", "border"],
      display: "flex",
      flexBasis: "sidebar",
      flexGrow: 1,
      fontSize: 0,
      justifyContent: "space-between",
      minHeight: "footer",
      p: 3,
    }}
  >
    {children}
  </section>
);

export default FooterSidebar;
