import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center p-6 bg-gray-100">
      <article className="bg-white shadow-md rounded-lg p-6 max-w-3xl w-full">
        <header>
          <h1 className="text-4xl font-extrabold text-center mb-6">About Us</h1>
        </header>
        
        <section className="mb-8">
          <header>
            <h2 className="text-3xl font-bold mb-4 text-cyan-700">Background</h2>
          </header>
          <p className="text-gray-700 leading-relaxed mb-6">
            My name is Neil, and I have been 3D printing for many years. I have a background in software engineering and a huge passion for making things.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Last year my Audio Technica headphones broke. Reluctant to buy a new pair after almost 10 years of use, I came up with a few solutions and eventually 3D printed a small bracket to repair them.
          </p>
        </section>
        
        <section className="mb-8">
          <header>
            <h2 className="text-3xl font-bold mb-4 text-cyan-700">Realization</h2>
          </header>
          <p className="text-gray-700 leading-relaxed mb-6">
            I realized that many different headphone models had similar issues and there was a huge need for this type of repair. The build quality of consumer electronics often leaves much to be desired, and replacement parts are not readily available.
          </p>
        </section>
        
        <section className="mb-8">
          <header>
            <h2 className="text-3xl font-bold mb-4 text-cyan-700">My Mission</h2>
          </header>
          <p className="text-gray-700 leading-relaxed mb-6">
            Since then, I have been designing and printing a range of different parts, from headphones to car repair parts. I have been sending my designs to people all over the world and have received great feedback.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            I want to make an impact and keep your stuff from ending up in landfill by offering a way to easily repair your things!
          </p>
        </section>
      </article>
    </section>
  );
};

export default AboutPage;