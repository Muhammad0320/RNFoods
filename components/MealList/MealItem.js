import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MealDetails from "../MealDetails";

function MealItem({ meal }) {
  const { title, imageUrl, duration, affordability, complexity, id } = meal;

  const navigation = useNavigation();

  return (
    <View style={styles.constainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.pressIos : null)}
        onPress={() => navigation.navigate("MealDetailPage", { id })}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <View>
            <Text style={styles.title}> {title} </Text>
          </View>

          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    margin: 16,
  },

  innerContainer: {
    borderRadius: 8,
  },

  image: {
    width: "100%",
    height: 200,
  },

  pressIos: {
    opacity: 0.6,
  },

  textContainer: {
    paddingVertical: 12,
  },

  title: {
    fontWeight: "bold",

    fontSize: 18,

    textAlign: "center",
  },
});

export default MealItem;
