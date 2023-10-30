import { CATEGORIES, MEALS } from "../data/test-data";

import { useLayoutEffect } from "react";

import MealsList from "../components/MealList/MealsList";

function MealOverviewPage({ route, navigation }) {
  const { categoryId } = route.params;

  const currentMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useLayoutEffect(() => {
    const categotyTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    )?.title;

    navigation.setOptions({
      title: categotyTitle,
    });
  }, [navigation, categoryId]);

  return <MealsList currentMeals={currentMeals} />;
}

// #351401
// #3f2f25
export default MealOverviewPage;
