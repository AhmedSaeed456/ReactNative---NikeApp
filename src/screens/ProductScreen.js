import { StyleSheet, View, Image, FlatList, Pressable } from "react-native";
import products from "../data/products";
import { useNavigation } from "@react-navigation/native";

const ProductScreen = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={products}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            navigation.navigate("Product Details", {
              productIndex: index,
            });
          }}
          style={{ width: "50%", padding: 1 }}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});
export default ProductScreen;
