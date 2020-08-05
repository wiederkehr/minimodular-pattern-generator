/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import PropTypes from "prop-types";
import { Cutline, Sewline, Fold, Volume } from "../components/PatternElements";
import { PatternProps } from "../components/PatternProps";
import { calculateVolume } from "../helpers/calculateVolume";

interface Props extends PatternProps {
  scale: number;
}

export default {
  id: "draw-string-vertical",
  name: "Draw-string Bag with vertical fold",
  attibutes: {
    allowance: {
      label: "Seam Allowance",
      name: "allowance",
      value: PropTypes.number.isRequired,
      min: 0,
      max: 0,
      step: 10,
    },
    height: {
      label: "Bag Height",
      name: "sewHeight",
      value: PropTypes.number.isRequired,
      min: 0,
      max: 0,
      step: 10,
    },
    width: {
      label: "Bag Width",
      name: "sewWidth",
      value: PropTypes.number.isRequired,
      min: 0,
      max: 0,
      step: 10,
    },
  },
  presets: [
    {
      name: "24L",
      allowance: 10,
      height: 480,
      width: 400,
    },
  ],
  derivates: {
    cutHeight: ({ allowance, height }: { allowance: number; height: number }) =>
      allowance * 2 + height,
    cutWidth: ({ allowance, width }: { allowance: number; width: number }) =>
      allowance * 2 + width * 2,
    volume: ({ height, width }: { height: number; width: number }) =>
      calculateVolume({ height, width }),
  },
  Pattern: (props: Props) => (
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
        x2={props.cutWidth / 2}
        y1={props.allowance}
        y2={props.cutHeight - props.allowance}
      />
      <Volume
        scale={props.scale}
        volume={props.volume}
        x={props.cutWidth / 2}
        y={props.cutHeight / 2}
      />
    </React.Fragment>
  ),
};
