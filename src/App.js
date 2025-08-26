import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";
import ErrorBoundary from "./components/ErrorBoundary"; 

import ProtectedRoutes from "./hooks/useProtectedRoutes";
import PublicLayout from "./layout/PublicLayout";
import AuthLayout from "./layout/AuthLayout";
import AdminLayout from "./layout/AdminLayout";
import ListingPage from "./components/ListingPage";
import UserProfile from "./components/User";
import DashBoard from "./components/DashBoard";
import AdminLogin from "./components/AdminLogin";

const Homepage = lazy(() => import("./pages/Homepage"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const ForgotPassword = lazy(() => import("./components/ForgetPassword"));
const Cart = lazy(() => import("./components/Cart"));
const ProductView = lazy(() => import("./components/ProductDetails"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<ListingPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductView />} />
            <Route path="/user" element={<UserProfile />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>

          <Route
            path="/admin/login"
            element={
              <ErrorBoundary>
                <AdminLogin />
              </ErrorBoundary>
            }
          />

          <Route
            element={
              <ProtectedRoutes adminOnly={true}>
                <AdminLayout />
              </ProtectedRoutes>
            }
          >
            <Route path="/admin/dashboard" element={<DashBoard />} />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
