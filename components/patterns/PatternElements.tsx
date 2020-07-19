/** @jsx jsx */
import { jsx } from "theme-ui";

export const cutlineWidth = 2;

export const Cutline = ({ height, width }) => (
  <g>
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
    <text
      dy=".35em"
      x={width / 2}
      y={5}
      sx={{ textAnchor: "middle", fontSize: "8px", fontWeight: "600" }}
    >
      {width}
    </text>
    <text
      dy=".35em"
      transform="rotate(-90)"
      x={-height / 2}
      y={5}
      sx={{
        textAnchor: "middle",
        fontSize: "8px",
        fontWeight: "600",
      }}
    >
      {height}
    </text>
  </g>
);

export const Sewline = ({ height, width, x, y }) => (
  <g>
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
    <text
      dy=".35em"
      x={x + width / 2}
      y={y + 5}
      sx={{ textAnchor: "middle", fontSize: "6px", fontWeight: "400" }}
    >
      {width}
    </text>
    <text
      dy=".35em"
      transform="rotate(-90)"
      x={(y + height / 2) * -1}
      y={x + 5}
      sx={{
        textAnchor: "middle",
        fontSize: "6px",
        fontWeight: "400",
      }}
    >
      {height}
    </text>
  </g>
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

export const Volume = ({ x, y, volume }) => (
  <text
    dy=".35em"
    x={x}
    y={y}
    sx={{
      textAnchor: "middle",
      fontSize: "12px",
      fontWeight: "400",
    }}
  >
    {volume}
  </text>
);
