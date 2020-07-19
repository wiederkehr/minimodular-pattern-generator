/** @jsx jsx */
import React from "react";
import { jsx, Flex, Box, Button, Label, Slider, Radio } from "theme-ui";
import AppSidebar from "../components/AppSidebar";
import AppMain from "../components/AppMain";
import Canvas from "../components/Canvas";
import { Pattern } from "../types/Pattern";

export default class Index extends React.Component {
  state: Pattern;
  constructor(props) {
    super(props);
    this.state = {
      allowance: 10,
      closure: "roll-top",
      fold: "vertical",
      height: 150,
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
            <Flex mb={4}>
              <Label>
                <Radio
                  name="closure"
                  value="roll-top"
                  checked={this.state.closure == "roll-top"}
                  onChange={this.handleStringChange}
                />
                Roll-top
              </Label>
              <Label>
                <Radio
                  name="closure"
                  value="draw-string"
                  checked={this.state.closure == "draw-string"}
                  onChange={this.handleStringChange}
                />
                Draw-string
              </Label>
            </Flex>
            <Label>Fold</Label>
            <Flex mb={4}>
              <Label>
                <Radio
                  name="fold"
                  value="vertical"
                  checked={this.state.fold == "vertical"}
                  onChange={this.handleStringChange}
                />
                Vertical
              </Label>
              <Label>
                <Radio
                  name="fold"
                  value="horizontal"
                  checked={this.state.fold == "horizontal"}
                  onChange={this.handleStringChange}
                />
                Horizontal
              </Label>
            </Flex>
            <Label>Final Bag Width: {this.state.width}</Label>
            <Slider
              sx={{ mb: 4 }}
              name="width"
              max="1000"
              min="0"
              step="10"
              value={this.state.width}
              onChange={this.handleNumberChange}
            />
            <Label>Final Bag Height: {this.state.height}</Label>
            <Slider
              sx={{ mb: 4 }}
              name="height"
              max="1000"
              min="0"
              step="10"
              value={this.state.height}
              onChange={this.handleNumberChange}
            />
            <Label>Seam Allowance: {this.state.allowance}</Label>
            <Slider
              sx={{ mb: 4 }}
              name="allowance"
              max="50"
              min="0"
              step="5"
              value={this.state.allowance}
              onChange={this.handleNumberChange}
            />
            <Label>Webbing Width: {this.state.webbing}</Label>
            <Slider
              mb="0"
              name="webbing"
              max="50"
              min="0"
              step="5"
              value={this.state.webbing}
              onChange={this.handleNumberChange}
            />
            {/* <Button type="submit">Download Pattern</Button> */}
          </Box>
        </AppSidebar>
      </React.Fragment>
    );
  }
}
