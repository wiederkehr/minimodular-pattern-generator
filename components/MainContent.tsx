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
      padding: 3,
    }}
  >
    {children}
  </section>
);

export default MainContent;
