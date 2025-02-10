import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { router } from "expo-router";

type ButtonProps = TouchableOpacityProps & {
  title: string;
};
export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#001A72",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 16,
    color: "#fff",
  },
});
