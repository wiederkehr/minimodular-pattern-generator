/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { PatternProps } from "./PatternProps";
import { cutlineWidth } from "./PatternElements";

interface Props extends PatternProps {
  maxHeight: number;
  scale: number;
  pattern: object;
}

const PatternRenderer = (props: Props) => {
  console.log(JSON.stringify(props, null, 2));
  return (
    <svg
      id={`${props.pattern.id}-${props.sewWidth}x${props.sewHeight}`}
      version="1.1"
      viewBox={`-${cutlineWidth / 2} -${cutlineWidth / 2} ${
        props.cutWidth + cutlineWidth
      } ${props.cutHeight + cutlineWidth}`}
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        maxHeight: props.maxHeight,
      }}
    >
      {props.pattern.Pattern(props)}
    </svg>
  );
};

export default PatternRenderer;
