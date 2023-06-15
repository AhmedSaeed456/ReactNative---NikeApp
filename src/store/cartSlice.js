import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  deliveryFee: 15,
  freeDeliveryFrom: 200,
  color: "black",
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const newProduct = action.payload.product;
      const cartItem = state.items.find(
        (item) => item.product.id === newProduct.id
      );
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({ product: newProduct, quantity: 0 });
      }
    },
    changeQuantity: (state, action) => {
      const { productId, amount } = action.payload;
      const cartItem = state.items.find(
        (item) => item.product.id === productId
      );
      if (cartItem) {
        cartItem.quantity += amount;

        state.totalPrice += cartItem.product.price * amount;
        if (state.totalPrice < 0) {
          state.totalPrice = 0;
        }
      }
      if (cartItem.quantity < 0) {
        state.items = state.items.filter((item) => item != cartItem);
      }
      //   state.items.forEach((item) => {
      //     state.totalPrice += item.product.price * amount;
      //   });
      //   console.log(state.totalPrice);
    },
    // screenOpened: (state, action) => {
    //   const { amount } = action.payload;

    //   //   state.items.forEach((item) => {
    //   state.totalPrice += item.product.price * amount;
    //   //   });
    //   //   console.log(state.totalPrice);
    // },
  },
});
