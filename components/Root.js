/** @jsx jsx */
import { jsx } from "theme-ui";

const Root = ({ children }) => (
  <div
    sx={{
      backgroundColor: "surface",
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    }}
  >
    {children}
  </div>
);

export default Root;
