/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Cutline, Sewline, Fold, Volume } from "./PatternElements";
import { PatternProps } from "../../types/PatternProps";

const RolltopVertical = (props: PatternProps) => (
  <React.Fragment>
    <Cutline
      height={props.cutHeight}
      width={props.cutWidth}
      scale={props.scale}
    />
    <Sewline
      height={props.sewHeight}
      scale={props.scale}
      width={props.sewWidth * 2}
      x={props.allowance}
      y={props.webbing * 2}
    />
    <Fold
      x1={props.cutWidth / 2}
      y1={props.webbing * 2}
      x2={props.cutWidth / 2}
      y2={props.cutHeight - props.allowance}
    />
    <Volume
      scale={props.scale}
      volume={props.volume}
      x={props.cutWidth / 2}
      y={props.cutHeight / 2}
    />
  </React.Fragment>
);

export default RolltopVertical;
