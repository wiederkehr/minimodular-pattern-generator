/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const Branding: React.FC = () => (
  <Link href="/" passHref>
    <a
      sx={{
        alignItems: "center",
        display: "flex",
        flexWrap: "nowrap",
        lineHeight: 1,
        padding: 3,
        textDecoration: "none",
        "&:hover": {
          backgroundColor: "colors.mono[10]",
        },
      }}
      aria-label="Home"
    >
      <img
        src="/minimodules_logo_positive.svg"
        width="25"
        alt="Minimodules Logo"
      />
      <span
        sx={{
          color: "onSurface",
          fontWeight: 600,
          fontSize: 0,
          marginLeft: "1rem",
        }}
      >
        Pattern Generator
      </span>
    </a>
  </Link>
);

export default Branding;
