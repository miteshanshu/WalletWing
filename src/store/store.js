import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import dataReducer from "./dataSlice";
import wishlistSlice from "./wishlistSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import searchResultSlice from "./searchResult";
import authReducer from "./authSlice";
import orderReducer from "./orderSlice";
import { normalizeCart, cartTotals } from "../utils/cart";

const rootReducer = combineReducers({
  data: dataReducer,
  wishlist: wishlistSlice,
  product: productSlice,
  cart: cartSlice,
  setSearchResult: searchResultSlice,
  auth: authReducer,
  orders: orderReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["wishlist", "cart", "orders"],
  migrate: async (state) => {
    if (!state) return state;
    const { auth: staleAuth, ...safeState } = state;
    if (safeState.cart) {
      safeState.cart.cart = normalizeCart(safeState.cart.cart);
      const applied =
        safeState.cart.cart.length > 0 &&
        safeState.cart.promoCodeApplied &&
        safeState.cart.promoCode === "PROMO10";
      Object.assign(safeState.cart, cartTotals(safeState.cart.cart, applied), {
        promoCodeApplied: !!applied,
        promoCode: applied ? "PROMO10" : "",
      });
    }
    return safeState;
  },
  blacklist: ["product", "data", "setSearchResult"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
