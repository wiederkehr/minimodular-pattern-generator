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
  id: "roll-top-horizontal",
  name: "Roll-top with horizontal fold",
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
    cutHeight: ({ height, cuffAllowance }: { height: number; cuffAllowance: number }) =>
      height * 2 + cuffAllowance * 4,
    cutWidth: ({ seamAllowance, width }: { seamAllowance: number; width: number }) =>
      seamAllowance * 2 + width,
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
        height={props.sewHeight * 2}
        scale={props.scale}
        width={props.sewWidth}
        x={props.seamAllowance}
        y={props.cuffAllowance * 2}
      />
      <Fold
        x1={props.seamAllowance}
        x2={props.cutWidth - props.seamAllowance}
        y1={props.cutHeight / 2}
        y2={props.cutHeight / 2}
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
