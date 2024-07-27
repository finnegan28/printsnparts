import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
        <p className="text-gray-700 mb-4">
          My name is Neil, I have been 3d printing for many years now. I have a background in software engineering and I have a huge passion for making things. 
          <p> 
          Last year my Audio Technica headphones broke, and I was very reluctant to buy a new pair, after all, I’ve had them for almost 10 years now. I came up with a few solutions and then finally 3d printed a small bracket to repair them.
          </p>
          <p>
          I realized there was a huge need for this type of repair. The build quality of consumer electronics leaves a lot to be desired, and replacement parts are not readily available.
          </p>
          <p>
          Since then, I have been designing and printing a range of different parts from headphones to car repair parts.
          </p>
          I want to make an impact and keep your stuff from ending up in landfill by offering a way to easily repair your things!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
