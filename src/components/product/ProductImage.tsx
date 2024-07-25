import React from 'react';

export const ProductImage = ({ image, additionalImages }: { image: string, additionalImages: string[] }) => {
  const [mainImage, setMainImage] = React.useState(image);

  return (
    <div className="flex flex-col items-center">
      <img src={mainImage} alt="Main Product" className="w-1/2 h-auto mb-4" />
      <div className="flex space-x-2">
        {additionalImages.map((img, index) => (
          <img key={index} src={img} alt={`Product ${index + 1}`} className="w-16 h-16 cursor-pointer" onClick={() => setMainImage(img)} />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;