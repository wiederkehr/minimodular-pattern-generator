import palette from "./palette";

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: "80rem",
    sidebar: 320,
  },
  fonts: {
    body: "'IBM Plex Mono', monospace",
    heading: "'IBM Plex Mono', monospace",
    monospace: "'IBM Plex Mono', monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: palette.mono[0],
    surface: palette.mono[12],
    onSurface: palette.mono[0],
    background: palette.mono[10],
    onBackground: palette.mono[0],
    primary: palette.mono[0],
    onPrimary: palette.mono[12],
    secondary: palette.mono[8],
    onSecondary: palette.mono[0],
    link: palette.mono[0],
    linkHover: palette.mono[2],
    linkActive: palette.mono[0],
  },
  shadows: {
    card: "0 0.1rem 0.3rem 0 rgba(0,0,0,.1)",
  },
  buttons: {
    primary: {
      fontFamily: "body",
      cursor: "pointer",
      color: "onPrimary",
      bg: "primary",
      "&:hover": {
        bg: palette.mono[4],
      },
      "&:focus": {
        bg: palette.mono[4],
        boxShadow: "rgba(0,0,0,0.1) 0px 0px 0px 3px",
        outline: "none",
      },
    },
    secondary: {
      fontFamily: "body",
      color: "background",
      bg: "secondary",
    },
  },
  forms: {
    label: {
      fontSize: 0,
      textTransform: "uppercase",
    },
    input: {
      fontFamily: "body",
      borderColor: palette.mono[0],
      "&:focus": {
        boxShadow: "rgba(0,0,0,0.1) 0px 0px 0px 3px",
        outline: "none",
      },
    },
    slider: {
      backgroundColor: palette.mono[0],
      height: "2px",
      "&:focus": {
        boxShadow: "rgba(0,0,0,0.1) 0px 0px 0px 3px",
        outline: "none",
      },
    },
    select: {
      fontFamily: "body",
      borderColor: palette.mono[0],
      "&:focus": {
        boxShadow: "rgba(0,0,0,0.1) 0px 0px 0px 3px",
        outline: "none",
      },
    },
    radio: {
      "&:focus": {
        boxShadow: "rgba(0,0,0,0.1) 0px 0px 0px 3px",
        outline: "none",
      },
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      bg: "background",
    },
    h1: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 5,
    },
    h2: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 4,
    },
    h3: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 3,
    },
    h4: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 2,
    },
    h5: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 1,
    },
    h6: {
      color: "text",
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      fontSize: 0,
    },
    p: {
      color: "text",
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      maxWidth: "48rem",
    },
    a: {
      color: "text",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
};
