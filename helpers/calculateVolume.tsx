interface VolumeProps {
  height: number;
  width: number;
}

export const calculateVolume = (props: VolumeProps): number => {
  const bottomCircumference = props.width * 2;
  const bottomDiameter = bottomCircumference / Math.PI;
  const bottomRadius = bottomDiameter / 2;
  const bottomArea = Math.pow(bottomRadius, 2) * Math.PI;
  const remainingHeight = props.height;
  const volume = bottomArea * remainingHeight;
  return roundToDecimals(volume / 1000000);
};

const roundToDecimals = (num: number): number =>
  Math.round((num + Number.EPSILON) * 100) / 100;
