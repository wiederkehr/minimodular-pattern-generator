interface VolumeProps {
  height: number;
  width: number;
}

export const calculateVolume = (props: VolumeProps): number => {
  //FIXME: The actual bottom is not a full circle.
  const bottomCircumference = props.width * 2;
  const bottomDiameter = bottomCircumference / Math.PI;
  const bottomRadius = bottomDiameter / 2;
  const bottomArea = Math.pow(bottomRadius, 2) * Math.PI;
  //FIXME: The remaining height is in reality shorter than the original height.
  const remainingHeight = props.height;
  const volume = bottomArea * remainingHeight;
  return roundToDecimals(volume / 1000000);
};

const roundToDecimals = (num: number): number =>
  Math.round((num + Number.EPSILON) * 100) / 100;
