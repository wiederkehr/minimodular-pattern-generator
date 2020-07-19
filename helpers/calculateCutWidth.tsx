interface WidthProps {
  allowance: number;
  fold: string;
  width: number;
}

export const calculateCutWidth = (props: WidthProps): number => {
  switch (props.fold) {
    case "vertical":
      return calculateVerticalFoldCutWidth({ ...props });
    case "horizontal":
      return calculateHorizontalFoldCutWidth({ ...props });
    default:
      return 0;
  }
};

const calculateVerticalFoldCutWidth = (props: WidthProps): number =>
  props.width * 2 + props.allowance * 2;

const calculateHorizontalFoldCutWidth = (props: WidthProps): number =>
  props.width + props.allowance * 2;
