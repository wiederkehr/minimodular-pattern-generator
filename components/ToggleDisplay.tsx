/** @jsx jsx */
import { jsx, Box } from "theme-ui";
import { Toggle, ToggleOption } from "./Toggle";

interface Props {
  display: "pattern" | "instruction";
  toggleDisplay: Function;
}

const ToggleDisplay = (props: Props) => (
  <Box sx={{ marginTop: 3 }}>
    <Toggle
      value={props.display}
      onChange={(value: string) => {
        props.toggleDisplay(value);
      }}
    >
      <ToggleOption value="pattern">Pattern</ToggleOption>
      <ToggleOption value="instruction">Instruction</ToggleOption>
    </Toggle>
  </Box>
);

export default ToggleDisplay;
