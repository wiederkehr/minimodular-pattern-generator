/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import FooterSidebar from "./FooterSidebar";
import FooterContent from "./FooterContent";
import Credits from "./Credits";

const Footer: React.FC = () => (
  <footer
    sx={{
      alignItems: "center",
      display: "flex",
      flexWrap: "wrap",
      zIndex: 300,
    }}
  >
    <FooterSidebar>
      <Credits />
    </FooterSidebar>
    <FooterContent />
  </footer>
);

export default Footer;
