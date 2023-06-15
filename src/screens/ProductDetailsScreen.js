import {
  StyleSheet,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import products from "../data/products";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);
  const dispatch = useDispatch();
  const btnColor = useSelector((state) => state.cart.color);

  const { width } = useWindowDimensions();

  const addToCart = () => {
    dispatch(cartSlice.actions.addCartItem({ product }));
  };
  return (
    <View>
      <ScrollView>
        <View>
          <View
            style={{
              borderColor: "#A10D0D",
              borderWidth: 0,
              borderRadius: 20,
            }}
          >
            <FlatList
              data={product.images}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: item }}
                  style={{
                    width: width,
                    aspectRatio: 1,
                    borderRadius: 70,
                  }}
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={true}
              pagingEnabled
            />
          </View>
          <View style={{ padding: 20 }}>
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>{product.price} $</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>
        </View>
      </ScrollView>
      <Pressable
        style={[
          styles.button,
          { width: width - width / 8, backgroundColor: btnColor },
        ]}
        onPress={() => {
          addToCart();
        }}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "500",
    marginVertical: 10,
    color: "#A10D0D",
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "300",
    marginBottom: 50,
  },
  button: {
    backgroundColor: "black",
    position: "absolute",
    bottom: 0,
    // width: 200,
    alignSelf: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
