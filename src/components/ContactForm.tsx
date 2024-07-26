import React, { useState } from 'react';
import { validateEmail, validateEmailLength } from '../utils/validation';


const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [queryType, setQueryType] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) {
      setError('Name is required.');
      return;
    }
    if (!email) {
      setError('Email is required.');
      return;
    }
    if (!validateEmailLength(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!queryType) {
      setError('Query type is required.');
      return;
    }
    if (!message) {
      setError('Message is required.');
      return;
    }
    setError('');
    setSuccess('');

    try {
      const response = await fetch('https://your-api-endpoint.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, queryType, message }),
      });

      if (response.ok) {
        setSuccess('Your message has been sent successfully.');
        setName('');
        setEmail('');
        setQueryType('');
        setMessage('');
      } else {
        setError('Failed to send your message. Please try again later.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <form className="space-y-6 max-w-md mx-auto p-6 bg-slate-200 shadow-md rounded-lg" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="queryType" className="block text-sm font-medium text-gray-700">Query Type</label>
        <select
          id="queryType"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          value={queryType}
          onChange={(e) => setQueryType(e.target.value)}
        >
          <option value="general">General</option>
          <option value="support">Support</option>
          <option value="sales">Sales</option>
          <option value="feedback">Feedback</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}
      <button type="submit" className="w-full bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Send</button>
    </form>
  );
};

export default ContactForm;