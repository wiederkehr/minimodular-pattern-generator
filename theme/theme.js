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
    body: "'IBM Plex Mono', monospace",
    heading: "'IBM Plex Mono', monospace",
    monospace: "'IBM Plex Mono', monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600,
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
    modes: {
      dark: {
        text: palette.mono[12],
        surface: palette.mono[0],
        onSurface: palette.mono[12],
        background: palette.mono[2],
        onBackground: palette.mono[12],
        border: palette.mono[2],
        primary: palette.mono[12],
        onPrimary: palette.mono[0],
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
      //FIXME
      // textTransform: "uppercase",
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
      //FIXME
      // textTransform: "uppercase",
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
      //FIXME
      // textTransform: "uppercase",
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
      //FIXME
      // overflowX: "auto",
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
      //FIXME
      // borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      //FIXME
      // textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      //FIXME
      // textAlign: "left",
      borderBottomStyle: "solid",
    },
    img: {
      maxWidth: "100%",
    },
  },
};
