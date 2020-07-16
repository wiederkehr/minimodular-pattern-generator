/** @jsx jsx */
import { jsx } from "theme-ui";

export const Cutline = ({ height, width }) => (
  <rect
    fill="transparent"
    height={height}
    shapeRendering="crispEdges"
    stroke="#000"
    strokeWidth="2"
    width={width}
    x={0}
    y={0}
  />
);

export const Sewline = ({ height, width, x, y }) => (
  <rect
    fill="transparent"
    height={height}
    shapeRendering="crispEdges"
    stroke="#000"
    strokeWidth="0.5"
    width={width}
    x={x}
    y={y}
  />
);

export const Fold = ({ x1, y1, x2, y2 }) => (
  <line
    shapeRendering="crispEdges"
    stroke="#000"
    strokeWidth="0.5"
    strokeDasharray="1"
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
  />
);
