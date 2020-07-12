/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const HeaderBrand = () => (
  <ul
    sx={{
      flexDirection: "row",
      flexWrap: "nowrap",
      alignItems: "center",
      padding: 0,
      margin: 0,
      position: "relative",
      listStyle: "none",
      display: "flex",
      justifyContent: "flex-start",
      flex: "0 0 25%",
      maxWidth: "25%",
    }}
  >
    <li>
      <Link href="/" passHref>
        <a
          sx={{
            lineHeight: 1,
            textDecoration: "none",
            display: "block",
          }}
          aria-label="Home"
        >
          <img
            src="/minimodules_logo_positive.svg"
            width="25"
            alt="Minimodules Logo"
          />
        </a>
      </Link>
    </li>
    <li
      sx={{
        width: "13.5rem",
        fontWeight: 600,
        letterSpacing: ".46px",
        lineHeight: 1,
      }}
    >
      <Link href="/" passHref>
        <a
          sx={{
            color: "onSurface",
            lineHeight: 1,
            textDecoration: "none",
            display: "block",
            fontWeight: 600,
            textTransform: "none",
            letterSpacing: ".46px",
            lineHeight: 1,
            marginLeft: "1rem",
            fontSize: 0,
          }}
          href="/"
        >
          Minimodules
        </a>
      </Link>
    </li>
  </ul>
);

export default HeaderBrand;
