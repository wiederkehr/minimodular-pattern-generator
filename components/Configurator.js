/** @jsx jsx */
import { jsx, Box, Button, Label, Select, Input, Slider } from "theme-ui";

const Configurator = () => (
  <Box as="form" onSubmit={(e) => e.preventDefault()}>
    <Label htmlFor="name">Pattern Name</Label>
    <Input name="name" id="name" mb={3} />
    <Label htmlFor="construction">Construction</Label>
    <Select name="construction" id="construction" mb={3}>
      <option>Roll-top Bag</option>
      <option>Draw-string Bag</option>
      <option>Zipper Pouch</option>
      <option>Zipper Sleeve</option>
    </Select>
    <Label>Final Width</Label>
    <Slider mb={3} />
    <Label>Final Height</Label>
    <Slider mb={3} />
    <Button>Export Pattern</Button>
  </Box>
);

export default Configurator;
