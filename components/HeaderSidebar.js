/** @jsx jsx */
import { jsx } from "theme-ui";

const HeaderSidebar = ({ children }) => (
  <section
    sx={{
      backgroundColor: "surface",
      borderRight: ["none", "1px solid #000"],
      borderBottom: ["1px solid #000", "none"],
      flexGrow: 1,
      flexBasis: "sidebar",
    }}
  >
    {children}
  </section>
);

export default HeaderSidebar;
