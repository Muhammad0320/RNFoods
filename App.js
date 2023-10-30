import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import CategoryScreen from "./Screens/CategoryScreen";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealOverviewPage from "./Screens/MealOverviewPage";
import MealDetailsPage from "./Screens/MealDetailsPage";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouriteMeal from "./components/FavouriteMeal";

import { Ionicons } from "@expo/vector-icons";
import FavouriteContextProvider from "./store/context/FavouriteContext";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
  const DrawerNavigation = () => {
    return (
      <Drawer.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerTintColor: "#fff",

          headerStyle: { backgroundColor: "#351401" },
          sceneContainerStyle: { backgroundColor: "#3f2f25" },
          drawerContentStyle: { backgroundColor: "#351401" },
          drawerActiveTintColor: "#351401",
          drawerInactiveTintColor: "#fff",

          drawerActiveBackgroundColor: "#e4baa1",
        }}
      >
        <Drawer.Screen
          name="Favourites"
          component={FavouriteMeal}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Categories"
          component={CategoryScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  };

  return (
    <>
      <FavouriteContextProvider>
        <StatusBar style="light" />

        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTintColor: "#fff",
              headerStyle: { backgroundColor: "#351401" },
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigation}
              options={{ title: "All Categories", headerShown: false }}
            />
            <Stack.Screen
              name="MealOverViewsPage"
              component={MealOverviewPage}
            />
            <Stack.Screen name="MealDetailPage" component={MealDetailsPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
