/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import FooterSidebar from "./FooterSidebar";
import FooterContent from "./FooterContent";
import Credits from "./Credits";
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
      <Credits />
      <ThemeToggle />
    </FooterSidebar>
    <FooterContent />
  </footer>
);

export default Footer;
