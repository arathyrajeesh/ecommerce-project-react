import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoutes from "./hooks/useProtectedRoutes";
import "./App.css";
import Spinner from "./components/Spinner";
import ErrorBoundary from './components/ErrorBoundary';
import ListingPage from "./components/ListingPage";
import ProductOverviewModal from "./components/Overview";
import ProductView from "./components/ProductDetails";

const Homepage = lazy(() => import("./pages/Homepage"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ProductDetails = lazy(() => import("./components/ProductDetails")); 
const Cart = lazy(() => import("./components/Cart"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const UserProfile = lazy(() => import("./components/User"));
const Logout = lazy(() => import("./components/Logout"));
const ForgotPassword = lazy(() => import("./components/ForgetPassword"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/shop" element={<ListingPage />} />
              <Route path="/test-list" element={<ListingPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products/:id" element={<ProductView />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/user" element={<UserProfile />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/overview/:id" element={<ProductOverviewModal />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
