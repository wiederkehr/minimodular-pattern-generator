/** @jsx jsx */
import { jsx } from "theme-ui";

const AppMain: React.FC = ({ children }) => (
  <section
    sx={{
      backgroundColor: "background",
      flexGrow: 99999,
      flexBasis: 0,
      height: ["50vh", "100vh"],
      minWidth: "sidebar",
      p: 3,
    }}
  >
    {children}
  </section>
);

export default AppMain;
