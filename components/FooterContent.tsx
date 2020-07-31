/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const FooterContent: React.FC = ({ children }) => (
  <section
    sx={{
      alignItems: "center",
      display: ["none", "flex"],
      flexBasis: 0,
      flexGrow: 99999,
      flexDirection: "row",
      flexWrap: "nowrap",
      fontSize: 0,
      minHeight: "footer",
      minWidth: "sidebar",
    }}
  >
    {children}
  </section>
);

export default FooterContent;
