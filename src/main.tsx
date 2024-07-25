import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/navbar/navbar';
import ProductsDetails from './components/product/ProductDetails';
import ProductsPage from './pages/products';
import ContactPage from './pages/contact';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Welcome to Our Website!</div>} />
          <Route path="/about"/>
          <Route path="/products" element={<ProductsPage />} />
          {/* Example of a nested route */}
          <Route path="/products/:productId"  element={<ProductsDetails title={''} description={''} colors={[]} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);