export const roundMoney = (value) =>
  Math.round((Number(value) + Number.EPSILON) * 100) / 100;
export const cartKey = (item) => `${item.id}:${item.selectedWeight ?? ""}`;
export const quantityOf = (value) =>
  Math.min(99, Math.max(1, Math.floor(Number(value) || 1)));
export function cartTotals(cart = [], promoCodeApplied = false) {
  const subTotal = roundMoney(
    cart.reduce(
      (sum, item) => sum + Number(item.price) * quantityOf(item.quantity),
      0,
    ),
  );
  const tax = roundMoney(subTotal * 0.1);
  const delivery = cart.length && subTotal < 500 ? 100 : 0;
  const discount = promoCodeApplied
    ? roundMoney((subTotal + tax + delivery) * 0.1)
    : 0;
  return {
    subTotal,
    tax,
    delivery,
    discount,
    total: roundMoney(subTotal + tax + delivery - discount),
  };
}
export function normalizeCart(items = []) {
  const result = [];
  for (const item of Array.isArray(items) ? items : []) {
    if (
      item?.id == null ||
      !Number.isFinite(Number(item.price)) ||
      Number(item.price) < 0
    )
      continue;
    const normalized = {
      ...item,
      price: Number(item.price),
      quantity: quantityOf(item.quantity),
    };
    const existing = result.find(
      (other) => cartKey(other) === cartKey(normalized),
    );
    if (existing)
      existing.quantity = quantityOf(existing.quantity + normalized.quantity);
    else result.push(normalized);
  }
  return result.map((item) => ({
    ...item,
    total: roundMoney(item.price * item.quantity),
  }));
}
