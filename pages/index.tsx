/** @jsx jsx */
import { jsx } from "theme-ui";
import AppSidebar from "../components/AppSidebar";
import AppMain from "../components/AppMain";

export default function app() {
  return (
    <React.Fragment>
      <AppSidebar />
      <AppMain />
    </React.Fragment>
  );
}
