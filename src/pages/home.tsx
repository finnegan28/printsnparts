import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-80 bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Prints n Parts store!</h1>
            <Link to="/products" className="px-4 py-2 mt-8 text-white bg-blue-500 rounded hover:bg-blue-600">
                Get Started
            </Link>
        </div>
    );
}

export default HomePage;