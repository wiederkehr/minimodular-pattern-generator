/** @jsx jsx */
import { jsx, Box, Button, Label, Slider, Select } from "theme-ui";
import { ReactEventHandler } from "react";
import modules from "../modules";

interface Props {
  handleSelectChange: ReactEventHandler;
  handleSliderChange: ReactEventHandler;
  handleSubmit: ReactEventHandler;
  allowance: number;
  sewHeight: number;
  sewWidth: number;
  webbing: number;
  modules: Array<any>;
}

const Configuration = (props: Props) => (
  <Box as="form" onSubmit={props.handleSubmit}>
    <Box mb={4}>
      <Label>Module</Label>
      <Select onChange={props.handleSelectChange}>
        {modules.map((module, index) => (
          <option value={index}>{module.name}</option>
        ))}
      </Select>
    </Box>
    <Box mb={4}>
      <Label>Bag Width: {props.sewWidth}</Label>
      <Slider
        mb={3}
        name="sewWidth"
        max="500"
        min="0"
        step="10"
        value={props.sewWidth}
        onChange={props.handleSliderChange}
      />
      <Label>Bag Height: {props.sewHeight}</Label>
      <Slider
        mb={3}
        name="sewHeight"
        max="500"
        min="0"
        step="10"
        value={props.sewHeight}
        onChange={props.handleSliderChange}
      />
      <Label>Seam Allowance: {props.allowance}</Label>
      <Slider
        mb={3}
        name="allowance"
        max="50"
        min="10"
        step="5"
        value={props.allowance}
        onChange={props.handleSliderChange}
      />
      <Label>Webbing Width: {props.webbing}</Label>
      <Slider
        sx={{
          "&:disabled": {
            color: "disabled",
            backgroundColor: "disabled",
          },
        }}
        name="webbing"
        max="50"
        min="10"
        step="5"
        value={props.webbing}
        onChange={props.handleSliderChange}
      />
    </Box>
    <Button
      sx={{ width: "100%", marginBottom: 2 }}
      variant="primary"
      type="submit"
    >
      Download Pattern
    </Button>
  </Box>
);

export default Configuration;
