/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import downloadSvg from "svg-crowbar";
import ContainerDimensions from "react-container-dimensions";
import Page from "../components/Page";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import MainContent from "../components/MainContent";
import MainSidebar from "../components/MainSidebar";
import Configuration from "../components/Configuration";
import Pattern from "../components/Pattern";
import PatternContainer from "../components/PatternContainer";
import Instruction from "../components/Instruction";
import DisplayToggle from "../components/DisplayToggle";
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
  display: "pattern" | "instruction";
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
      display: "instruction",
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay = (value: string) => {
    this.setState(({ display: value } as unknown) as State);
  };

  handleSliderChange = (event: React.ChangeEvent) => {
    const target: HTMLInputElement = event.currentTarget as HTMLInputElement;
    const value: number = parseInt(target.value);
    this.setState(({ [target.name]: value } as unknown) as State);
  };

  handleSelectChange = (event: React.ChangeEvent) => {
    const target: HTMLInputElement = event.currentTarget as HTMLInputElement;
    const value: string = target.value;
    const values: Array<String> = value.split(",");
    this.setState(({
      closure: values[0],
      fold: values[1],
    } as unknown) as State);
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

    const DisplayPattern = (
      <PatternContainer>
        <ContainerDimensions>
          {({ height, width }) => (
            <Pattern
              {...this.state}
              cutHeight={cutHeight}
              cutWidth={cutWidth}
              maxHeight={height}
              volume={volume}
              scale={this.calculateScale(width, cutWidth, height, cutHeight)}
            />
          )}
        </ContainerDimensions>
      </PatternContainer>
    );

    const DisplayInstructions = (
      <Instruction>
        <p>{`These are the instructions to build a ${this.state.fold}, ${this.state.closure} bag.`}</p>
      </Instruction>
    );

    return (
      <Page>
        <Header>
          <DisplayToggle
            display={this.state.display}
            toggleDisplay={this.toggleDisplay}
          />
        </Header>
        <Main>
          <MainContent>
            {this.state.display === "pattern"
              ? DisplayPattern
              : DisplayInstructions}
          </MainContent>
          <MainSidebar>
            <Configuration
              handleSelectChange={this.handleSelectChange}
              handleSliderChange={this.handleSliderChange}
              handleSubmit={this.handleSubmit}
              allowance={this.state.allowance}
              closure={this.state.closure}
              fold={this.state.fold}
              sewHeight={this.state.sewHeight}
              sewWidth={this.state.sewWidth}
              webbing={this.state.webbing}
            />
          </MainSidebar>
        </Main>
        <Footer />
      </Page>
    );
  }
}
