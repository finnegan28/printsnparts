import React from 'react';

interface ProductCardProps {
  title: string;
  image: string;
  url: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, image, url }) => {
  return (
    <div className="border bg-white rounded-lg p-4 hover:shadow-lg text-center w-80 h-96 flex flex-col justify-between">
      <div className="flex-grow flex items-center justify-center">
        <img src={image} alt="Product" className="w-full h-48 object-cover mb-4" />
      </div>
      <h2 className="text-lg font-medium mb-4">{title}</h2>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <button className="px-4 py-2 bg-gray-400 text-black text-sm rounded hover:bg-blue-700">
          Learn More
        </button>
      </a>
    </div>
  );
};

export default ProductCard;