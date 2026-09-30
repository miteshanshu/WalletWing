# WalletWing

A storefront demo built with React and Vite. It has product browsing, cart and wishlist state, product comparison, and Firebase sign-in. It is not a complete online store: the checkout screen does not take payments or create orders.

## What's in the code

- Product data fetched from a hosted JSON endpoint on npoint.io.
- Category and subcategory pages, text search, brand and price filters, sorting and pagination.
- Product details with image selection, quantity controls and links to cart, wishlist and comparison.
- Cart quantity changes, item removal, totals and a `PROMO10` discount rule.
- Cart, wishlist and authentication state persisted in the browser with Redux Persist.
- Firebase email/password sign-up and sign-in, Google sign-in, sign-out and password-reset emails.
- Light and dark themes, stored in the browser.
- Checkout, account, contact and other storefront screens.

## What's still a demo

The billing and shipping forms are UI only. The payment choices and logos do not connect to a payment service. The "Place an Order" link does not submit anything.

There is no order API or order database in this repo. The account page displays sample orders, and the separate order page is empty. Account-edit forms and the set-new-password screen are not connected to Firebase updates. The latter only checks whether the two entered passwords match.

Product ratings and reviews are display content, not a saved review system. Authentication is connected to Firebase, but it does not make the checkout or account screens a protected backend workflow.

## Stack

React 18, Vite, React Router, Redux Toolkit, Redux Persist, Firebase Authentication, Axios, Tailwind CSS and Material UI.

## Local setup

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

Product browsing also needs the JSON endpoint configured in `src/store/dataSlice.js`. It expects a response with a `productData` field. To use your own data, change that endpoint and keep the data shape the UI expects.

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
