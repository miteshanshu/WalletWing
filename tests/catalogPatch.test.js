import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { applyCatalogPatch, additions } from "../src/utils/catalogPatch.js";

const data = JSON.parse(readFileSync("db.json", "utf8")).productData;
const products = (catalog) =>
  catalog.flatMap((c) =>
    c.items.flatMap((s) => s.products.map((p) => ({ ...p, sub: s.cat_name, cat: c.cat_name }))),
  );

test("patch hides the duplicate TV, keeps every other id and adds new items", () => {
  const out = products(applyCatalogPatch(data));
  const ids = out.map((p) => p.id);
  assert.ok(!ids.includes(41));
  assert.ok(!ids.includes(59));
  console.log("UNIQUE VISIBLE", out.length, "ids", new Set(ids).size);
  assert.equal(new Set(ids).size, ids.length);
  assert.equal(out.length, 77 - 2 + additions.length);
});

test("no filler text, no old price or discount, one real size per pack", () => {
  const out = products(applyCatalogPatch(data));
  for (const p of out) {
    assert.ok(!/lorem ipsum/i.test(p.description), `lorem in ${p.id}`);
    assert.ok(p.description.length > 25, `short description ${p.id}`);
    assert.equal(p.oldPrice, undefined, `oldPrice on ${p.id}`);
    assert.ok(p.price > 0);
    if (p.cat === "Groceries" || p.cat === "Fresh")
      assert.equal(p.weight.length, 1, `size options on ${p.id}`);
  }
});

test("patch is idempotent and leaves input untouched", () => {
  const before = JSON.stringify(data);
  const once = applyCatalogPatch(data);
  const twice = applyCatalogPatch(once);
  assert.equal(products(once).length, products(twice).length);
  assert.equal(JSON.stringify(data), before);
});

test("no product carries a seed rating", () => {
  assert.ok(products(applyCatalogPatch(data)).every((p) => p.rating === undefined));
});
