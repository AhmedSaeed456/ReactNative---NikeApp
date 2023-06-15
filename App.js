import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShoppingCartScreen from "./src/screens/ShoppingCartScreen";
import ProductScreen from "./src/screens/ProductScreen";
import ProductDetailsScreen from "./src/screens/ProductDetailsScreen";

import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Navigation from "./src/navigation";
import { Provider } from "react-redux";
import { store } from "./src/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    <Provider store={store}>
      <Navigation />
    </Provider>
    // {/* </View> */}
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
