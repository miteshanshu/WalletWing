import test from "node:test";
import assert from "node:assert/strict";
import reducer, {
  addToCart,
  applyPromoCode,
  increaseQuantityInCart,
  decreaseQuantityInCart,
  removeItem,
  clearCart,
  addTotal,
} from "../src/store/cartSlice.js";
import { cartTotals, normalizeCart } from "../src/utils/cart.js";
import compareReducer, { addToCompare } from "../src/store/productSlice.js";
const product = { id: 1, productName: "Test product", price: 20 };
const add = (state, item = product, quantity = 1) =>
  reducer(state, addToCart({ product: item, quantity }));

test("a fresh cart and direct checkout have finite, identical totals", () => {
  const state = add(undefined);
  assert.deepEqual(cartTotals(state.cart), {
    subTotal: 20,
    tax: 2,
    delivery: 100,
    discount: 0,
    total: 122,
  });
  assert.equal(state.total, 122);
  assert.equal(reducer(undefined, { type: "init" }).total, 0);
});
test("coupon works without visiting the cart first and never compounds", () => {
  let state = reducer(add(undefined), applyPromoCode(" promo10 "));
  assert.equal(state.total, 109.8);
  state = reducer(state, applyPromoCode("PROMO10"));
  state = reducer(state, addTotal(999999));
  assert.equal(state.total, 109.8);
  state = reducer(state, increaseQuantityInCart(product));
  assert.equal(state.total, 129.6);
  assert.equal(state.discount, 14.4);
});
test("different variants remain separate and only the chosen variant changes", () => {
  const small = { ...product, selectedWeight: 50 };
  const large = { ...product, selectedWeight: 500 };
  let state = add(add(undefined, small), large, 2);
  state = reducer(state, increaseQuantityInCart(small));
  assert.deepEqual(
    state.cart.map((item) => item.quantity),
    [2, 2],
  );
  state = reducer(state, removeItem(large));
  assert.equal(state.cart.length, 1);
  assert.equal(state.cart[0].selectedWeight, 50);
  assert.equal(state.subTotal, 40);
});
test("invalid additions cannot corrupt totals", () => {
  for (const quantity of [0, -1, NaN, Infinity, "bad"])
    assert.equal(add(undefined, product, quantity).cart.length, 0);
  for (const price of [-1, NaN, Infinity, "bad"])
    assert.equal(add(undefined, { ...product, price }).cart.length, 0);
  assert.equal(add(undefined, { ...product, inStock: false }).cart.length, 0);
});
test("quantities stay between 1 and 99", () => {
  let state = add(undefined, product, 1000);
  assert.equal(state.cart[0].quantity, 99);
  state = reducer(state, increaseQuantityInCart(product));
  assert.equal(state.cart[0].quantity, 99);
  state = add(undefined);
  state = reducer(state, decreaseQuantityInCart(product));
  assert.equal(state.cart[0].quantity, 1);
});
test("decimal prices round predictably and delivery updates at the threshold", () => {
  const state = add(undefined, { ...product, price: 0.1 }, 3);
  assert.equal(state.subTotal, 0.3);
  assert.equal(state.total, 100.33);
  assert.equal(
    cartTotals([{ ...product, price: 500, quantity: 1 }]).delivery,
    0,
  );
  assert.equal(
    cartTotals([{ ...product, price: 499.99, quantity: 1 }]).delivery,
    100,
  );
});
test("removing the last product clears the coupon and all totals", () => {
  const state = reducer(
    reducer(add(undefined), applyPromoCode("PROMO10")),
    removeItem(product),
  );
  assert.equal(state.total, 0);
  assert.equal(state.subTotal, 0);
  assert.equal(state.discount, 0);
  assert.equal(state.promoCodeApplied, false);
  assert.equal(state.promoCode, "");
});
test("old persisted cart data is normalized without trusting stale totals", () => {
  const cart = normalizeCart([
    { ...product, price: "20", quantity: "2", total: null },
    { ...product, quantity: 1 },
    { id: 2, price: "bad" },
  ]);
  assert.equal(cart.length, 1);
  assert.equal(cart[0].quantity, 3);
  assert.equal(cart[0].total, 60);
  assert.equal(cartTotals(cart).total, 166);
});
test("clear cart resets everything", () => {
  const state = reducer(add(undefined), clearCart());
  assert.equal(state.cart.length, 0);
  assert.equal(state.total, 0);
  assert.equal(state.subTotal, 0);
});
test("comparison enforces its limit in the reducer", () => {
  let state;
  for (let id = 1; id <= 6; id++)
    state = compareReducer(state, addToCompare({ id }));
  assert.equal(state.productItems.length, 4);
  state = compareReducer(state, addToCompare({ id: 1 }));
  assert.equal(state.productItems.length, 4);
});
