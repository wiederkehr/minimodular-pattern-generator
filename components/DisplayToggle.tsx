/** @jsxImportSource theme-ui */
import { Box } from "theme-ui";
import { Toggle, ToggleOption } from "./Toggle";

interface Props {
  display: "pattern" | "instruction";
  toggleDisplay: Function;
}

const DisplayToggle = (props: Props) => (
  <Box sx={{ marginTop: 3 }}>
    <Toggle value={props.display} onChange={props.toggleDisplay}>
      <ToggleOption value="pattern">Pattern</ToggleOption>
      <ToggleOption value="instruction">Instruction</ToggleOption>
    </Toggle>
  </Box>
);

export default DisplayToggle;
