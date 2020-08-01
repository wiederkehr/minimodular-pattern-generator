/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { useColorMode } from "theme-ui";

const ThemeToggle: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <a
      sx={{ cursor: "pointer", "&:hover": { textDecoration: "underline" } }}
      onClick={(event: React.MouseEvent) => {
        event.preventDefault();
        setColorMode(colorMode === "default" ? "dark" : "default");
      }}
    >
      Toggle {colorMode === "default" ? "Dark" : "Light"}
    </a>
  );
};

export default ThemeToggle;
