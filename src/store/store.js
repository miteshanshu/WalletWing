import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import dataReducer from './dataSlice';
import wishlistSlice from './wishlistSlice';
import productSlice from './productSlice';
import cartSlice from './cartSlice';
import searchResultSlice from './searchResult';
import authReducer from './authSlice';

const rootReducer = combineReducers({
  data: dataReducer,
  wishlist: wishlistSlice,
  product: productSlice,
  cart: cartSlice,
  setSearchResult: searchResultSlice,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['wishlist', 'cart', 'auth'],
  blacklist: ['product', 'data', 'setSearchResult'],
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