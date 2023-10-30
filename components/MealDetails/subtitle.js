import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitleText}> {children} </Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    marginVertical: 4,
    marginHorizontal: 12,

    borderBottomWidth: 2,
    borderBottomColor: "#e2b4a7",
  },

  subtitleText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    paddingVertical: 4,
    textAlign: "center",
    paddingHorizontal: 6,
  },
});
