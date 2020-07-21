/** @jsx jsx */
import { jsx } from "theme-ui";

const HeaderMain: React.FC = ({ children }) => (
  <section
    sx={{
      alignItems: "center",
      flexBasis: 0,
      flexDirection: "row",
      flexGrow: 99999,
      flexWrap: "nowrap",
      fontSize: 0,
      display: ["none", "flex"],
      minHeight: "header",
      minWidth: "sidebar",
      textTransform: "uppercase",
    }}
  >
    {children}
  </section>
);

export default HeaderMain;
