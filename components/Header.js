/** @jsx jsx */
import { jsx } from "theme-ui";
import HeaderSidebar from "./HeaderSidebar";
import HeaderMain from "./HeaderMain";
import Branding from "./Branding";

const Header = () => (
  <header
    sx={{
      alignItems: "center",
      backgroundColor: "surface",
      borderBottom: "1px solid #000",
      display: "flex",
      flexWrap: "wrap",
      zIndex: 200,
    }}
  >
    <HeaderSidebar>
      <Branding />
    </HeaderSidebar>
    <HeaderMain />
  </header>
);

export default Header;
