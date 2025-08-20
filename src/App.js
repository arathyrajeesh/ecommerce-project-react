import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoutes from "./hooks/useProtectedRoutes";
import "./App.css";
import Spinner from "./components/Spinner";
import ErrorBoundary from './components/ErrorBoundary';

const Homepage = lazy(() => import("./pages/Homepage"));
const Blog = lazy(() => import("./pages/Blog"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ProductList = lazy(() => import("./components/ProductList"));
const Overview = lazy(() => import("./components/Overview"));
const Cart = lazy(() => import("./components/Cart"));
const Another = lazy(() => import("./components/Another"));
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const UserProfile = lazy(() => import("./components/User"));
const Logout = lazy(() => import("./components/Logout"));
const ForgotPassword = lazy(() => import("./components/ForgetPassword"));

function App() {
  return (
    <>
    <ErrorBoundary>
      <Header />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/shop" element={<ProductList />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/another-page" element={<Another />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/user" element={<UserProfile />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </Suspense>
      <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
