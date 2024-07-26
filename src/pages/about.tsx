import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
        <p className="text-gray-700 mb-4">
          Welcome to our 3D printing business! We are passionate about bringing your ideas to life with precision and creativity. Whether you need prototypes, custom parts, or unique designs, we have the expertise and technology to deliver high-quality 3D printed products.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
        <ul className="list-disc list-inside mb-4">
          <li className="text-gray-700">Custom 3D Printing</li>
          <li className="text-gray-700">Prototyping</li>
          <li className="text-gray-700">Design Consultation</li>
          <li className="text-gray-700">Small Batch Production</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;