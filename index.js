import { Dimensions, Platform, StatusBar } from "react-native";

export const isIphoneSE = () => {
  const { width, height } = Dimensions.get("window");

  return (
    Platform.OS === "ios" &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 320 || width === 320 || (height === 568 || width === 568))
  );
};

export const concernSESize = (originalSize, seSize) => {
  return isIphoneSE() ? seSize : originalSize;
};
