interface HeightProps {
  allowance: number;
  closure: string;
  height: number;
  webbing: number;
}

export const calculateHeight = (props: HeightProps): number => {
  let result = 0;
  switch (props.closure) {
    case "roll-top":
      result = calculateRolltopHeight({
        allowance: props.allowance,
        height: props.height,
        webbing: props.webbing,
      });
      break;
    default:
      break;
  }
  return result;
};

interface RolltopHeightProps {
  allowance: number;
  height: number;
  webbing: number;
}

const calculateRolltopHeight = (props: RolltopHeightProps) =>
  props.allowance + props.height + props.webbing * 2;
