/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Cutline, Sewline, Fold } from "./PatternElements";
import { Pattern } from "../../types/Pattern";

const DrawstringVertical = (props: Pattern) => (
  <React.Fragment>
    <Cutline height={props.cutHeight} width={props.cutWidth} />
    <Sewline
      height={props.sewHeight}
      width={props.sewWidth * 2}
      x={props.allowance}
      y={props.allowance}
    />
    <Fold
      x1={props.cutWidth / 2}
      y1={props.allowance}
      x2={props.cutWidth / 2}
      y2={props.cutHeight - props.allowance}
    />
  </React.Fragment>
);

export default DrawstringVertical;
