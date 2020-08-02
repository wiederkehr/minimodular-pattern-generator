/** @jsx jsx */
import { jsx, Box } from "theme-ui";

interface Props {
  children?: React.ReactNode;
}

const Instruction = (props: Props) => (
  <Box>
    <p>{`These are the instructions to build a ${props.module.name}.`}</p>
  </Box>
);

export default Instruction;
