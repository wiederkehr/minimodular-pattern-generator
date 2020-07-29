/** @jsx jsx */
import React from "react";
import downloadSvg from "svg-crowbar";
import ContainerDimensions from "react-container-dimensions";
import { jsx, Flex, Box, Button, Label, Slider, Radio } from "theme-ui";
import MainSidebar from "../components/MainSidebar";
import MainContent from "../components/MainContent";
import Canvas from "../components/Canvas";
import Pattern from "../components/Pattern";
import { calculateCutHeight } from "../helpers/calculateCutHeight";
import { calculateCutWidth } from "../helpers/calculateCutWidth";
import { calculateVolume } from "../helpers/calculateVolume";

interface Props {}
interface State {
  allowance: number;
  closure: string;
  fold: string;
  sewHeight: number;
  sewWidth: number;
  webbing: number;
}

export default class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      allowance: 10,
      closure: "roll-top",
      fold: "vertical",
      sewHeight: 480,
      sewWidth: 240,
      webbing: 10,
    };
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleStringChange = this.handleStringChange.bind(this);
  }

  handleNumberChange = (event: React.ChangeEvent) => {
    const target: HTMLInputElement = event.currentTarget as HTMLInputElement;
    const value: number = parseInt(target.value);
    this.setState(({ [target.name]: value } as unknown) as State);
  };

  handleStringChange = (event: React.ChangeEvent) => {
    const target: HTMLInputElement = event.currentTarget as HTMLInputElement;
    const value: string = target.value;
    this.setState(({ [target.name]: value } as unknown) as State);
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    downloadSvg(document.querySelector("svg"));
  };

  calculateScale = (
    width: number,
    cutWidth: number,
    height: number,
    cutHeight: number
  ) => {
    const widthScale = cutWidth / width;
    const heightScale = cutHeight / height;
    const scale = widthScale > heightScale ? widthScale : heightScale;
    return scale;
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
            <ContainerDimensions>
              {({ height, width }) => (
                <Pattern
                  {...this.state}
                  cutHeight={cutHeight}
                  cutWidth={cutWidth}
                  maxHeight={height}
                  volume={volume}
                  scale={this.calculateScale(
                    width,
                    cutWidth,
                    height,
                    cutHeight
                  )}
                />
              )}
            </ContainerDimensions>
          </Canvas>
        </MainContent>
        <MainSidebar>
          <Box as="form" onSubmit={this.handleSubmit}>
            <Label>Closure</Label>
            <Flex mb={3}>
              <Label sx={{ alignItems: "center" }}>
                <Radio
                  name="closure"
                  value="roll-top"
                  checked={this.state.closure == "roll-top"}
                  onChange={this.handleStringChange}
                />
                Roll-top
              </Label>
              <Label sx={{ alignItems: "center" }}>
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
              <Label sx={{ alignItems: "center" }}>
                <Radio
                  name="fold"
                  value="vertical"
                  checked={this.state.fold == "vertical"}
                  onChange={this.handleStringChange}
                />
                Vertical
              </Label>
              <Label sx={{ alignItems: "center" }}>
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
              sx={{
                marginBottom: 3,
              }}
              name="sewWidth"
              max="500"
              min="0"
              step="10"
              value={this.state.sewWidth}
              onChange={this.handleNumberChange}
            />
            <Label>Bag Height: {this.state.sewHeight}</Label>
            <Slider
              sx={{
                marginBottom: 3,
              }}
              name="sewHeight"
              max="500"
              min="0"
              step="10"
              value={this.state.sewHeight}
              onChange={this.handleNumberChange}
            />
            <Label>Seam Allowance: {this.state.allowance}</Label>
            <Slider
              sx={{
                marginBottom: 3,
              }}
              name="allowance"
              max="50"
              min="10"
              step="5"
              value={this.state.allowance}
              onChange={this.handleNumberChange}
            />
            <Label>Webbing Width: {this.state.webbing}</Label>
            <Slider
              sx={{
                marginBottom: 4,
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
            <Button
              sx={{ width: "100%", marginBottom: 2 }}
              variant="primary"
              type="submit"
            >
              Download Pattern
            </Button>
          </Box>
          <Button sx={{ width: "100%", marginBottom: 2 }} variant="primary">
            See Instructions
          </Button>
        </MainSidebar>
      </React.Fragment>
    );
  }
}
