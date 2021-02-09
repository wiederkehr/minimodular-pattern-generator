import palette from "./palette";

export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: "80rem",
    sidebar: 320,
    header: 60,
    footer: 60,
  },
  fonts: {
    body: "'Source Code Pro', monospace",
    heading: "'Source Serif Pro', serif",
    monospace: "'Source Code Pro', monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    bold: 700,
    heading: 700,
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
    border: palette.mono[8],
    primary: palette.mono[0],
    onPrimary: palette.mono[12],
    toggle: palette.mono[8],
    onToggle: palette.mono[6],
    onActiveToggle: palette.mono[0],
    disabled: palette.mono[8],
    muted: palette.mono[6],
    modes: {
      dark: {
        text: palette.mono[8],
        surface: palette.mono[2],
        onSurface: palette.mono[8],
        background: palette.mono[1],
        onBackground: palette.mono[8],
        border: palette.mono[3],
        primary: palette.mono[6],
        onPrimary: palette.mono[2],
        toggle: palette.mono[3],
        onToggle: palette.mono[10],
        onActiveToggle: palette.mono[10],
        disabled: palette.mono[4],
      },
    },
  },
  buttons: {
    primary: {
      bg: "transparent",
      border: "2px solid",
      borderColor: "primary",
      color: "primary",
      cursor: "pointer",
      fontFamily: "body",
      fontSize: 1,
      "&:hover": {
        bg: "primary",
        color: "onPrimary",
      },
      "&:focus": {
        boxShadow: "rgba(0,0,0,0.1) 0px 0px 0px 3px",
        outline: "none",
      },
    },
    toggle: {
      bg: "transparent",
      borderRadius: 0,
      color: "onToggle",
      cursor: "pointer",
      fontFamily: "body",
      fontSize: 0,
      paddingX: 3,
      paddingY: 1,
      "&:hover": {
        color: "onActiveToggle",
      },
      "&:focus": {
        outline: "none",
      },
    },
  },
  forms: {
    label: {
      fontSize: 0,
    },
    input: {
      fontFamily: "body",
      borderColor: "primary",
      "&:focus": {
        boxShadow: "rgba(0,0,0,0.1) 0px 0px 0px 3px",
        outline: "none",
      },
    },
    slider: {
      backgroundColor: "primary",
      height: "2px",
      "&:focus": {
        boxShadow: "rgba(0,0,0,0.1) 0px 0px 0px 3px",
        outline: "none",
      },
    },
    select: {
      borderColor: "primary",
      fontFamily: "body",
      fontSize: 1,
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
      borderSpacing: 0,
    },
    th: {
      borderBottomStyle: "solid",
    },
    td: {
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
};
