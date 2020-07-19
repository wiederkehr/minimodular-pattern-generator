/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Cutline, Sewline, Fold } from "./PatternElements";
import { Pattern } from "../../types/Pattern";

const RolltopHorizontal = (props: Pattern) => (
  <React.Fragment>
    <Cutline height={props.cutHeight} width={props.cutWidth} />
    <Sewline
      height={props.sewHeight * 2}
      width={props.sewWidth}
      x={props.allowance}
      y={props.allowance + props.webbing}
    />
    <Fold
      x1={props.allowance}
      y1={props.cutHeight / 2}
      x2={props.cutWidth - props.allowance}
      y2={props.cutHeight / 2}
    />
  </React.Fragment>
);

export default RolltopHorizontal;
