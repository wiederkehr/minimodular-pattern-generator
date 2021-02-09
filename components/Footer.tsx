/** @jsxImportSource theme-ui */

import React from "react";
import FooterSidebar from "./FooterSidebar";
import FooterContent from "./FooterContent";
import Version from "./Version";
import ThemeToggle from "./ThemeToggle";

const Footer: React.FC = () => (
  <footer
    sx={{
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap",
      zIndex: 200,
    }}
  >
    <FooterSidebar>
      <Version />
      <ThemeToggle />
    </FooterSidebar>
    <FooterContent />
  </footer>
);

export default Footer;
