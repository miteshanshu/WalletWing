import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  subTotal: 0,
  discount: 0,
  promoCode: '',
  promoCodeApplied: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const index = state.cart.findIndex((item) => item.id === product.id);
      if (index >= 0) {
        state.cart[index].quantity += quantity;
        state.cart[index].total = state.cart[index].quantity * product.price;
      } else {
        state.cart.push({
          ...product,
          quantity,
          total: product.price * quantity,
        });
      }
      state.subTotal += product.price * quantity;
    },
    increaseQuantityInCart: (state, action) => {
      const product = action.payload;
      const index = state.cart.findIndex((item) => item.id === product.id);
      if (index >= 0) {
        state.cart[index].quantity += 1;
        state.cart[index].total = state.cart[index].quantity * product.price;
        state.subTotal += product.price;
      }
    },
    decreaseQuantityInCart: (state, action) => {
      const product = action.payload;
      const index = state.cart.findIndex((item) => item.id === product.id);
      if (index >= 0 && state.cart[index].quantity > 1) {
        state.cart[index].quantity -= 1;
        state.cart[index].total = state.cart[index].quantity * product.price;
        state.subTotal -= product.price;
      }
    },
    removeItem: (state, action) => {
      const product = action.payload;
      const index = state.cart.findIndex((item) => item.id === product.id);
      if (index >= 0) {
        state.subTotal -= state.cart[index].total;
        state.cart.splice(index, 1);
      }
    },
    applyPromoCode: (state, action) => {
      const promoCode = action.payload;
      if (!state.promoCodeApplied && promoCode === 'PROMO10') {
        state.discount = state.total * 0.1;
        state.total -= state.discount;
        state.promoCode = promoCode;
        state.promoCodeApplied = true;
      }
    },
addTotal: (state, action) => {
  state.total = action.payload;
  if (state.promoCodeApplied && state.promoCode === 'PROMO10') {
    state.discount = state.total * 0.1;
    state.total -= state.discount;
  }
},

    clearCart: (state) => {
      state.cart = [];
      state.discount = 0;
      state.quantity = 0;
      state.promoCode = '';
      state.total = 0;
      state.subTotal = 0;
      state.promoCodeApplied = false;
    },
  },
});

export const {
  addToCart,
  removeItem,
  clearCart,
  addTotal,
  applyPromoCode,
  increaseQuantityInCart,
  decreaseQuantityInCart,
} = cartSlice.actions;
export default cartSlice.reducer;