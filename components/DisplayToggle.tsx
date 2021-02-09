/** @jsxImportSource theme-ui */
import { Box } from "theme-ui";
import DisplayOption from "./DisplayOption";

interface Props {
  display: "pattern" | "instruction";
  toggleDisplay: Function;
}

const DisplayToggle = (props: Props) => (
  <Box sx={{ marginTop: 3 }}>
    <DisplayOption
      value="pattern"
      active={"pattern" === props.display}
      onClick={props.toggleDisplay}>
      Pattern
    </DisplayOption>
    <DisplayOption
      value="instruction"
      active={"instruction" === props.display}
      onClick={props.toggleDisplay}>
      Instruction
    </DisplayOption>
  </Box>
);

export default DisplayToggle;