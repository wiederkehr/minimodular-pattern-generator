/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const HeaderContent: React.FC = ({ children }) => (
  <section
    sx={{
      alignItems: "center",
      justifyContent: "center",
      flexBasis: 0,
      flexDirection: "row",
      flexGrow: 99999,
      flexWrap: "nowrap",
      fontSize: 0,
      display: "flex",
      minHeight: [0, "header"],
      minWidth: "sidebar",
    }}
  >
    {children}
  </section>
);

export default HeaderContent;
