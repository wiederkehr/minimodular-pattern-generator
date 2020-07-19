interface HeightProps {
  allowance: number;
  fold: string;
  closure: string;
  height: number;
  webbing: number;
}

export const calculateCutHeight = (props: HeightProps): number => {
  switch (props.fold) {
    case "vertical":
      return calculateVerticalFoldCutHeight({ ...props });
    case "horizontal":
      return calculateHorizontalFoldCutHeight({ ...props });
    default:
      return 0;
  }
};

const calculateVerticalFoldCutHeight = (props: HeightProps): number => {
  switch (props.closure) {
    case "roll-top":
      return props.allowance + props.height + props.webbing * 2;
    case "draw-string":
      return props.allowance + props.height + props.allowance;
    default:
      return 0;
  }
};

const calculateHorizontalFoldCutHeight = (props: HeightProps): number => {
  switch (props.closure) {
    case "roll-top":
      return props.height * 2 + props.webbing * 4;
    case "draw-string":
      return props.allowance + props.height * 2 + props.allowance;
    default:
      return 0;
  }
};
