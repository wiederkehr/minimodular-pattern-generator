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
  id: "roll-top-vertical",
  name: "Roll-top Bag with vertical fold",
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
    webbing: {
      label: "Webbing Width",
      name: "webbing",
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
      webbing: 10,
      width: 400,
    },
  ],
  derivates: {
    cutHeight: ({
      allowance,
      height,
      webbing,
    }: {
      allowance: number;
      height: number;
      webbing: number;
    }) => allowance + height + webbing * 2,
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
        y={props.webbing * 2}
      />
      <Fold
        x1={props.cutWidth / 2}
        x2={props.cutWidth / 2}
        y1={props.webbing * 2}
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
