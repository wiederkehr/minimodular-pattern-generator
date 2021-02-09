/** @jsxImportSource theme-ui */
import React from "react";

const Layout: React.FC = ({ children }) => (
  <div
    sx={{
      backgroundColor: "background",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    }}
  >
    {children}
  </div>
);

export default Layout;
