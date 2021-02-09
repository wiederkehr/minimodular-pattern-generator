/** @jsxImportSource theme-ui */
import { Box } from "theme-ui";
import Measurement from "./Measurement";

interface Props {
  children?: React.ReactNode;
  cutHeight: number;
  cutWidth: number;
  cuffAllowance: number;
  seamAllowance: number;
  sewHeight: number;
  sewWidth: number;
  volume: number;
  display: "pattern" | "instruction";
  module: any;
}

const Instruction = (props: Props) => (
  <Box>
    <p>{`These are the instructions to build a ${props.module.name}.`}</p>
    <Measurement
      cutHeight={props.cutHeight}
      cutWidth={props.cutWidth}
      cuffAllowance={props.cuffAllowance}
      seamAllowance={props.seamAllowance}
      sewHeight={props.sewHeight}
      sewWidth={props.sewWidth}
      volume={props.volume}
    />
  </Box>
);

export default Instruction;
