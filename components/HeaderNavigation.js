/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";

const HeaderNavigation = () => (
  <ul
    sx={{
      flexDirection: "row",
      flexWrap: "nowrap",
      alignItems: "center",
      padding: 0,
      paddingLeft: 4,
      margin: 0,
      position: "relative",
      listStyle: "none",
      display: "flex",
      justifyContent: "flex-end",
      flex: "0 0 75%",
      maxWidth: "75%",
    }}
  >
    <HeaderLink href="/" title="Pattern Generator">
      Pattern Generator
    </HeaderLink>
  </ul>
);

export default HeaderNavigation;

const HeaderLink = (props) => (
  <li>
    <Link href={props.href} passHref>
      <a
        sx={{
          fontWeight: 600,
          fontSize: 0,
          textTransform: "uppercase",
          textDecoration: "none",
          margin: "0 .8rem",
          color: "primary",
          "&:hover": {
            color: "primary",
          },
        }}
        title={props.title}
      >
        {props.children}
      </a>
    </Link>
  </li>
);
