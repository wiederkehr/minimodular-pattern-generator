/** @jsxImportSource theme-ui */

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
  name: "Draw-string with vertical fold",
  attibutes: {
    cuffAllowance: {
      label: "Cuff Allowance",
      name: "cuffAllowance",
      value: PropTypes.number.isRequired,
      min: 0,
      max: 0,
      step: 10,
    },
    seamAllowance: {
      label: "Seam Allowance",
      name: "seamAllowance",
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
      cuffAllowance: 10,
      seamAllowance: 10,
      height: 480,
      width: 400,
    },
  ],
  derivates: {
    cutHeight: ({
      cuffAllowance,
      seamAllowance,
      height,
    }: {
      cuffAllowance: number;
      seamAllowance: number;
      height: number;
    }) => seamAllowance + height + cuffAllowance * 2,
    cutWidth: ({ seamAllowance, width }: { seamAllowance: number; width: number }) =>
      seamAllowance * 2 + width * 2,
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
        x={props.seamAllowance}
        y={props.cuffAllowance * 2}
      />
      <Fold
        x1={props.cutWidth / 2}
        x2={props.cutWidth / 2}
        y1={props.cuffAllowance * 2}
        y2={props.cutHeight - props.seamAllowance}
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
