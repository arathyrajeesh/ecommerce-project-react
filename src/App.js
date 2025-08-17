import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '../src/components/Header';
import Footer from './components/Footer';

import Homepage from './pages/Homepage';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductList from './components/ProductList';
import Overview from './components/Overview';
import Cart from './components/Cart';
import Another from './components/Another';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/User';
import Logout from './components/Logout';
import ProtectedRoutes from './hooks/useProtectedRoutes';

import './App.css';
import ForgotPassword from './components/ForgetPassword';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ProductList />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/another-page" element={<Another />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/user" element={<UserProfile />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
