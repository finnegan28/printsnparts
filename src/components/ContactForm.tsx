// src/components/ContactForm.tsx
import React from 'react';

const ContactForm: React.FC = () => {
  // Add form handling logic here
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block">Name</label>
        <input type="text" id="name" className="border rounded p-2 w-full" />
      </div>
      <div>
        <label htmlFor="email" className="block">Email</label>
        <input type="email" id="email" className="border rounded p-2 w-full" />
      </div>
      <div>
        <label htmlFor="message" className="block">Message</label>
        <textarea id="message" className="border rounded p-2 w-full"></textarea>
      </div>
      <button type="submit" className="bg-blue-500 text-white rounded p-2">Send</button>
    </form>
  );
};

export default ContactForm;