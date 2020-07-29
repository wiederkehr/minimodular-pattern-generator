/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import FooterSidebar from "./FooterSidebar";
import FooterContent from "./FooterContent";
import Credits from "./Credits";
import ToggleTheme from "./ToggleTheme";

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
      <ToggleTheme />
    </FooterSidebar>
    <FooterContent />
  </footer>
);

export default Footer;
