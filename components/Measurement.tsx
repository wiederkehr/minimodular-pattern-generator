/** @jsx jsx */
import { jsx, Box } from "theme-ui";

interface MeasurementProps {
  allowance: number;
  closure: string;
  fold: string;
  height: number;
  webbing: number;
  width: number;
}

const Measurement = (props: MeasurementProps) => (
  <Box
    sx={{
      mt: 3,
    }}
  >
    <pre
      sx={{
        m: 0,
      }}
    >
      <span>Final Dimensions: </span>
      {JSON.stringify(props, null, 2)}
    </pre>
  </Box>
);

export default Measurement;
