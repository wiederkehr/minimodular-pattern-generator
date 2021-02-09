/** @jsxImportSource theme-ui */
import site from "../site.config"
import React from "react";
import downloadSvg from "svg-crowbar";
import Page from "../components/Page";
import Header from "../components/Header";
import Main from "../components/Main";
import MainContent from "../components/MainContent";
import MainSidebar from "../components/MainSidebar";
import Configuration from "../components/Configuration";
import Pattern from "../components/Pattern";
import Instruction from "../components/Instruction";
import DisplayToggle from "../components/DisplayToggle";
import Modules from "../modules";

interface Props {}
interface State {
  allowance: number;
  sewHeight: number;
  sewWidth: number;
  webbing: number;
  display: "pattern" | "instruction";
  module: any;
}

export default class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      allowance: Modules[0].presets[0].allowance,
      sewHeight: Modules[0].presets[0].height,
      sewWidth: Modules[0].presets[0].width,
      webbing: Modules[0].presets[0].webbing,
      display: "pattern",
      module: Modules[0],
    };
    this.switchModule = this.switchModule.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay = (value: string) => {
    this.setState(({ display: value } as unknown) as State);
  };

  handleSliderChange = (event: React.ChangeEvent) => {
    const target: HTMLInputElement = event.currentTarget as HTMLInputElement;
    const value: number = parseInt(target.value) as number;
    this.setState(({ [target.name]: value } as unknown) as State);
  };

  switchModule = (event: React.ChangeEvent) => {
    const target: HTMLInputElement = event.currentTarget as HTMLInputElement;
    const value: number = parseInt(target.value) as number;
    this.setState(({ module: Modules[value] } as unknown) as State);
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    downloadSvg(document.querySelector("svg"));
  };

  render() {
    const cutHeight = this.state.module.derivates.cutHeight({
      allowance: this.state.allowance,
      height: this.state.sewHeight,
      webbing: this.state.webbing,
    });
    const cutWidth = this.state.module.derivates.cutWidth({
      allowance: this.state.allowance,
      width: this.state.sewWidth,
    });
    const volume = this.state.module.derivates.volume({
      height: this.state.sewHeight,
      width: this.state.sewWidth,
    });
    return (
      <Page
        title={site.title}
        description={site.description}>
        <Header>
          <DisplayToggle
            display={this.state.display}
            toggleDisplay={this.toggleDisplay}
          />
        </Header>
        <Main>
          <MainContent>
            {this.state.display === "pattern" ? (
              <Pattern
                {...this.state}
                cutHeight={cutHeight}
                cutWidth={cutWidth}
                volume={volume}
              />
            ) : (
              <Instruction
                {...this.state}
                cutHeight={cutHeight}
                cutWidth={cutWidth}
                volume={volume}
              />
            )}
          </MainContent>
          <MainSidebar>
            <Configuration
              modules={Modules}
              handleSelectChange={this.switchModule}
              handleSliderChange={this.handleSliderChange}
              handleSubmit={this.handleSubmit}
              allowance={this.state.allowance}
              sewHeight={this.state.sewHeight}
              sewWidth={this.state.sewWidth}
              webbing={this.state.webbing}
            />
          </MainSidebar>
        </Main>
      </Page>
    );
  }
}
