/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import PropTypes from "prop-types";
import { Cutline, Sewline, Fold, Volume } from "../components/PatternElements";
import { PatternProps } from "../components/PatternProps";
import { calculateVolume } from "../helpers/calculateVolume";

interface Props extends PatternProps {
  scale: number;
  webbing: number;
}

export default {
  id: "roll-top-horizontal",
  name: "Roll-top Bag with horizontal fold",
  derivates: {
    cutHeight: ({ height, webbing }: { height: number; webbing: number }) =>
      height * 2 + webbing * 4,
    cutWidth: ({ allowance, width }: { allowance: number; width: number }) =>
      allowance * 2 + width,
    volume: ({ height, width }: { height: number; width: number }) =>
      calculateVolume({ height, width }),
  },
  props: {
    allowance: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    webbing: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  },
  presets: [
    {
      name: "24L Tent, Quilt, Food",
      allowance: 10,
      height: 480,
      webbing: 20,
      width: 400,
    },
  ],
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
        x={props.allowance}
        y={props.webbing * 2}
      />
      <Fold
        x1={props.allowance}
        x2={props.cutWidth - props.allowance}
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
