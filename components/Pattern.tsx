/** @jsx jsx */
import { jsx } from "theme-ui";
import ContainerDimensions from "react-container-dimensions";
import {
  RolltopVertical,
  RolltopHorizontal,
  DrawstringVertical,
  DrawstringHorizontal,
} from "./patterns";
import { PatternProps } from "../types/PatternProps";
import { cutlineWidth } from "./patterns/PatternElements";

const Pattern = (props: PatternProps) => {
  const renderPattern = (scale) => {
    if (props.closure == "roll-top") {
      if (props.fold == "vertical") {
        return <RolltopVertical {...props} scale={scale} />;
      } else {
        return <RolltopHorizontal {...props} scale={scale} />;
      }
    } else {
      if (props.fold == "vertical") {
        return <DrawstringVertical {...props} scale={scale} />;
      } else {
        return <DrawstringHorizontal {...props} scale={scale} />;
      }
    }
  };
  const calculateScale = (width, cutWidth, height, cutHeight) => {
    const widthScale = cutWidth / width;
    const heightScale = cutHeight / height;
    const scale = widthScale > heightScale ? widthScale : heightScale;
    return scale;
  };
  return (
    <ContainerDimensions>
      {({ height, width }) => (
        <svg
          id={`${props.closure}-${props.fold}-${props.sewWidth}x${props.sewHeight}`}
          version="1.1"
          viewBox={`-${cutlineWidth / 2} -${cutlineWidth / 2} ${
            props.cutWidth + cutlineWidth
          } ${props.cutHeight + cutlineWidth}`}
          xmlns="http://www.w3.org/2000/svg"
          sx={{
            maxHeight: height,
          }}
        >
          {renderPattern(
            calculateScale(width, props.cutWidth, height, props.cutHeight)
          )}
        </svg>
      )}
    </ContainerDimensions>
  );
};

export default Pattern;
