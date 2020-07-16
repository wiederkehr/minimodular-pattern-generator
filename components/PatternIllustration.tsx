/** @jsx jsx */
import { jsx, Box } from "theme-ui";

interface IllustrationProps {
  allowance: number;
  closure: string;
  fold: string;
  height: number;
  webbing: number;
  width: number;
}

const Illustration = (props: IllustrationProps) => {
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
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        version="1.1"
        viewBox={`0 0 ${props.width} ${props.height}`}
      >
        <Cutline height={props.height} width={props.width} />
        <Sewline
          allowance={props.allowance}
          height={props.height}
          webbing={props.webbing}
          width={props.width}
        />
        {props.fold == "bottom" ? (
          <BottomFold height={props.height} width={props.width} />
        ) : (
          <SideFold height={props.height} width={props.width} />
        )}
      </svg>
    </Box>
  );
};

export default Illustration;

const Cutline = ({ height, width }) => (
  <rect
    fill="transparent"
    height={height}
    shape-rendering="crispEdges"
    stroke="#000"
    stroke-width="2"
    width={width}
    x={0}
    y={0}
  />
);

const Sewline = ({ allowance, height, webbing, width }) => (
  <rect
    fill="transparent"
    height={height - allowance * 2 - webbing}
    shape-rendering="crispEdges"
    stroke="#000"
    stroke-width="0.5"
    width={width - allowance * 2}
    x={allowance}
    y={allowance + webbing}
  />
);

const BottomFold = ({ fold, height, width }) => (
  <line
    shape-rendering="crispEdges"
    stroke="#000"
    stroke-width="0.5"
    stroke-dasharray="1"
    x1="0"
    y1={height / 2}
    x2={width}
    y2={height / 2}
  />
);
const SideFold = ({ fold, height, width }) => (
  <line
    shape-rendering="crispEdges"
    stroke="#000"
    stroke-width="0.5"
    stroke-dasharray="1"
    x1={width / 2}
    y1={0}
    x2={width / 2}
    y2={height}
  />
);
