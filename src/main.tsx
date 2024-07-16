import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/navbar/navbar';
import ProductsPage from './pages/products';
import ContactPage from './pages/contact';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"/>
          <Route path="/about"/>
          <Route path="/products" element={<ProductsPage />} />
          {/* Example of a nested route */}
          <Route path="/products/:productId" element={<div>Product Details</div>} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);