/** @jsx jsx */
import { jsx } from "theme-ui";
import AppSidebar from "../components/AppSidebar";
import AppMain from "../components/AppMain";
import Configurator from "../components/Configurator";
import Canvas from "../components/Canvas";

export default function app() {
  return (
    <React.Fragment>
      <AppSidebar>
        <Configurator />
      </AppSidebar>
      <AppMain>
        <Canvas />
      </AppMain>
    </React.Fragment>
  );
}
