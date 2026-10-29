import bundledCatalog from "../../db.json";
import { applyPhotos } from "./photos";
import { applyCatalogPatch } from "./catalogPatch";

export const catalog = applyPhotos(applyCatalogPatch(bundledCatalog.productData));
export const slugify = (value = "") =>
  String(value).trim().replace(/\s+/g, "-").toLowerCase();
export const allProducts = (data = catalog) =>
  data.flatMap((category) =>
    category.items.flatMap((section) =>
      section.products.map((product) => ({
        ...product,
        brand: String(product.brand || "Unbranded").trim(),
        category: category.cat_name,
        subcategory: section.cat_name,
      })),
    ),
  );
export const money = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(Number(value) || 0);
export const isAvailable = (product) =>
  product?.inStock !== false && product?.stockStatus !== "Out of Stock";
export const savedProduct = (product) => ({
  ...product,
  name: product.productName,
  image: product.catImg,
  inStock: isAvailable(product),
  stockStatus: isAvailable(product) ? "In Stock" : "Out of Stock",
});
export const validCatalog = (value) =>
  Array.isArray(value) &&
  value.length > 0 &&
  value.every(
    (category) =>
      typeof category.cat_name === "string" &&
      Array.isArray(category.items) &&
      category.items.every(
        (section) =>
          typeof section.cat_name === "string" &&
          Array.isArray(section.products) &&
          section.products.every(
            (product) =>
              product.id != null &&
              typeof product.productName === "string" &&
              Number.isFinite(Number(product.price)) &&
              Number(product.price) >= 0 &&
              Array.isArray(product.productImages) &&
              Array.isArray(product.weight),
          ),
      ),
  );
