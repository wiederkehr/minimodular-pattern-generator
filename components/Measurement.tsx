/** @jsxImportSource theme-ui */


interface MeasurementProps {
  cutHeight: number;
  cutWidth: number;
  cuffAllowance: number;
  seamAllowance: number;
  sewHeight: number;
  sewWidth: number;
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
