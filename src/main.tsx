import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/navbar/navbar';
import ProductsDetails from './components/product/ProductDetails';
import ProductsPage from './pages/products';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import HomePage from './pages/home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/products" element={<ProductsPage />} />
          {/* Example of a nested route */}
          <Route path="/products/:productId"  element={<ProductsDetails title={''} description={''} colors={[]} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);