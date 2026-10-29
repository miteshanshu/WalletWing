import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { applyPhotos } from "../src/utils/photos.js";

const data = JSON.parse(readFileSync("db.json", "utf8")).productData;
const products = (catalog) =>
  catalog.flatMap((c) => c.items.flatMap((s) => s.products));

test("every catalogue product gets a local image that exists", () => {
  const mapped = products(applyPhotos(data));
  assert.equal(mapped.length, products(data).length);
  for (const p of mapped) {
    assert.match(p.catImg, /^\/images\/generated\/\d+\.webp$/, `id ${p.id}`);
    assert.deepEqual(p.productImages, [p.catImg]);
    assert.ok(existsSync(`public${p.catImg}`), `missing file for id ${p.id}`);
  }
});

test("mapping keeps names, brands and prices and does not mutate input", () => {
  const before = JSON.stringify(data);
  const mapped = products(applyPhotos(data));
  const original = products(data);
  mapped.forEach((p, i) => {
    for (const k of ["id", "productName", "brand", "price", "oldPrice"])
      assert.equal(p[k], original[i][k]);
  });
  assert.equal(JSON.stringify(data), before);
});

test("products without a generated image keep their own image", () => {
  const extra = [
    { cat_name: "X", items: [{ cat_name: "Y", products: [{ id: 99999, catImg: "a.jpg", productImages: ["a.jpg"] }] }] },
  ];
  assert.equal(products(applyPhotos(extra))[0].catImg, "a.jpg");
});
