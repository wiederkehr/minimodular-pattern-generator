interface WidthProps {
  allowance: number;
  fold: string;
  width: number;
}

export const calculateWidth = (props: WidthProps): number => {
  switch (props.fold) {
    case "side":
      return calculateSideFoldWidth({ ...props });
    case "bottom":
      return calculateBottomFoldWidth({ ...props });
    default:
      return 0;
  }
};

const calculateSideFoldWidth = (props: WidthProps): number =>
  props.width * 2 + props.allowance * 2;

const calculateBottomFoldWidth = (props: WidthProps): number =>
  props.width + props.allowance * 2;
