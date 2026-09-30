# WalletWing

I built WalletWing with React and Vite. You can browse products, use the cart and wishlist, compare products and sign in with Firebase.

It's a storefront demo. The checkout screens are in place; connecting payments and order creation is the next step. Right now, checkout doesn't take payments or create orders.

## What I added

- Product data fetched from a hosted JSON endpoint on npoint.io.
- Category and subcategory pages, text search, brand and price filters, sorting and pagination.
- Product details with image selection, quantity controls and links to cart, wishlist and comparison.
- Cart quantity changes, item removal, totals and a `PROMO10` discount rule.
- Cart, wishlist and authentication state persisted in the browser with Redux Persist.
- Firebase email/password sign-up and sign-in, Google sign-in, sign-out and password-reset emails.
- Light and dark themes, stored in the browser.
- Checkout, account, contact and other storefront screens.

## Demo scope and next steps

I added the billing and shipping forms, payment choices and logos as part of the checkout screens. Connecting a payment service is the next step. For now, the "Place an Order" link does not submit anything.

An order API and database are the next pieces to add. For now, I use sample orders on the account page, and the separate order page is empty. The account-edit forms and set-new-password screen are also ready for Firebase update wiring. Currently, that password screen only checks whether the two passwords match.

I use display content for ratings and reviews. Saving reviews would need its own system. Firebase handles authentication; protecting the checkout and account workflow through a backend is a separate next step.

## What I used

React 18, Vite, React Router, Redux Toolkit, Redux Persist, Firebase Authentication, Axios, Tailwind CSS and Material UI.

## Run it locally

Install the dependencies:

```bash
npm install
```

Create a `.env` file in the project root with the web-app configuration from your own Firebase project:

```dotenv
VITE_APP_API_KEY=
VITE_APP_AUTH_DOMAIN=
VITE_APP_PROJECT_ID=
VITE_APP_STORAGE_BUCKET=
VITE_APP_MESSAGING_SENDER_ID=
VITE_APP_APP_ID=
VITE_APP_MEASUREMENT_ID=
```

Enable Email/Password and Google sign-in in Firebase Authentication if you want to use those screens. Add your local or deployed hostname to Firebase's authorized domains.

Start the development server:

```bash
npm run dev
```

I fetch the products through the JSON endpoint in `src/store/dataSlice.js`. It expects a response with a `productData` field. If you want to use your own data, change the endpoint and keep the same data shape.

Vite exposes `VITE_` variables to browser code. Use Firebase web-app configuration here, not a service-account key or an admin credential.

## Commands

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Main files

- `src/App.jsx`: routes and shared layout.
- `src/Product-List/ProductList.jsx`: filtering, sorting and pagination.
- `src/store/`: product fetching, authentication, cart, wishlist and comparison state.
- `src/Pages/ProductDetailsPage.jsx`: product details and cart actions.
- `src/Pages/Checkout.jsx`: checkout layout and coupon UI.
- `src/Pages/Account.jsx`: account layout and sample orders.
