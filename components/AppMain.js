/** @jsx jsx */
import { jsx } from "theme-ui";

const AppMain = ({ children }) => (
  <section
    sx={{
      backgroundColor: "background",
      flexGrow: 99999,
      flexBasis: 0,
      minWidth: "sidebar",
      p: 3,
    }}
  >
    {children}
  </section>
);

export default AppMain;
