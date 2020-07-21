/** @jsx jsx */
import { jsx } from "theme-ui";

const FooterSidebar: React.FC = ({ children }) => (
  <section
    sx={{
      alignItems: "center",
      backgroundColor: "surface",
      borderColor: "#000",
      borderRight: ["none", "1px solid"],
      borderTop: ["1px solid"],
      display: "flex",
      flexBasis: "sidebar",
      flexGrow: 1,
      fontSize: 0,
      minHeight: "footer",
      p: 3,
    }}
  >
    {children}
  </section>
);

export default FooterSidebar;
