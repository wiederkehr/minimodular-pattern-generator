/** @jsx jsx */
import { jsx } from "theme-ui";

const AppMain: React.FC = ({ children }) => (
  <section
    sx={{
      backgroundColor: "background",
      flexGrow: 99999,
      flexBasis: 0,
      minWidth: "sidebar",
      paddingX: 3,
      paddingY: [3, 0],
    }}
  >
    {children}
  </section>
);

export default AppMain;
