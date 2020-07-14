/** @jsx jsx */
import { jsx } from "theme-ui";

interface CanvasProps {
  configuration: Object;
}

const Canvas: React.FC<CanvasProps> = ({ configuration }) => (
  <p>{JSON.stringify(configuration, null, 2)}</p>
);

export default Canvas;
