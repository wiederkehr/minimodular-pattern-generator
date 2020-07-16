/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Cutline, Sewline, Fold } from "./PatternElements";
import { Pattern } from "../../types/Pattern";

const RolltopVertical = (props: Pattern) => (
  <React.Fragment>
    <Cutline height={props.height} width={props.width} />
    <Sewline
      height={props.height - props.allowance * 2 - props.webbing * 2}
      width={props.width - props.allowance * 2}
      x={props.allowance}
      y={props.allowance + props.webbing}
    />
    <Fold x1={props.width / 2} y1={0} x2={props.width / 2} y2={props.height} />
  </React.Fragment>
);

export default RolltopVertical;
