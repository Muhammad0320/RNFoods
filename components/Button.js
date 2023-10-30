import { Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";

function Button({ color, name, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={name} color={color} size={24} />
    </Pressable>
  );
}

export default Button;
