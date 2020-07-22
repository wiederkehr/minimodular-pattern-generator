/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Cutline, Sewline, Fold, Volume } from "../components/PatternElements";
import { PatternProps } from "../components/PatternProps";

interface Props extends PatternProps {
  scale: number;
}

const RolltopHorizontal = (props: Props) => (
  <React.Fragment>
    <Cutline
      height={props.cutHeight}
      width={props.cutWidth}
      scale={props.scale}
    />
    <Sewline
      height={props.sewHeight * 2}
      scale={props.scale}
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
      scale={props.scale}
      volume={props.volume}
      x={props.cutWidth / 2}
      y={props.cutHeight / 2}
    />
  </React.Fragment>
);

export default RolltopHorizontal;
