/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import Card from "./PatternCard";

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
    <Card>
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
          fold={props.fold}
          height={props.height}
          webbing={props.webbing}
          width={props.width}
        />
        <Fold fold={props.fold} height={props.height} width={props.width} />
      </svg>
    </Card>
  );
};

export default Illustration;

const Cutline = ({ height, width }) => (
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

const Sewline = ({ allowance, fold, height, webbing, width }) => (
  <rect
    fill="transparent"
    height={
      fold == "bottom"
        ? height - allowance
        : height - allowance * 2 - webbing * 2
    }
    shapeRendering="crispEdges"
    stroke="#000"
    strokeWidth="0.5"
    width={fold == "bottom" ? width - allowance * 2 : width - allowance * 2}
    x={allowance}
    y={allowance + webbing}
  />
);

const Fold = ({ fold, height, width }) => (
  <line
    shapeRendering="crispEdges"
    stroke="#000"
    strokeWidth="0.5"
    strokeDasharray="1"
    x1={fold == "bottom" ? "0" : width / 2}
    y1={fold == "bottom" ? height / 2 : 0}
    x2={fold == "bottom" ? width : width / 2}
    y2={fold == "bottom" ? height / 2 : height}
  />
);
