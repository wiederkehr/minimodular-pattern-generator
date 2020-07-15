interface WidthProps {
  allowance: number;
  fold: string;
  width: number;
}

export const calculateWidth = (props: WidthProps): number => {
  let result = 0;
  switch (props.fold) {
    case "side":
      result = calculateRolltopWidth({
        allowance: props.allowance,
        width: props.width,
      });
      break;
    case "bottom":
      result = calculateRolltopWidth({
        allowance: props.allowance,
        width: props.width,
      });
      break;
    default:
      break;
  }
  return result;
};

interface RolltopWidthProps {
  allowance: number;
  width: number;
}

const calculateRolltopWidth = (props: RolltopWidthProps): number =>
  props.width + props.allowance * 2;
