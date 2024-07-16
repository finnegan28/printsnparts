import React from 'react';

// Product component
const Product = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="border rounded-lg p-4 hover:shadow-lg">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-700">
        Learn More
      </button>
    </div>
  );
};

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold text-center my-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Example Product 1 */}
        <Product
          title="Product 1"
          description="Description for product 1."
        />
        {/* Example Product 2 */}
        <Product
          title="Product 2"
          description="Description for product 2."
        />
        {/* Example Product 3 */}
        <Product
          title="Product 3"
          description="Description for product 3."
        />
      </div>
    </div>
  );
};

export default ProductsPage;