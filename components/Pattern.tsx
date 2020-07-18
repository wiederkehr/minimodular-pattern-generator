/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import ContainerDimensions from "react-container-dimensions";
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
    <Box
      sx={{
        height: "100%",
        lineHeight: 0,
      }}
    >
      <ContainerDimensions>
        {({ height }) => (
          <svg
            version="1.1"
            viewBox={`-${cutlineWidth / 2} -${cutlineWidth / 2} ${
              props.width + cutlineWidth
            } ${props.height + cutlineWidth}`}
            xmlns="http://www.w3.org/2000/svg"
            sx={{
              maxHeight: height,
            }}
          >
            {selectPattern(props)}
          </svg>
        )}
      </ContainerDimensions>
    </Box>
  );
};

export default Pattern;
