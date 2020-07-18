/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  RolltopVertical,
  RolltopHorizontal,
  DrawstringVertical,
  DrawstringHorizontal,
} from "./patterns";
import * as PatternProps from "../types/Pattern";
import { cutlineWidth } from "./patterns/PatternElements";

const Pattern = (props: PatternProps.Pattern) => {
  const selectPattern = (props) => {
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
      version="1.1"
      viewBox={`-${cutlineWidth / 2} -${cutlineWidth / 2} ${
        props.width + cutlineWidth
      } ${props.height + cutlineWidth}`}
      xmlns="http://www.w3.org/2000/svg"
      sx={{
        // FIXME: calculate height based on outer container
        maxHeight: "calc(100vh - 32px)",
      }}
    >
      {selectPattern(props)}
    </svg>
  );
};

export default Pattern;
