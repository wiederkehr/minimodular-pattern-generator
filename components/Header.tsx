/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import HeaderSidebar from "./HeaderSidebar";
import HeaderContent from "./HeaderContent";
import Branding from "./Branding";

const Header: React.FC = ({ children }) => (
  <header
    sx={{
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap",
      zIndex: 300,
    }}
  >
    <HeaderSidebar>
      <Branding />
    </HeaderSidebar>
    <HeaderContent>{children}</HeaderContent>
  </header>
);

export default Header;
