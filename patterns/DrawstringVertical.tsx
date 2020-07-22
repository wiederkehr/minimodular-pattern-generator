/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { Cutline, Sewline, Fold, Volume } from "../components/PatternElements";
import { PatternProps } from "../components/PatternProps";

interface Props extends PatternProps {
  scale: number;
}

const DrawstringVertical = (props: Props) => (
  <React.Fragment>
    <Cutline
      height={props.cutHeight}
      scale={props.scale}
      width={props.cutWidth}
    />
    <Sewline
      height={props.sewHeight}
      scale={props.scale}
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
    <Volume
      scale={props.scale}
      volume={props.volume}
      x={props.cutWidth / 2}
      y={props.cutHeight / 2}
    />
  </React.Fragment>
);

export default DrawstringVertical;
