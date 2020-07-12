/** @jsx jsx */
import { jsx } from "theme-ui";

const AppSidebar = ({ children }) => (
  <section
    sx={{
      backgroundColor: "surface",
      borderRight: ["none", "1px solid #000"],
      borderBottom: ["1px solid #000", "none"],
      flexGrow: 1,
      flexBasis: "sidebar",
      p: 3,
    }}
  >
    {children}
  </section>
);

export default AppSidebar;
