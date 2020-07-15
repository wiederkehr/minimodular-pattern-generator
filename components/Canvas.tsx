/** @jsx jsx */
import React from "react";
import { jsx, Box } from "theme-ui";
import { calculateHeight } from "../helpers/calculateHeight";
import { calculateWidth } from "../helpers/calculateWidth";

export default class Canvas extends React.Component {
  render() {
    const dimensions = {
      height: calculateHeight({
        allowance: this.props.allowance,
        closure: this.props.closure,
        height: this.props.height,
        webbing: this.props.webbing,
      }),
      width: calculateWidth({
        allowance: this.props.allowance,
        fold: this.props.fold,
        width: this.props.width,
      }),
    };
    console.log(dimensions);

    return (
      <React.Fragment>
        <Output dimensions={dimensions} />
        <Illustration dimensions={dimensions} />
      </React.Fragment>
    );
  }
}

const Illustration = (dimensions) => {
  console.log(dimensions);

  return (
    <Box
      sx={{
        backgroundColor: "surface",
        borderRadius: 5,
        boxShadow: "card",
        display: "inline-block",
        overflow: "hidden",
        paddingBottom: "100%",
        position: "relative",
        verticalAlign: "middle",
        width: "100%",
      }}
    >
      <svg
        sx={{
          display: "inline-block",
          position: "absolute",
          top: 3,
          left: 3,
        }}
        version="1.1"
        viewBox="0 0 500 500"
      >
        <rect fill="#000" height="200" width="200" />
      </svg>
    </Box>
  );
};

const Output = (dimensions) => (
  <Box
    sx={{
      mb: 3,
      p: 3,
      border: "1px solid",
    }}
  >
    <pre
      sx={{
        m: 0,
      }}
    >
      <span>Final Dimensions: </span>
      {JSON.stringify(dimensions, null, 2)}
    </pre>
  </Box>
);
