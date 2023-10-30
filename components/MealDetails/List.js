import { StyleSheet, Text, View } from "react-native";

function List({ data }) {
  return data.map((dataPoint, i) => (
    <View key={i + 1} style={styles.listContainer}>
      <Text style={styles.listText}> {dataPoint} </Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "#e2b4a7",
    borderRadius: 6,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    paddingHorizontal: 6,
    textAlign: "center",
  },

  listText: {
    textAlign: "center",
    color: "#351401",
    fontSize: 12,
  },
});
