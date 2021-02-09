/** @jsxImportSource theme-ui */
import { Box } from "theme-ui";
import ContainerDimensions from "react-container-dimensions";
import { PatternProps } from "./PatternProps";
import { cutlineWidth } from "./PatternElements";

interface Props extends PatternProps {
  module: any;
}

const Pattern = (props: Props) => {
  const calculateScale = (height: number, width: number) =>
    props.cutWidth / width > props.cutHeight / height
      ? props.cutWidth / width
      : props.cutHeight / height;
  return (
    <Box
      sx={{
        height: "100%",
        lineHeight: 0,
      }}
    >
      <ContainerDimensions>
        {({ height, width }) => (
          <svg
            id={`${props.module.id}-${props.sewWidth}x${props.sewHeight}`}
            version="1.1"
            viewBox={`-${cutlineWidth / 2} -${cutlineWidth / 2} ${
              props.cutWidth + cutlineWidth
            } ${props.cutHeight + cutlineWidth}`}
            xmlns="http://www.w3.org/2000/svg"
            sx={{
              maxHeight: height,
            }}
          >
            {props.module.Pattern({
              cutHeight: props.cutHeight,
              cutWidth: props.cutWidth,
              cuffAllowance: props.cuffAllowance,
              seamAllowance: props.seamAllowance,
              sewHeight: props.sewHeight,
              sewWidth: props.sewWidth,
              volume: props.volume,
              scale: calculateScale(height, width),
            })}
          </svg>
        )}
      </ContainerDimensions>
    </Box>
  );
};

export default Pattern;
