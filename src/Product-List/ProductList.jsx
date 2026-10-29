import { useEffect, useMemo, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiSliders, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Card from "../components/Card/Card";
import { allProducts, money, slugify } from "../utils/catalog";

export default function ProductList() {
  const data = useSelector((state) => state.data.data);
  const { category, subcategory } = useParams();
  const [params] = useSearchParams();
  const query = (params.get("q") || "").trim();
  const [brand, setBrand] = useState("");
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState("name");
  const [pageSize, setPageSize] = useState(12);
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const products = useMemo(
    () =>
      allProducts(data).filter(
        (product) =>
          (!category || slugify(product.category) === slugify(category)) &&
          (!subcategory ||
            slugify(product.subcategory) === slugify(subcategory)) &&
          (!query ||
            `${product.productName} ${product.brand}`
              .toLowerCase()
              .includes(query.toLowerCase())),
      ),
    [data, category, subcategory, query],
  );
  const highest = Math.max(
    0,
    ...products.map((product) => Number(product.price)),
  );
  const priceLimit = maxPrice == null ? highest : Math.min(maxPrice, highest);
  const brands = [
    ...new Map(
      products.map((product) => [product.brand.toLowerCase(), product.brand]),
    ).values(),
  ].sort();
  const filtered = products
    .filter(
      (product) =>
        (!brand || product.brand.toLowerCase() === brand.toLowerCase()) &&
        Number(product.price) <= priceLimit,
    )
    .sort((a, b) => {
      if (sort === "price-up") return a.price - b.price;
      if (sort === "price-down") return b.price - a.price;
      if (sort === "rating") return (b.rating || 0) - (a.rating || 0);
      if (sort === "name-desc")
        return b.productName.localeCompare(a.productName);
      return a.productName.localeCompare(b.productName);
    });
  useEffect(() => {
    setBrand("");
    setMaxPrice(null);
    setPage(1);
  }, [category, subcategory, query]);
  useEffect(() => setPage(1), [brand, maxPrice, sort, pageSize]);
  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, pages);
  const visible = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const title = query
    ? `Results for “${query}”`
    : (subcategory || category || "All products").replace(/-/g, " ");
  const clear = () => {
    setBrand("");
    setMaxPrice(null);
    setPage(1);
  };
  return (
    <div className="ww-container ww-page">
      <div className="ww-page-heading">
        <div>
          <p className="ww-eyebrow">
            <Link to="/">Home</Link> / Shop
          </p>
          <h1 className="capitalize">{title}</h1>
          <p className="ww-muted">
            {filtered.length} {filtered.length === 1 ? "product" : "products"}{" "}
            to explore
          </p>
        </div>
      </div>
      <div className="ww-catalog-layout">
        <button
          className="ww-button ww-button-outline ww-filter-toggle"
          onClick={() => setShowFilters(!showFilters)}
          aria-expanded={showFilters}
          aria-controls="catalog-filters"
        >
          <FiSliders />
          {showFilters ? "Hide filters" : "Filter products"}
        </button>
        <aside
          id="catalog-filters"
          className={`ww-filters ${showFilters ? "is-open" : ""}`}
          aria-label="Product filters"
        >
          <div className="ww-row">
            <h2>Filters</h2>
            <button className="ww-text-button" onClick={clear}>
              Reset
            </button>
          </div>
          <label htmlFor="brand-filter">Brand</label>
          <select
            id="brand-filter"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          >
            <option value="">All brands</option>
            {brands.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
          <label htmlFor="price-filter">
            Maximum price <strong>{money(priceLimit)}</strong>
          </label>
          <input
            id="price-filter"
            type="range"
            min="0"
            max={highest || 1}
            disabled={!highest}
            value={priceLimit}
            onChange={(event) => setMaxPrice(Number(event.target.value))}
          />
          <div className="ww-row ww-muted">
            <span>₹0</span>
            <span>{money(highest)}</span>
          </div>
          <h3>Categories</h3>
          <Link className={!category ? "active" : ""} to="/product">
            All products
          </Link>
          {data.map((item) => (
            <Link
              className={
                slugify(item.cat_name) === slugify(category) ? "active" : ""
              }
              key={item.cat_name}
              to={`/${slugify(item.cat_name)}`}
            >
              {item.cat_name}
            </Link>
          ))}
        </aside>
        <section className="ww-catalog-results" aria-label="Products">
          <div className="ww-catalog-toolbar">
            <span className="ww-muted" aria-live="polite">
              {filtered.length
                ? `${(currentPage - 1) * pageSize + 1}–${Math.min(currentPage * pageSize, filtered.length)} of ${filtered.length}`
                : "No matches"}
            </span>
            <div className="ww-sort-controls">
              <label>
                Show
                <select
                  value={pageSize}
                  onChange={(event) => setPageSize(Number(event.target.value))}
                >
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                  <option value={48}>48</option>
                </select>
              </label>
              <label>
                Sort by
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                >
                  <option value="name">Name: A–Z</option>
                  <option value="name-desc">Name: Z–A</option>
                  <option value="price-up">Price: low to high</option>
                  <option value="price-down">Price: high to low</option>
                  <option value="rating">Top rated</option>
                </select>
              </label>
            </div>
          </div>
          {(brand || maxPrice != null) && (
            <button className="ww-filter-chip" onClick={clear}>
              Clear filters <FiX />
            </button>
          )}
          {visible.length ? (
            <div className="ww-product-grid">
              {visible.map((product) => (
                <Card key={product.id} productData={product} />
              ))}
            </div>
          ) : (
            <div className="ww-empty">
              <FiSearchEmpty />
              <h2>No products found</h2>
              <p>Try another search or clear your filters.</p>
              <button className="ww-button ww-button-outline" onClick={clear}>
                Clear filters
              </button>
              <Link className="ww-text-button" to="/product">
                Browse all products
              </Link>
            </div>
          )}
          {pages > 1 && (
            <nav className="ww-pagination" aria-label="Product pages">
              <button
                aria-label="Previous page"
                disabled={currentPage === 1}
                onClick={() => setPage(currentPage - 1)}
              >
                <FiChevronLeft />
              </button>
              <span>
                Page {currentPage} of {pages}
              </span>
              <button
                aria-label="Next page"
                disabled={currentPage === pages}
                onClick={() => setPage(currentPage + 1)}
              >
                <FiChevronRight />
              </button>
            </nav>
          )}
        </section>
      </div>
    </div>
  );
}
function FiSearchEmpty() {
  return <FiSliders size={32} aria-hidden="true" />;
}
