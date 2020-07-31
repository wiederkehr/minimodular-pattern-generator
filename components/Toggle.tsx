/** @jsx jsx */
import { jsx, Button } from "theme-ui";
import React, { ReactNode } from "react";

interface ToggleProps {
  children: ReactNode;
  onChange: Function;
  value: string;
}

const Toggle = (props: ToggleProps) => {
  const handleClick = (value: string) => {
    props.onChange(value);
  };
  const childrenWithProps = React.Children.map(
    props.children,
    (child: React.ReactNode, index: number) => {
      return React.cloneElement(child, {
        onClick: (value: string) => {
          handleClick(value);
        },
        key: index,
        active: props.value === child.props.value,
      });
    }
  );
  return <ul sx={{ listStyle: "none", m: 0, p: 0 }}>{childrenWithProps}</ul>;
};

interface ToggleOptionProps {
  active?: boolean;
  children: ReactNode;
  onClick?: Function;
  value: string;
}

const ToggleOption = (props: ToggleOptionProps) => (
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
  active?: boolean;
  children: ReactNode;
  onClick?: Function;
  value: string;
}

const ToggleButton = (props: ToggleButtonProps) => (
  <Button
    variant="toggle"
    sx={{
      bg: props.active ? "toggle" : "transparent",
      color: props.active ? "onActiveToggle" : "onToggle",
    }}
    onClick={() => {
      props.onClick ? props.onClick(props.value) : null;
    }}
  >
    {props.children}
  </Button>
);

export { Toggle, ToggleOption };
