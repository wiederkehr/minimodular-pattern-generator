/** @jsx jsx */
import React from "react";
import downloadSvg from "svg-crowbar";
import { jsx, Flex, Box, Button, Label, Slider, Radio } from "theme-ui";
import MainSidebar from "../components/MainSidebar";
import MainContent from "../components/MainContent";
import Canvas from "../components/Canvas";
import Pattern from "../components/Pattern";
import { PatternProps } from "../types/PatternProps";
import { calculateCutHeight } from "../helpers/calculateCutHeight";
import { calculateCutWidth } from "../helpers/calculateCutWidth";
import { calculateVolume } from "../helpers/calculateVolume";

export default class Index extends React.Component {
  state: PatternProps;
  constructor(props) {
    super(props);
    this.state = {
      allowance: 10,
      closure: "roll-top",
      fold: "vertical",
      webbing: 10,
      sewHeight: 480,
      sewWidth: 240,
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
    downloadSvg(document.querySelector("svg"));
  };

  render() {
    const cutHeight = calculateCutHeight({
      allowance: this.state.allowance,
      closure: this.state.closure,
      fold: this.state.fold,
      height: this.state.sewHeight,
      webbing: this.state.webbing,
    });
    const cutWidth = calculateCutWidth({
      allowance: this.state.allowance,
      fold: this.state.fold,
      width: this.state.sewWidth,
    });
    const volume = calculateVolume({
      height: this.state.sewHeight,
      width: this.state.sewWidth,
    });
    return (
      <React.Fragment>
        <MainContent>
          <Canvas>
            <Pattern
              {...this.state}
              cutHeight={cutHeight}
              cutWidth={cutWidth}
              volume={volume}
            />
          </Canvas>
        </MainContent>
        <MainSidebar>
          <Box as="form" onSubmit={this.handleSubmit}>
            <Label>Closure</Label>
            <Flex mb={3}>
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
            <Flex mb={3}>
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
            <Label>Bag Width: {this.state.sewWidth}</Label>
            <Slider
              mb={3}
              name="sewWidth"
              max="500"
              min="0"
              step="10"
              value={this.state.sewWidth}
              onChange={this.handleNumberChange}
            />
            <Label>Bag Height: {this.state.sewHeight}</Label>
            <Slider
              mb={3}
              name="sewHeight"
              max="500"
              min="0"
              step="10"
              value={this.state.sewHeight}
              onChange={this.handleNumberChange}
            />
            <Label>Seam Allowance: {this.state.allowance}</Label>
            <Slider
              mb={3}
              name="allowance"
              max="50"
              min="10"
              step="5"
              value={this.state.allowance}
              onChange={this.handleNumberChange}
            />
            <Label>Webbing Width: {this.state.webbing}</Label>
            <Slider
              mb="4"
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
              value={this.state.webbing}
              onChange={this.handleNumberChange}
              disabled={this.state.closure != "roll-top"}
            />
            <Button sx={{ width: "100%" }} variant="primary" type="submit">
              Download Pattern
            </Button>
          </Box>
        </MainSidebar>
      </React.Fragment>
    );
  }
}
