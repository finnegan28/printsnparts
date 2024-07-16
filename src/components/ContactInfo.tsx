// src/components/ContactInfo.tsx
import React from 'react';

interface ContactInfoProps {
  email: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ email }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">Contact Us</h2>
      <p>Email: <a href={`mailto:${email}`} className="text-blue-500">{email}</a></p>
    </div>
  );
};

export default ContactInfo;