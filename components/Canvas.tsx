/** @jsx jsx */
import { jsx } from "theme-ui";
import Card from "./Card";
import Pattern from "./Pattern";

const Canvas = (props) => (
  <Card>
    <Pattern {...props} />
  </Card>
);

export default Canvas;
