/** @jsx jsx */
import { jsx } from "theme-ui";

export const cutlineWidth = 2;

export const Cutline = ({
  height,
  width,
  scale,
}: {
  height: number;
  width: number;
  scale: number;
}) => (
  <g id="cutline">
    <rect
      height={height}
      width={width}
      x={0}
      y={0}
      sx={{
        fill: "surface",
        shapeRendering: "crispEdges",
        vectorEffect: "non-scaling-stroke",
        stroke: "onSurface",
        strokeWidth: cutlineWidth,
      }}
    />
    <text
      id="cutline-width-label"
      dy=".35em"
      x={width / 2}
      y={6 * scale}
      sx={{
        color: "text",
        fontSize: `calc(10px * ${scale})`,
        fontWeight: "bold",
        textAnchor: "middle",
      }}
    >
      {width}
    </text>
    <text
      id="cutline-height-label"
      dy=".35em"
      transform="rotate(-90)"
      x={-height / 2}
      y={6 * scale}
      sx={{
        color: "text",
        fontSize: `calc(10px * ${scale})`,
        fontWeight: "bold",
        textAnchor: "middle",
      }}
    >
      {height}
    </text>
  </g>
);

export const Sewline = ({
  height,
  width,
  x,
  y,
  scale,
}: {
  height: number;
  width: number;
  x: number;
  y: number;
  scale: number;
}) => (
  <g id="sewline">
    <rect
      height={height}
      width={width}
      x={x}
      y={y}
      sx={{
        fill: "transparent",
        shapeRendering: "crispEdges",
        stroke: "onSurface",
        strokeWidth: "1",
        vectorEffect: "non-scaling-stroke",
      }}
    />
    <text
      id="sewline-width-label"
      dy=".35em"
      x={x + width / 2}
      y={y + 6 * scale}
      sx={{
        color: "text",
        fontSize: `calc(10px * ${scale})`,
        fontWeight: "body",
        textAnchor: "middle",
      }}
    >
      {width}
    </text>
    <text
      id="sewline-height-label"
      dy=".35em"
      transform="rotate(-90)"
      x={(y + height / 2) * -1}
      y={x + 6 * scale}
      sx={{
        color: "text",
        fontSize: `calc(10px * ${scale})`,
        fontWeight: "body",
        textAnchor: "middle",
      }}
    >
      {height}
    </text>
  </g>
);

export const Fold = ({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) => (
  <line
    id="fold"
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    sx={{
      fill: "transparent",
      shapeRendering: "crispEdges",
      stroke: "onSurface",
      strokeDasharray: "2",
      strokeWidth: "1",
      vectorEffect: "non-scaling-stroke",
    }}
  />
);

export const Volume = ({
  x,
  y,
  volume,
  scale,
}: {
  x: number;
  y: number;
  volume: number;
  scale: number;
}) => (
  <text
    id="volume-label"
    dy=".35em"
    x={x}
    y={y}
    sx={{
      color: "text",
      fontSize: `calc(10px * ${scale})`,
      fontWeight: "bold",
      textAnchor: "middle",
    }}
  >
    {`${volume}L`}
  </text>
);
