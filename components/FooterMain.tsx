/** @jsx jsx */
import { jsx } from "theme-ui";

const FooterMain: React.FC = ({ children }) => {
  return (
    <section
      sx={{
        alignItems: "center",
        display: "flex",
        flexBasis: 0,
        flexGrow: 99999,
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
};

export default FooterMain;
