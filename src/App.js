import React from 'react';
import Header from '../src/components/Header'
import './App.css'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './components/Login';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Overview from './components/Overview';
import Cart from './components/Cart';
import Another from './components/Another';
import Register from './components/Register';
import UserProfile from './components/User';
import Logout from './components/Logout';
import ProtectedRoutes from './hooks/useProtectedRoutes';


function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route element={<ProtectedRoutes/>}>
                <Route path='/shop' element={<ProductList/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/overview' element = {<Overview/>}/>
                <Route path='/cart' element = {<Cart/>}/>
                <Route path='/another-page' element = {<Another/>}/>
                <Route path='/user' element = {<UserProfile/>}/>
                <Route path='/logout' element = {<Logout/>}/>
            </Route>

        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;