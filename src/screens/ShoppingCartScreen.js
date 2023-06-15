import {
  StyleSheet,
  View,
  Image,
  FlatList,
  Text,
  useWindowDimensions,
  Pressable,
} from "react-native";
import CartListItem from "../components/CartListItem";
import cart from "../data/cart";
import { useSelector, useDispatch } from "react-redux";
import { cartSlice } from "../store/cartSlice";

const ShoppingCartTotal = ({ totalPrice, deliveryPrice }) => (
  <View style={styles.totalContiner}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>{totalPrice} US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>{deliveryPrice} US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>
        {parseInt(parseInt(totalPrice) + parseInt(deliveryPrice))} US$
      </Text>
    </View>
  </View>
);

const ShoppingCartScreen = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const deliveryPrice = useSelector((state) => state.cart.deliveryFee);
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const { width } = useWindowDimensions();

  return (
    <View>
      <FlatList
        style={{ width, marginTop: 20 }}
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={
          <ShoppingCartTotal
            totalPrice={totalPrice}
            deliveryPrice={deliveryPrice}
          />
        }
      />
      <Pressable
        style={[styles.button, { width: width - width / 8 }]}
        onPress={() => {
          console.warn("clicked");
        }}
      >
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  totalContiner: {
    margin: 20,
    paddingTop: 10,
    borderColor: "gainsboro",
    borderTopWidth: 1,
    marginBottom: 70,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
  textBold: {
    fontSize: 16,
    fontWeight: "500",
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
export default ShoppingCartScreen;
