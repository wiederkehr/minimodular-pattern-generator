/** @jsx jsx */
import { jsx } from "theme-ui";

const FooterSidebar: React.FC = ({ children }) => (
  <section
    sx={{
      backgroundColor: "surface",
      borderColor: "#000",
      borderRight: ["none", "1px solid"],
      borderBottom: ["1px solid", "none"],
      flexBasis: "sidebar",
      flexGrow: 1,
      fontSize: 0,
      p: 3,
    }}
  >
    {children}
  </section>
);

export default FooterSidebar;
