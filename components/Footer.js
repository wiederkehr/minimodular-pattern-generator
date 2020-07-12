/** @jsx jsx */
import { jsx } from "theme-ui";
import FooterSidebar from "./FooterSidebar";
import FooterMain from "./FooterMain";
import Credits from "./Credits";

const Footer = () => (
  <footer
    sx={{
      alignItems: "center",
      backgroundColor: "surface",
      borderTop: "1px solid #000",
      display: "flex",
      flexWrap: "wrap",
      zIndex: 300,
    }}
  >
    <FooterSidebar>
      <Credits />
    </FooterSidebar>
    <FooterMain />
  </footer>
);

export default Footer;
