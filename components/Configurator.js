/** @jsx jsx */
import { jsx, Box, Button, Label, Select, Input, Slider } from "theme-ui";

const RolltopBagConfig = () => (
  <React.Fragment>
    <Label>Bag Width</Label>
    <Input name="widh" id="widh" mb={3} type="number" min="0" />
    <Label>Bag Height</Label>
    <Input name="height" id="height" mb={3} type="number" min="0" />
    <Label>Webbing Width</Label>
    <Input name="webbing" id="webbing" mb={3} type="number" min="0" />
    <Label>Seam Allowance</Label>
    <Input name="seam" id="seam" mb={5} type="number" min="0" />
  </React.Fragment>
);

const DrawstringBagConfig = () => (
  <React.Fragment>
    <Label>Bag Width</Label>
    <Input name="widh" id="widh" mb={3} type="number" min="0" />
    <Label>Bag Height</Label>
    <Input name="height" id="height" mb={3} type="number" min="0" />
    <Label>Seam Allowance</Label>
    <Input name="seam" id="seam" mb={5} type="number" min="0" />
  </React.Fragment>
);

const ConstructionTypes = [
  {
    id: "roll-top-bag",
    label: "Roll-top Bag",
    component: <RolltopBagConfig />,
  },
  {
    id: "draw-string-bag",
    label: "Draw-string Bag",
    component: <DrawstringBagConfig />,
  },
];

export default class Configurator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: {},
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.props.onChange({ construction: value });
  };

  render() {
    return (
      <Box as="form">
        <Label htmlFor="name">Pattern Name</Label>
        <Input name="name" id="name" mb={3} />
        <Label htmlFor="construction">Construction</Label>
        <Select
          name="construction"
          id="construction"
          mb={5}
          onChange={this.onChange}
        >
          {ConstructionTypes.map((type) => (
            <option value={type.id} key={type.id}>
              {type.label}
            </option>
          ))}
        </Select>
        {ConstructionTypes[0].component}
      </Box>
    );
  }
}
