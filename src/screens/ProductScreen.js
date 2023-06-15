import { StyleSheet, View, Image, FlatList, Pressable } from "react-native";
import products from "../data/products";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { productsSlice } from "../store/productSlice";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const products = useSelector((state) => state.products.products); //get state from products slice

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => (
        <Pressable
          onPress={() => {
            dispatch(productsSlice.actions.setSelectedProduct(item.id));

            navigation.navigate("Product Details");
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
