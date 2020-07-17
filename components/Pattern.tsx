/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  RolltopVertical,
  RolltopHorizontal,
  DrawstringVertical,
  DrawstringHorizontal,
} from "./patterns";
import * as PatternProps from "../types/Pattern";

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
      {selectPattern(props)}
    </svg>
  );
};

export default Pattern;
