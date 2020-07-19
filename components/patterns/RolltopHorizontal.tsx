/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Cutline, Sewline, Fold, Volume } from "./PatternElements";
import { PatternProps } from "../../types/PatternProps";

const RolltopHorizontal = (props: PatternProps) => (
  <React.Fragment>
    <Cutline height={props.cutHeight} width={props.cutWidth} />
    <Sewline
      height={props.sewHeight * 2}
      width={props.sewWidth}
      x={props.allowance}
      y={props.webbing * 2}
    />
    <Fold
      x1={props.allowance}
      y1={props.cutHeight / 2}
      x2={props.cutWidth - props.allowance}
      y2={props.cutHeight / 2}
    />
    <Volume
      x={props.cutWidth / 2}
      y={props.cutHeight / 2}
      volume={props.volume}
    />
  </React.Fragment>
);

export default RolltopHorizontal;
