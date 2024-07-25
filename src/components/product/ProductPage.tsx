// ProductPage.tsx
import React, { useEffect, useState } from 'react';
import ProductImage from './ProductImage';
import ProductDetails from './ProductDetails';

const ProductPage = ({ productId }: { productId: string }) => {
  const [product, setProduct] = useState<{ title: string, description: string, colors: string[], image: string, additionalImages: string[] } | null>(null);

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <ProductImage image={product.image} additionalImages={product.additionalImages} />
      <ProductDetails title={product.title} description={product.description} colors={product.colors} />
    </div>
  );
};

export default ProductPage;