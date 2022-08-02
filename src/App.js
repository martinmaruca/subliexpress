import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBarIndex from './components/NavBar/NavBarIndex';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Clases from './components/Clases/Clases';
import BlogInicio from './components/Blog/BlogInicio';
import Blog from './components/Blog/Blog';
import Nosotoros from './components/Nosotros/Nosotros';
import Tienda from './components/Tienda/Tienda';
import Footer from './components/Footer/Footer';
import Entrada from './components/Entrada/Entrada';
import ItemDetailContarner from './components/ItemDetailContainer/ItemDetailContainer'; 
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import CartProvider from './components/Cart/CartContext';
import Cart from './components/Cart/Cart';



function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>   
          <NavBar /> 
          <Routes>
            <Route index element= {<>
              {/* <NavBarIndex /> */}
              <ItemListContainer /> 
              <Clases />
              <BlogInicio />
            </> }/>      
            <Route path="/nosotros" element={<Nosotoros />} /> 
            <Route path="/blog" element={<Blog />} /> 
            <Route path="/tienda" element={<Tienda />} /> 
            <Route path="/entrada" element={<Entrada />} />
            <Route path="item/:id" element={<ItemDetailContarner />} />
            <Route path="/forma/:name" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />  
        </CartProvider> 
      </BrowserRouter>
    </>
);
}

export default App;

