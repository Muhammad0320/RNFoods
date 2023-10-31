import { useLayoutEffect } from "react";
import Button from "../components/Button";
import { MEALS } from "../data/test-data";
import List from "../components/MealDetails/List";
import MealDetails from "../components/MealDetails";
import { useDispatch, useSelector } from "react-redux";
import Subtitle from "../components/MealDetails/subtitle";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import {
  addToFavouriteMeals,
  deleteFromFavouriteMeals,
} from "../store/redux/favouriteSlice";

function MealDetailsPage({ route, navigation }) {
  const { id } = route.params;

  // const { ids, addFavourite, removeFavourite } = useFavourite();

  const ids = useSelector((state) => state.favourite.ids);

  const dispatch = useDispatch();

  const mealIsFavoiurite = ids?.includes(id);

  const handleClickHeaderButton = () => {
    if (mealIsFavoiurite) {
      dispatch(deleteFromFavouriteMeals({ id }));
    } else {
      dispatch(addToFavouriteMeals({ id }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Button
            onPress={handleClickHeaderButton}
            color={"white"}
            name={mealIsFavoiurite ? "star" : "star-outline"}
          />
        );
      },
    });
  });

  const {
    title,
    affordability,
    imageUrl,
    steps,
    duration,

    ingredients,
    complexity,
  } = MEALS.find((meal) => meal.id === id);

  return (
    <ScrollView style={styles.rootScreen}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <Text style={styles.title}> {title} </Text>

      <MealDetails
        affordability={affordability}
        duration={duration}
        complexity={complexity}
        style={styles.detailsColor}
      />

      <View style={styles.container}>
        <View style={styles.listContainer}>
          <Subtitle> Ingredient </Subtitle>

          <List data={ingredients} />

          <Subtitle> Steps </Subtitle>

          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsPage;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  container: {
    flex: 1,
    alignItems: "center",
  },

  image: {
    height: 350,
    width: "100%",
  },

  detailsColor: {
    color: "white",
  },

  listContainer: {
    width: "80%",
    marginBottom: 40,
  },

  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",

    marginVertical: 16,
  },
});
