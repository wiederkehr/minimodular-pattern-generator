interface HeightProps {
  allowance: number;
  fold: string;
  closure: string;
  height: number;
  webbing: number;
}

export const calculateHeight = (props: HeightProps): number => {
  switch (props.fold) {
    case "vertical":
      return calculateSideFoldHeight({ ...props });
    case "horizontal":
      return calculateBottomFoldHeight({ ...props });
    default:
      return 0;
  }
};

const calculateSideFoldHeight = (props: HeightProps): number => {
  switch (props.closure) {
    case "roll-top":
      return props.allowance + props.height + props.webbing * 2;
    case "draw-string":
      return props.allowance + props.height + props.allowance * 2;
    default:
      return 0;
  }
};

const calculateBottomFoldHeight = (props: HeightProps): number => {
  switch (props.closure) {
    case "roll-top":
      return props.height * 2 + props.webbing * 4;
    case "draw-string":
      return props.height * 2 + props.allowance * 2;
    default:
      return 0;
  }
};
