/** @jsxImportSource theme-ui */

import React from "react";

const FooterSidebar: React.FC = ({ children }) => (
  <section
    sx={{
      alignItems: "center",
      backgroundColor: "surface",
      borderRight: ["none", "1px solid"],
      borderTop: ["1px solid"],
      borderColor: ["border", "border"],
      color: "muted",
      display: "flex",
      flexBasis: "sidebar",
      flexGrow: 1,
      fontSize: 1,
      justifyContent: "space-between",
      minHeight: "footer",
      padding: 3,
      textTransform: "uppercase",
    }}
  >
    {children}
  </section>
);

export default FooterSidebar;
