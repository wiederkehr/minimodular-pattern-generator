/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import React, { ReactNode } from "react";

const Toggle: React.FC = ({ children }) => (
  <ul sx={{ listStyle: "none", m: 0, p: 0 }}>{children}</ul>
);

interface OptionProps {
  onClick: Function;
  children: ReactNode;
  value: string;
  active: boolean;
}

const ToggleOption = (props: OptionProps) => (
  <li
    sx={{
      border: "1px solid",
      borderColor: "toggle",
      display: "inline-block",
      "&:first-of-type": {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
      },
      "&:last-of-type": {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
      },
    }}
  >
    <ToggleButton
      onClick={props.onClick}
      value={props.value}
      active={props.active}
    >
      {props.children}
    </ToggleButton>
  </li>
);

interface ToggleButtonProps {
  onClick: Function;
  value: string;
  active: boolean;
  children: ReactNode;
}
const ToggleButton = (props: ToggleButtonProps) => (
  <Button
    variant="toggle"
    sx={{
      bg: props.active ? "toggle" : "transparent",
      color: props.active ? "onActiveToggle" : "onToggle",
    }}
    onClick={() => {
      props.onClick(props.value);
    }}
  >
    {props.children}
  </Button>
);

export { Toggle, ToggleOption };
