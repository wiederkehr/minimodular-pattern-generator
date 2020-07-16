/** @jsx jsx */
import { jsx } from "theme-ui";

const FooterSidebar: React.FC = ({ children }) => (
  <section
    sx={{
      backgroundColor: "surface",
      borderColor: "#000",
      borderRight: ["none", "1px solid"],
      borderTop: ["1px solid"],
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
