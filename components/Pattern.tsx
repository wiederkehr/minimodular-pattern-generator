/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  RolltopVertical,
  RolltopHorizontal,
  DrawstringVertical,
  DrawstringHorizontal,
} from "./patterns";
import { PatternProps } from "../types/PatternProps";
import { cutlineWidth } from "./patterns/PatternElements";

interface Props extends PatternProps {
  maxHeight: number;
  scale: number;
}

const Pattern = (props: Props) => {
  const renderPattern = () => {
    if (props.closure == "roll-top") {
      if (props.fold == "vertical") {
        return <RolltopVertical {...props} />;
      } else {
        return <RolltopHorizontal {...props} />;
      }
    } else {
      if (props.fold == "vertical") {
        return <DrawstringVertical {...props} />;
      } else {
        return <DrawstringHorizontal {...props} />;
      }
    }
  };
  return (
    <svg
      id={`${props.closure}-${props.fold}-${props.sewWidth}x${props.sewHeight}`}
      version="1.1"
      viewBox={`-${cutlineWidth / 2} -${cutlineWidth / 2} ${
        props.cutWidth + cutlineWidth
      } ${props.cutHeight + cutlineWidth}`}
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        maxHeight: props.maxHeight,
      }}
    >
      {renderPattern()}
    </svg>
  );
};

export default Pattern;
