/** @jsx jsx */
import { jsx } from "theme-ui";

const FooterSidebar = ({ children }) => (
  <section
    sx={{
      backgroundColor: "surface",
      borderColor: "#000",
      borderRight: ["none", "1px solid"],
      borderBottom: ["1px solid", "none"],
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
