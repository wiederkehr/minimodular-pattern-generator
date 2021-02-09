/** @jsxImportSource theme-ui */

import React from "react";
import { useColorMode } from "theme-ui";

const ThemeToggle: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <a
      sx={{
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
        "& svg g": {
          stroke: "muted",
        },
        "&:hover svg g": {
          stroke: "text",
        },
      }}
      onClick={(event: React.MouseEvent) => {
        event.preventDefault();
        setColorMode(colorMode === "default" ? "dark" : "default");
      }}
    >
      {colorMode === "default" ? <Moon /> : <Sun />}
    </a>
  );
};

export default ThemeToggle;

const Sun: React.FC = () => (
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Sun Icon</title>
    <g
      sx={{
        fill: "none",
        strokeLinecap: "round",
        strokeWidth: "2",
      }}
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2" />
      <path d="M12 21v2" />
      <path d="M4.22 4.22l1.42 1.42" />
      <path d="M18.36 18.36l1.42 1.42" />
      <path d="M1 12h2" />
      <path d="M21 12h2" />
      <path d="M4.22 19.78l1.42-1.42" />
      <path d="M18.36 5.64l1.42-1.42" />
    </g>
  </svg>
);

const Moon: React.FC = () => (
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Moon Icon</title>
    <g
      sx={{
        fill: "none",
        strokeLinecap: "round",
        strokeWidth: "2",
      }}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </g>
  </svg>
);
