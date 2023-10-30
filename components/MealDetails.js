import { StyleSheet, Text, View } from "react-native";

function MealDetails({ duration, complexity, affordability, style }) {
  return (
    <View style={styles.details}>
      <Text style={style}> {duration}m </Text>
      <Text style={[styles.text, style]}> {complexity} </Text>
      <Text style={[styles.text, style]}> {affordability} </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flex: 1,

    flexDirection: "row",

    justifyContent: "center",

    alignItems: "center",

    columnGap: 4,

    margin: 8,
  },

  text: {
    textTransform: "uppercase",
    fontSize: 10,
  },
});
