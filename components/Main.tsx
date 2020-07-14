/** @jsx jsx */
import { jsx } from "theme-ui";

const Main: React.FC = ({ children }) => (
  <main
    sx={{
      width: "100%",
      display: "flex",
      flex: "1 1 auto",
      flexWrap: "wrap",
      position: "relative",
      zIndex: 100,
    }}
  >
    {children}
  </main>
);

export default Main;
