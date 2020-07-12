/** @jsx jsx */
import { jsx } from "theme-ui";

const FooterSidebar = ({ children }) => (
  <section
    sx={{
      backgroundColor: "surface",
      borderRight: ["none", "1px solid #000"],
      borderBottom: ["1px solid #000", "none"],
      flexGrow: 1,
      flexBasis: "sidebar",
      fontSize: 0,
      p: 3,
    }}
  >
    {children}
  </section>
);

export default FooterSidebar;
