/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import HeaderBrand from "./HeaderBrand";
import HeaderNavigation from "./HeaderNavigation";

const Header = ({ children }) => (
  <header
    sx={{
      boxShadow: "header",
      display: "flex",
      py: "3",
      variant: "layout.header",
      width: "100%",
      zIndex: 200,
      position: "relative",
    }}
  >
    <Container px="3">
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <HeaderBrand />
        <HeaderNavigation />
      </div>
    </Container>
  </header>
);

export default Header;
