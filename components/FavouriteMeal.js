import { StyleSheet, Text, View } from "react-native";
import MealsList from "./MealList/MealsList";
import { MEALS } from "../data/test-data";
import { useFavourite } from "../store/context/FavouriteContext";

function FavouriteMeal() {
  const { ids } = useFavourite();

  const currentMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (!currentMeals.length) {
    return (
      <View style={styles.rootScreen}>
        <Text style={styles.text}> You have no favourite meals yet </Text>
      </View>
    );
  }

  return <MealsList currentMeals={currentMeals} />;
}

export default FavouriteMeal;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },

  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 700,
  },
});
