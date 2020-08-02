/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import Measurement from "./Measurement";

interface Props {
  children?: React.ReactNode;
}

const Instruction = (props: Props) => (
  <Box>
    <p>{`These are the instructions to build a ${props.module.name}.`}</p>
    <Measurement
      allowance={props.allowance}
      cutHeight={props.cutHeight}
      cutWidth={props.cutWidth}
      sewHeight={props.sewHeight}
      sewWidth={props.sewWidth}
      webbing={props.webbing}
      volume={props.volume}
    />
  </Box>
);

export default Instruction;
