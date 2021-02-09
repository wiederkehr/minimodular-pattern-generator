/** @jsxImportSource theme-ui */
import { Box, Button, Label, Slider, Select } from "theme-ui";
import { ReactEventHandler } from "react";
import modules from "../modules";

interface Props {
  handleSelectChange: ReactEventHandler;
  handleSliderChange: ReactEventHandler;
  handleSubmit: ReactEventHandler;
  cuffAllowance: number;
  seamAllowance: number;
  sewHeight: number;
  sewWidth: number;
  modules: Array<Object>;
}

const Configuration = (props: Props) => (
  <Box as="form" onSubmit={props.handleSubmit}>
    <Box mb={4}>
      <Label sx={{textTransform: "uppercase"}}>Module</Label>
      <Select onChange={props.handleSelectChange}>
        {modules.map((module, index) => (
          <option key={index} value={index}>
            {module.name}
          </option>
        ))}
      </Select>
    </Box>
    <Box mb={4}>
      <Label sx={{textTransform: "uppercase"}}>Bag Width: {props.sewWidth}</Label>
      <Slider
        mb={3}
        name="sewWidth"
        max="500"
        min="0"
        step="10"
        value={props.sewWidth}
        onChange={props.handleSliderChange}
      />
      <Label sx={{textTransform: "uppercase"}}>Bag Height: {props.sewHeight}</Label>
      <Slider
        mb={3}
        name="sewHeight"
        max="500"
        min="0"
        step="10"
        value={props.sewHeight}
        onChange={props.handleSliderChange}
      />
      <Label sx={{textTransform: "uppercase"}}>Seam Allowance: {props.seamAllowance}</Label>
      <Slider
        mb={3}
        name="seamAllowance"
        max="50"
        min="10"
        step="5"
        value={props.seamAllowance}
        onChange={props.handleSliderChange}
      />
      <Label sx={{textTransform: "uppercase"}}>Cuff Allowance: {props.cuffAllowance}</Label>
      <Slider
        sx={{
          "&:disabled": {
            color: "disabled",
            backgroundColor: "disabled",
          },
        }}
        name="cuffAllowance"
        max="50"
        min="10"
        step="5"
        value={props.cuffAllowance}
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
