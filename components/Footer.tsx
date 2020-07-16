/** @jsx jsx */
import { jsx } from "theme-ui";
import FooterSidebar from "./FooterSidebar";
import FooterMain from "./FooterMain";
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
    <FooterMain />
  </footer>
);

export default Footer;
