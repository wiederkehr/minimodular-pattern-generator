/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const HeaderMain = () => (
  <section
    sx={{
      alignItems: "center",
      display: "flex",
      flexBasis: 0,
      flexDirection: "row",
      flexGrow: 99999,
      flexWrap: "nowrap",
      fontSize: 0,
      minWidth: "sidebar",
      padding: 3,
      textTransform: "uppercase",
    }}
  >
    <Link href="/" passHref>
      <a
        sx={{
          color: "link",
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        }}
        title="Pattern Generator 1.0"
      >
        Pattern Generator 1.0
      </a>
    </Link>
  </section>
);

export default HeaderMain;
