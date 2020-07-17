/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Cutline, Sewline, Fold } from "./PatternElements";
import { Pattern } from "../../types/Pattern";

const DrawstringHorizontal = (props: Pattern) => (
  <React.Fragment>
    <Cutline height={props.height} width={props.width} />
    <Sewline
      height={props.height - props.allowance * 2 - props.webbing * 2}
      width={props.width - props.allowance * 2}
      x={props.allowance}
      y={props.allowance + props.webbing}
    />
    <Fold
      x1={"0"}
      y1={props.height / 2}
      x2={props.width}
      y2={props.height / 2}
    />
  </React.Fragment>
);

export default DrawstringHorizontal;
