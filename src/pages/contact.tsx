import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl w-full flex flex-col items-center">
        <div className="mb-4 text-center w-full">
          <h1 className="text-3xl font-semibold mb-4">Need some more help?</h1>
          <p className="text-xl">
            If you have any queries or custom requests, please fill in your details and send us a message and we will get back to you as soon as possible.
          </p>
        </div>
        <div className="w-full max-w-md">
          <p className="text-xl text-cyan-700 p-6 font-bold">
            Email: <a href="mailto:info@printsandparts.com">info@printsandparts.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
