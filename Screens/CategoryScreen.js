import { FlatList } from "react-native";
import { CATEGORIES } from "../data/test-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoryScreen({ navigation }) {
  const handlePress = (id) => {
    navigation.navigate("MealOverViewsPage", { categoryId: id });
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item: { title, color, id } }) => (
        <CategoryGridTile
          color={color}
          title={title}
          onPress={() => handlePress(id)}
        />
      )}
    />
  );
}

export default CategoryScreen;
