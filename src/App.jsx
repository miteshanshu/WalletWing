import { Component, lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
  useParams,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { DarkModeProvider } from "./Common/DarkModeProvider";
import { fetchData } from "./store/dataSlice";
import { auth } from "./store/firebaseConfig";
import { publicUser, setAuthUser } from "./store/authSlice";
import Home from "./Pages/Home";
const ProductList = lazy(() => import("./Product-List/ProductList"));
const ProductDetailsPage = lazy(() => import("./Pages/ProductDetailsPage"));
const Cart = lazy(() => import("./Pages/Cart"));
const Checkout = lazy(() => import("./Pages/Checkout"));
const Wishlist = lazy(() => import("./Pages/Wishlist"));
const Compare = lazy(() => import("./Pages/Compare"));
const Login = lazy(() => import("./Pages/Login"));
const SignUp = lazy(() => import("./Pages/SignUp"));
const ForgotPassword = lazy(() => import("./Pages/ForgetPassword"));
const ResetPassword = lazy(() => import("./Pages/change-password"));
const Account = lazy(() => import("./Pages/Account"));
const Order = lazy(() => import("./Pages/Order"));
const About = lazy(() => import("./Pages/About"));
const Contact = lazy(() => import("./Pages/ContactUs"));
const Guide = lazy(() => import("./Pages/ShopingGuide"));
const Policy = lazy(() => import("./Pages/PrivacyStatement"));
const Terms = lazy(() => import("./Pages/TermsAndConditions"));
const ErrorPage = lazy(() => import("./Pages/404Page"));
const Maintenance = lazy(() => import("./Pages/Maintainece"));
const Error500 = lazy(() => import("./Pages/505Page"));
class ErrorBoundary extends Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidUpdate(previous) {
    if (previous.locationKey !== this.props.locationKey && this.state.failed)
      this.setState({ failed: false });
  }
  render() {
    return this.state.failed ? (
      <div className="ww-empty">
        <h1>Something went wrong</h1>
        <p>Please reload this page or return to the shop.</p>
        <a className="ww-button" href="/">
          Return home
        </a>
      </div>
    ) : (
      this.props.children
    );
  }
}
function ProtectedRoute({ children }) {
  const { user, ready } = useSelector((state) => state.auth);
  const location = useLocation();
  if (!ready)
    return (
      <div className="ww-empty" role="status">
        Checking your session…
      </div>
    );
  return user ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
function LegacySearch() {
  const { legacySearch } = useParams();
  return (
    <Navigate
      replace
      to={`/product?q=${encodeURIComponent(legacySearch.replace(/-/g, " "))}`}
    />
  );
}
const legacy = (page) => <div className="ww-legacy-page">{page}</div>;
function Storefront() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname, location.search]);
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <ErrorBoundary locationKey={location.key}>
          <Suspense
            fallback={
              <div className="ww-empty" role="status">
                Loading…
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<ProductList />} />
              <Route
                path="/product/details/:productId"
                element={<ProductDetailsPage />}
              />
              <Route path="/product/:legacySearch" element={<LegacySearch />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/Order" element={<Order />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/forget-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
              <Route path="/about" element={legacy(<About />)} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/Guide" element={legacy(<Guide />)} />
              <Route path="/policy" element={legacy(<Policy />)} />
              <Route path="/terms" element={legacy(<Terms />)} />
              <Route path="/maintenance" element={legacy(<Maintenance />)} />
              <Route path="/error-500" element={legacy(<Error500 />)} />
              <Route path="/:category" element={<ProductList />} />
              <Route path="/:category/:subcategory" element={<ProductList />} />
              <Route path="*" element={legacy(<ErrorPage />)} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}
export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  useEffect(() => {
    if (!auth) {
      dispatch(setAuthUser(null));
      return;
    }
    return onAuthStateChanged(
      auth,
      (user) => dispatch(setAuthUser(publicUser(user))),
      () => dispatch(setAuthUser(null)),
    );
  }, [dispatch]);
  return (
    <DarkModeProvider>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <BrowserRouter>
        <Storefront />
      </BrowserRouter>
    </DarkModeProvider>
  );
}
