import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-80 bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
            <p className="text-lg text-gray-600">
                /\/\/\/\/\/\/\/\/\/\/\/
            </p>
            <button className="px-4 py-2 mt-8 text-white bg-blue-500 rounded hover:bg-blue-600">
                Get Started
            </button>
        </div>
    );
}

export default HomePage;