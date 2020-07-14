/** @jsx jsx */
import React from "react";
import { jsx, Box, Button, Label, Input } from "theme-ui";
import AppSidebar from "../components/AppSidebar";
import AppMain from "../components/AppMain";
import Canvas from "../components/Canvas";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "roll-top",
      height: 100,
      width: 200,
      webbing: 10,
      allowance: 20,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state, null, 2));
  };

  render() {
    return (
      <React.Fragment>
        <AppSidebar>
          <Box as="form" onSubmit={this.handleSubmit}>
            <Label>Final Bag Width</Label>
            <Input
              mb="3"
              type="number"
              name="width"
              min="0"
              value={this.state.width}
              onChange={this.handleChange}
            />
            <Label>Final Bag Height</Label>
            <Input
              mb="3"
              type="number"
              name="height"
              min="0"
              value={this.state.height}
              onChange={this.handleChange}
            />
            <Label>Seam Allowance</Label>
            <Input
              mb="3"
              type="number"
              name="allowance"
              min="0"
              value={this.state.allowance}
              onChange={this.handleChange}
            />
            <Label>Webbing Width</Label>
            <Input
              mb="4"
              type="number"
              name="webbing"
              min="0"
              value={this.state.webbing}
              onChange={this.handleChange}
            />
            <Button type="submit">Download Pattern</Button>
          </Box>
        </AppSidebar>
        <AppMain>
          <Canvas configuration={this.state} />
        </AppMain>
      </React.Fragment>
    );
  }
}
