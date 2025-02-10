import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "../components/Button";

export default function Home() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top + 16,
        alignItems: "center",
        gap: 16,
        paddingHorizontal: 8,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 24, color: "#001A72" }}>React Native</Text>
        <Text style={{ fontSize: 24, fontWeight: "700", color: "#001A72" }}>
          Reanimated Beta Versão 4.x
        </Text>
      </View>

      <Button
        title="Foguete no Espaço"
        onPress={() => router.navigate("/rocket-in-space")}
      />

      <Button title="Fogueira" onPress={() => router.navigate("/campfire")} />

      <Button title="Emojis" onPress={() => router.navigate("/emojis")} />

      <Button
        title="Spinner e Loaders"
        onPress={() => router.navigate("/spinners-and-loaders")}
      />

      <Button
        title="Squishy Squashy"
        onPress={() => router.navigate("/squishy-squashy")}
      />
    </View>
  );
}
