/** @jsx jsx */
import { jsx, Box } from "theme-ui";

interface OutputProps {
  allowance: number;
  closure: string;
  fold: string;
  height: number;
  webbing: number;
  width: number;
}

const Output = (props: OutputProps) => {
  return (
    <Box
      sx={{
        mt: 3,
        p: 3,
        border: "1px solid #000",
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
};

export default Output;