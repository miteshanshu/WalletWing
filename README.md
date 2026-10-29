# WalletWing

A responsive storefront demo built with React, Vite, Redux Toolkit and Firebase Authentication. The mobile update retains the original catalog and branding, with layouts for phones, tablets and desktop screens.

## Features

- Searchable catalog with category and subcategory routes, brand and price filters, sorting and pagination.
- Bundled product data available immediately, with a validated background refresh from the hosted catalog.
- Product details, image galleries, wishlist, quick view and comparison of up to four products.
- Variant-aware cart with bounded quantities, selection/removal, delivery, tax and `PROMO10` discounts.
- Guest demo checkout with required-field validation and local demo order history.
- Firebase email/password and Google sign-in, sign-up, sign-out and password-reset flows.
- Mobile navigation, keyboard labels, loading/empty/error states and persistent light/dark theme.

## Run locally

```bash
npm install
npm run dev
```

Shopping features work without Firebase. To enable authentication, copy `.env.example` to `.env` and supply the web-app configuration from your Firebase project. Enable Email/Password and Google providers, and add your deployment hostname to Firebase Authentication's authorized domains. Missing configuration disables authentication with an explanatory message instead of preventing the storefront from loading.

`VITE_` values are included in browser code. Use Firebase web-app configuration, never a service-account key or admin credential. Environment values must be present when building the static app.

The optional `VITE_CATALOG_URL` overrides the endpoint in `src/store/dataSlice.js`. Its response must contain a `productData` array matching `db.json`. Invalid or unavailable responses leave the bundled catalog usable.

## Demo behavior

- Checkout never charges a card, submits a real order or sends delivery/contact information. Use sample form details.
- Cart, wishlist and up to 20 completed demo baskets persist in this browser. Checkout contact and delivery details are not retained.
- Firebase owns the authentication session. User credentials and Firebase user objects are not copied into Redux Persist.
- The demo calculates 10% tax, ₹100 delivery below a ₹500 subtotal, and a `PROMO10` discount of 10% on subtotal plus tax and delivery. These are demo rules, not tax advice or a live merchant policy.
- The contact form opens a prefilled email draft in the visitor's own email app. It does not send automatically.
- Ratings, prices and stock come from sample catalog data. Several original external product-photo URLs return HTTP 404; those products display an explicit unavailable-image fallback. Replace `catImg` and `productImages` with maintained images before using this as a live store.

A production store would need a backend for inventory, orders, pricing validation and payment processing.

## Verification

```bash
npm test
npm run build
npm run preview
```

The Node tests cover cart calculations, variant separation, quantity bounds, discounts, stale persisted baskets and the comparison limit. Browser checks cover shopping layouts at 320, 390, 768 and 1280 CSS pixels, searching/filtering, cart changes and demo checkout. Firebase flows require your configured project and were not verified against a live account.

## Main files

- `src/App.jsx`: routes, session observer, shared layout and route error handling.
- `src/responsive.css`: responsive storefront styles.
- `src/Product-List/ProductList.jsx`: search, filters, sorting and pagination.
- `src/store/`: state, persistence, Firebase authentication and catalog refresh.
- `src/utils/cart.js`: cart normalization and monetary calculations.
- `src/Pages/Checkout.jsx`: validated local demo checkout.
- `tests/cart.test.js`: regression checks.
