/** @jsxImportSource theme-ui */
import React from "react";
import { Button } from "theme-ui";

interface DisplayOptionProps {
  active: boolean;
  children: React.ReactNode;
  onClick: Function;
  value: string;
}

const DisplayOption = (props: DisplayOptionProps) => (
    <Button
    variant="toggle"
    sx={{
      bg: props.active ? "toggle" : "transparent",
      border: "1px solid",
      borderColor: "toggle",
      color: props.active ? "onActiveToggle" : "onToggle",
      display: "inline-block",
      textTransform: "uppercase",
      "&:first-of-type": {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
      },
      "&:last-of-type": {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
      },
    }}
    onClick={() => { props.onClick(props.value) }}
  >
    {props.children}
  </Button>
);

export default DisplayOption;