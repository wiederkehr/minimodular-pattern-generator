/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
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
    <HeaderMain>
      <Link href="/" passHref>
        <a
          sx={{
            color: "link",
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          title="Pattern Generator 1.0"
        >
          Pattern Generator 1.0
        </a>
      </Link>
    </HeaderMain>
  </header>
);

export default Header;
