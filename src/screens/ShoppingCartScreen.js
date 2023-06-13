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

const ShoppingCartTotal = () => (
  <View style={styles.totalContiner}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>410,00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>16,50 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>426,50 US$</Text>
    </View>
  </View>
);

const ShoppingCartScreen = () => {
  const { width } = useWindowDimensions();

  return (
    <View>
      <FlatList
        style={{ width, marginTop: 20 }}
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={<ShoppingCartTotal />}
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
    position: "relative",
    bottom: 10,
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
