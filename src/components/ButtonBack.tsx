import { Text, TouchableOpacity } from "react-native";

import ArrowLeft from "phosphor-react-native/src/icons/ArrowLeft";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ButtonBackProps = {
  isBackgroundBlack?: boolean;
};
export function ButtonBack({ isBackgroundBlack = false }: ButtonBackProps) {
  const insets = useSafeAreaInsets();

  return (
    <TouchableOpacity
      style={{
        width: 24,
        height: 24,
        borderRadius: 99999,
        position: "absolute",
        top: insets.top + 8,
        left: 15,
      }}
      onPress={() => router.back()}
    >
      <ArrowLeft size={24} color={isBackgroundBlack ? "#fff" : "#000"} />
    </TouchableOpacity>
  );
}
