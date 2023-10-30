import { FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

function MealsList({ currentMeals }) {
  return (
    <FlatList
      data={currentMeals}
      renderItem={({ item }) => <MealItem meal={item} />}
      keyExtractor={(item) => item.id}
      style={styles.container}
    />
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
