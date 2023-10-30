import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        style={[
          ({ pressed }) => (pressed ? styles.pressIos : null),
          styles.button,
        ]}
        onPress={onPress}
      >
        <View style={[{ backgroundColor: color }, styles.innerContainer]}>
          <Text style={styles.gridText}> {title} </Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 5,
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },

  pressIos: {
    opacity: 0.6,
  },

  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },

  gridText: {
    fontWeight: "600",
    fontSize: 18,
  },
});
