import { createSlice } from "@reduxjs/toolkit";
import {
  cartKey,
  cartTotals,
  normalizeCart,
  quantityOf,
} from "../utils/cart.js";

const initialState = {
  cart: [],
  ...cartTotals(),
  promoCode: "",
  promoCodeApplied: false,
};
const updateTotals = (state) => {
  state.cart = normalizeCart(state.cart);
  if (!state.cart.length) {
    state.promoCode = "";
    state.promoCodeApplied = false;
  }
  Object.assign(state, cartTotals(state.cart, state.promoCodeApplied));
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const { product, quantity = 1 } = payload;
      if (
        !product ||
        product.inStock === false ||
        product.stockStatus === "Out of Stock" ||
        !Number.isFinite(Number(product.price)) ||
        Number(product.price) < 0 ||
        !Number.isFinite(Number(quantity)) ||
        Number(quantity) <= 0
      )
        return;
      const existing = state.cart.find(
        (item) => cartKey(item) === cartKey(product),
      );
      if (existing)
        existing.quantity = quantityOf(existing.quantity + Number(quantity));
      else state.cart.push({ ...product, quantity: quantityOf(quantity) });
      updateTotals(state);
    },
    increaseQuantityInCart(state, { payload }) {
      const item = state.cart.find(
        (item) => cartKey(item) === cartKey(payload),
      );
      if (item) item.quantity = quantityOf(item.quantity + 1);
      updateTotals(state);
    },
    decreaseQuantityInCart(state, { payload }) {
      const item = state.cart.find(
        (item) => cartKey(item) === cartKey(payload),
      );
      if (item) item.quantity = quantityOf(item.quantity - 1);
      updateTotals(state);
    },
    removeItem(state, { payload }) {
      state.cart = state.cart.filter(
        (item) => cartKey(item) !== cartKey(payload),
      );
      updateTotals(state);
    },
    applyPromoCode(state, { payload }) {
      if (
        state.cart.length &&
        String(payload).trim().toUpperCase() === "PROMO10"
      ) {
        state.promoCode = "PROMO10";
        state.promoCodeApplied = true;
        updateTotals(state);
      }
    },
    removePromoCode(state) {
      state.promoCode = "";
      state.promoCodeApplied = false;
      updateTotals(state);
    },
    // Retained for callers from older versions; totals always come from cart contents.
    addTotal(state) {
      updateTotals(state);
    },
    clearCart: () => initialState,
  },
});
export const {
  addToCart,
  increaseQuantityInCart,
  decreaseQuantityInCart,
  removeItem,
  applyPromoCode,
  removePromoCode,
  addTotal,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
