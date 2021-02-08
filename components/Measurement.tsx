/** @jsx jsx */
import { jsx } from "theme-ui";

interface MeasurementProps {
  allowance: number;
  cutHeight: number;
  cutWidth: number;
  sewHeight: number;
  sewWidth: number;
  webbing: number;
  volume: number;
}

const Measurement = (props: MeasurementProps) => (
  <pre
    sx={{
      mY: 3,
      mX: 0,
    }}
  >
    Dimensions:
    {JSON.stringify(props, null, 2)}
  </pre>
);

export default Measurement;
