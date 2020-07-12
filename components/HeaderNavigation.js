/** @jsx jsx */
import { jsx } from "theme-ui";
import LinkActive from "next-link-active";

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
    <HeaderLink href="/" title="Home" mobileHidden>
      Home
    </HeaderLink>
    <HeaderLink href="/about" title="About">
      About
    </HeaderLink>
  </ul>
);

export default HeaderNavigation;

const HeaderLink = (props) => (
  <li sx={{ display: props.mobileHidden ? ["none", null, "block"] : "block" }}>
    <LinkActive href={props.href} passHref>
      {(active) => (
        <a
          sx={{
            fontWeight: 600,
            fontSize: 0,
            textTransform: "uppercase",
            textDecoration: "none",
            margin: "0 .8rem",
            color: active ? "primary" : "onSurface",
            "&:hover": {
              color: "primary",
            },
          }}
          title={props.title}
        >
          {props.children}
        </a>
      )}
    </LinkActive>
  </li>
);
