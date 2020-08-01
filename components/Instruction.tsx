/** @jsx jsx */
import { jsx, Box } from "theme-ui";

interface Props {
  children?: React.ReactNode;
}

const Instruction = (props: Props) => <Box>{props.children}</Box>;

export default Instruction;
