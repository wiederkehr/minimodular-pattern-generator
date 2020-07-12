/** @jsx jsx */
import { jsx } from "theme-ui";

const AppSidebar = () => (
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
    <p>Panel</p>
  </section>
);

export default AppSidebar;
