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
  cuffAllowance: number;
  seamAllowance: number;
  sewHeight: number;
  sewWidth: number;
  display: "pattern" | "instruction";
  module: any;
}

export default class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      cuffAllowance: Modules[0].presets[0].cuffAllowance,
      seamAllowance: Modules[0].presets[0].seamAllowance,
      sewHeight: Modules[0].presets[0].height,
      sewWidth: Modules[0].presets[0].width,
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
      cuffAllowance: this.state.cuffAllowance,
      seamAllowance: this.state.seamAllowance,
      height: this.state.sewHeight,
    });
    const cutWidth = this.state.module.derivates.cutWidth({
      seamAllowance: this.state.seamAllowance,
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
              cuffAllowance={this.state.cuffAllowance}
              seamAllowance={this.state.seamAllowance}
              sewHeight={this.state.sewHeight}
              sewWidth={this.state.sewWidth}
            />
          </MainSidebar>
        </Main>
      </Page>
    );
  }
}
