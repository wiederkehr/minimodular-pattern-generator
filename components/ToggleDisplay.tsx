/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Toggle, ToggleOption } from "./Toggle";

interface Props {
  display: "pattern" | "instruction";
  toggleDisplay: Function;
}

const ToggleDisplay = (props: Props) => (
  <Box sx={{ marginTop: 3 }}>
    <Toggle>
      <ToggleOption
        onClick={props.toggleDisplay}
        value="pattern"
        active={props.display === "pattern"}
      >
        Pattern
      </ToggleOption>
      <ToggleOption
        onClick={props.toggleDisplay}
        value="instruction"
        active={props.display === "instruction"}
      >
        Instruction
      </ToggleOption>
    </Toggle>
  </Box>
);

export default ToggleDisplay;
