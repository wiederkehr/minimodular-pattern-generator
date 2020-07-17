/** @jsx jsx */
import { jsx } from "theme-ui";

export const cutlineWidth = 2;

export const Cutline = ({ height, width }) => (
  <rect
    height={height}
    width={width}
    x={0}
    y={0}
    sx={{
      fill: "transparent",
      shapeRendering: "crispEdges",
      vectorEffect: "non-scaling-stroke",
      stroke: "#000",
      strokeWidth: cutlineWidth,
    }}
  />
);

export const Sewline = ({ height, width, x, y }) => (
  <rect
    height={height}
    width={width}
    x={x}
    y={y}
    sx={{
      fill: "transparent",
      shapeRendering: "crispEdges",
      vectorEffect: "non-scaling-stroke",
      stroke: "#000",
      strokeWidth: "1",
    }}
  />
);

export const Fold = ({ x1, y1, x2, y2 }) => (
  <line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    sx={{
      fill: "transparent",
      shapeRendering: "crispEdges",
      vectorEffect: "non-scaling-stroke",
      stroke: "#000",
      strokeDasharray: "2",
      strokeWidth: "1",
    }}
  />
);
