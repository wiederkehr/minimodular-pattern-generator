/** @jsx jsx */
import { jsx } from "theme-ui";

const FooterMain = ({ children }) => (
  <section
    sx={{
      alignItems: "center",
      display: "flex",
      flexGrow: 99999,
      flexBasis: 0,
      flexDirection: "row",
      flexWrap: "nowrap",
      fontSize: 0,
      minWidth: "sidebar",
      padding: 3,
    }}
  >
    {children}
  </section>
);

export default FooterMain;
