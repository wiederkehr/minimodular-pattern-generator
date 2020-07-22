/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

const MainContent: React.FC = ({ children }) => (
  <section
    sx={{
      backgroundColor: "background",
      flexGrow: 99999,
      flexBasis: 0,
      minWidth: "sidebar",
      paddingX: 3,
      paddingY: [3, 0],
    }}
  >
    {children}
  </section>
);

export default MainContent;
