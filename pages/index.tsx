/** @jsx jsx */
import React from "react";
import { jsx, Box, Button, Label, Input, Select } from "theme-ui";
import AppSidebar from "../components/AppSidebar";
import AppMain from "../components/AppMain";
import Canvas from "../components/Canvas";

interface IState {
  allowance: number;
  closure: string;
  fold: string;
  height: number;
  webbing: number;
  width: number;
}

export default class Index extends React.Component {
  state: IState;
  constructor(props) {
    super(props);
    this.state = {
      allowance: 10,
      closure: "roll-top",
      fold: "side",
      height: 200,
      webbing: 10,
      width: 100,
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleStringChange = this.handleStringChange.bind(this);
  }

  handleNumberChange = (event) => {
    this.setState({ [event.target.name]: parseInt(event.target.value) });
  };

  handleStringChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(this.state, null, 2));
  };

  render() {
    return (
      <React.Fragment>
        <AppMain>
          <Canvas {...this.state} />
        </AppMain>
        <AppSidebar>
          <Box as="form" onSubmit={this.handleSubmit}>
            <Label>Closure</Label>
            <Select
              sx={{ mb: 3 }}
              name="closure"
              value={this.state.closure}
              onChange={this.handleStringChange}
            >
              <option value="roll-top">Roll-top</option>
              <option value="draw-string">Draw-string</option>
            </Select>
            <Label>Fold</Label>
            <Select
              sx={{ mb: 3 }}
              name="fold"
              value={this.state.fold}
              onChange={this.handleStringChange}
            >
              <option value="side">Side</option>
              <option value="bottom">Bottom</option>
            </Select>
            <Label>Final Bag Width</Label>
            <Input
              sx={{ mb: 3 }}
              type="number"
              name="width"
              min="0"
              value={this.state.width}
              onChange={this.handleNumberChange}
            />
            <Label>Final Bag Height</Label>
            <Input
              sx={{ mb: 3 }}
              type="number"
              name="height"
              min="0"
              value={this.state.height}
              onChange={this.handleNumberChange}
            />
            <Label>Seam Allowance</Label>
            <Input
              sx={{ mb: 3 }}
              type="number"
              name="allowance"
              min="0"
              value={this.state.allowance}
              onChange={this.handleNumberChange}
            />
            <Label>Webbing Width</Label>
            <Input
              mb="4"
              type="number"
              name="webbing"
              min="0"
              value={this.state.webbing}
              onChange={this.handleNumberChange}
            />
            <Button type="submit">Download Pattern</Button>
          </Box>
        </AppSidebar>
      </React.Fragment>
    );
  }
}
