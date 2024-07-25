import React from 'react';

const ProductDetails = ({ title, description, colors }: { title: string, description: string, colors: string[] }) => {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <select className="mt-4 px-4 py-2 border rounded">
        {colors.map((color, index) => (
          <option key={index} value={color}>{color}</option>
        ))}
      </select>
    </div>
  );
};

export default ProductDetails;