/** @jsx jsx */
import { jsx } from "theme-ui";

const Credits = () => (
  <p sx={{ padding: 0, margin: 0 }}>
    Built by{" "}
    <a
      sx={{
        color: "link",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
      href="https://benjaminwiederkehr.com"
    >
      Benjamin Wiederkehr
    </a>
  </p>
);

export default Credits;
