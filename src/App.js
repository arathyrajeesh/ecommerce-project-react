import React from 'react';
import Header from '../src/components/Header'
import './App.css'; 
import { BrowserRouter, Route, Routes }  from 'react-router-dom'
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './components/Login';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import SignInPage from './components/SigninPage';
import ProductList from './components/ProductList';
import Overview from './components/Overview';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/'element={<Homepage/>}/>
            <Route path='/shop' element={<ProductList/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path="/signup" element={<SignInPage/>} />
            <Route path='/overview' element = {<Overview/>} />
            <Route path='/cart' element = {<Cart/>}/>
            {/* <Route path='*'element={<NotFound/>}/> */}
        </Routes>
        <Footer/>
        </BrowserRouter>
  );
}

export default App;