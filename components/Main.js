/** @jsx jsx */
import { jsx, Container } from "theme-ui";

const Main = ({ children }) => (
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
