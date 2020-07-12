/** @jsx jsx */
import { jsx, Container } from "theme-ui";

const FooterNavigation = () => (
  <nav
    sx={{
      backgroundColor: "footerNavigationBackground",
      color: "onFooterNavigationBackground",
      py: "3",
    }}
  >
    <Container px="3">
      <p>
        Footer Navigation, to be used for any additional links related to this
        platform.
      </p>
    </Container>
  </nav>
);

export default FooterNavigation;
