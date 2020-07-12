/** @jsx jsx */
import { jsx, Container } from "theme-ui";

const Main = ({ children }) => (
  <main
    sx={{
      width: "100%",
      flex: "1 1 auto",
      variant: "layout.main",
      position: "relative",
      zIndex: 100,
    }}
  >
    {children}
  </main>
);

export default Main;
