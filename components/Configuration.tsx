/** @jsx jsx */
import { jsx, Box, Button, Label, Slider, Select } from "theme-ui";
import { ReactEventHandler } from "react";

interface Props {
  handleSubmit: ReactEventHandler;
  handleSelectChange: ReactEventHandler;
  handleNumberChange: ReactEventHandler;
  allowance: number;
  closure: string;
  fold: string;
  sewHeight: number;
  sewWidth: number;
  webbing: number;
}

const Configuration = (props: Props) => (
  <Box as="form" onSubmit={props.handleSubmit}>
    <Box mb={4}>
      <Label>Pattern</Label>
      <Select onChange={props.handleSelectChange}>
        <option value="roll-top,vertical">Roll-top Bag (vertical)</option>
        <option value="roll-top,horizontal">Roll-top Bag (horizontal)</option>
        <option value="draw-string,vertical">Draw-string Bag (vertical)</option>
        <option value="draw-string,horizontal">
          Draw-string Bag (horizontal)
        </option>
        <option value="roll-top,vertical">Zipper Sleeve</option>
        <option value="roll-top,vertical">Zipper Cube</option>
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
        onChange={props.handleNumberChange}
      />
      <Label>Bag Height: {props.sewHeight}</Label>
      <Slider
        mb={3}
        name="sewHeight"
        max="500"
        min="0"
        step="10"
        value={props.sewHeight}
        onChange={props.handleNumberChange}
      />
      <Label>Seam Allowance: {props.allowance}</Label>
      <Slider
        mb={3}
        name="allowance"
        max="50"
        min="10"
        step="5"
        value={props.allowance}
        onChange={props.handleNumberChange}
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
        onChange={props.handleNumberChange}
        disabled={props.closure != "roll-top"}
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
