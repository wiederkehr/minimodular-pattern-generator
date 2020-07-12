/** @jsx jsx */
import { jsx } from "theme-ui";
import AppSidebar from "../components/AppSidebar";
import AppMain from "../components/AppMain";
import Configurator from "../components/Configurator";
import Canvas from "../components/Canvas";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      construction: {},
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = (construction) => {
    this.setState(construction);
  };

  render() {
    return (
      <React.Fragment>
        <AppSidebar>
          <Configurator
            construction={this.state.construction}
            onChange={this.onChange}
          />
        </AppSidebar>
        <AppMain>
          <Canvas construction={this.state.construction} />
        </AppMain>
      </React.Fragment>
    );
  }
}
